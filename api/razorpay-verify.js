// ============================================================
// CritCare.in — Razorpay payment signature verification
// ------------------------------------------------------------
// After checkout, Razorpay returns order_id, payment_id and a
// signature. The signature is HMAC-SHA256(order_id|payment_id)
// keyed with the secret. Verifying it here proves the success
// callback genuinely came from Razorpay and was not forged.
//
// Required Vercel environment variable:
//   RAZORPAY_KEY_SECRET
// ============================================================
const crypto = require('crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    return res.status(500).json({ verified: false, error: 'Razorpay secret is not set in Vercel environment variables.' });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, idToken } = req.body || {};
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ verified: false, error: 'Missing payment fields' });
  }

  const expected = crypto
    .createHmac('sha256', keySecret)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  // Constant-time comparison to avoid timing leaks.
  let verified = false;
  try {
    const a = Buffer.from(expected, 'utf8');
    const b = Buffer.from(razorpay_signature, 'utf8');
    verified = a.length === b.length && crypto.timingSafeEqual(a, b);
  } catch (e) {
    verified = false;
  }

  // ── Server-side Pro grant ────────────────────────────────────────────────
  // Once the signature is trusted, write the entitlement from the SERVER so
  // the browser can never mint its own Pro. Requires the caller to send the
  // signed-in user's Firebase ID token AND the Firebase Admin env vars to be
  // set (see api/_firebase-admin.js). If either is absent we still report the
  // payment as verified — the grant just isn't persisted server-side yet.
  let proGranted = false;
  if (verified && idToken) {
    try {
      const { getAdmin } = require('./_firebase-admin');
      const admin = getAdmin();
      if (admin) {
        const decoded = await admin.auth().verifyIdToken(idToken);
        await admin.firestore().collection('users').doc(decoded.uid).set({
          pro:           true,
          proSince:      admin.firestore.FieldValue.serverTimestamp(),
          lastPaymentId: razorpay_payment_id,
          lastOrderId:   razorpay_order_id
        }, { merge: true });
        proGranted = true;
      }
    } catch (e) {
      console.error('[pro-grant] failed:', e && e.message);
    }
  }

  return res.status(200).json({ verified: verified, proGranted: proGranted, paymentId: razorpay_payment_id });
};
