// ============================================================
// CritCare.in — Razorpay order creation (server-side)
// ------------------------------------------------------------
// Creates a Razorpay order using the secret key, which must NEVER
// be exposed to the browser. The amount is fixed here on the server
// so a client cannot tamper with the price.
//
// Required Vercel environment variables:
//   RAZORPAY_KEY_ID      (rzp_test_… or rzp_live_…)
//   RAZORPAY_KEY_SECRET
// ============================================================
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return res.status(500).json({ error: 'Razorpay keys are not set in Vercel environment variables.' });
  }

  // Price is authoritative on the server — never trust an amount from the client.
  const amount = 300000;   // ₹3,000 in paise
  const currency = 'INR';

  try {
    const auth = Buffer.from(keyId + ':' + keySecret).toString('base64');
    const r = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        currency: currency,
        receipt: 'ccpro_' + Date.now(),
        notes: { product: 'CritCare Pro — 1 year' }
      })
    });
    const order = await r.json();
    if (!r.ok) {
      return res.status(502).json({ error: (order && order.error && order.error.description) || 'Order creation failed' });
    }
    // keyId is public (safe to send to the browser); secret never leaves the server.
    return res.status(200).json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId: keyId });
  } catch (e) {
    return res.status(500).json({ error: 'Could not reach Razorpay to create the order.' });
  }
};
