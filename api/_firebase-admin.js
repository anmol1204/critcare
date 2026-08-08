// ============================================================
// CritCare.in — Firebase Admin bootstrap (server-side only)
// ------------------------------------------------------------
// Gives the API routes a trusted, rules-bypassing handle to
// Firebase Auth + Firestore so entitlements (e.g. Pro) can be
// written by the SERVER after a payment is verified — never by
// the browser, which the client can forge.
//
// Required Vercel environment variables (Project → Settings →
// Environment Variables). Get them from the Firebase console:
// Project settings → Service accounts → "Generate new private key".
//   FIREBASE_ADMIN_PROJECT_ID    e.g. ccm-website-c16c0
//   FIREBASE_ADMIN_CLIENT_EMAIL  the service-account email
//   FIREBASE_ADMIN_PRIVATE_KEY   the private key (paste the whole
//                                value; literal "\n" sequences are
//                                converted back to newlines below)
//
// Degrades gracefully: if the vars are absent or the package is
// missing, getAdmin() returns null and callers simply skip the
// server-side grant (nothing crashes).
// ============================================================
let admin = null;
let resolved = false;

function getAdmin() {
  if (resolved) return admin;
  resolved = true;

  const projectId   = process.env.FIREBASE_ADMIN_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  let   privateKey  = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    admin = null;
    return null;
  }

  try {
    const a = require('firebase-admin');
    // Vercel stores the key as a single line with escaped newlines.
    privateKey = privateKey.replace(/\\n/g, '\n');
    if (!a.apps.length) {
      a.initializeApp({
        credential: a.credential.cert({ projectId, clientEmail, privateKey })
      });
    }
    admin = a;
  } catch (e) {
    console.error('[firebase-admin] init failed:', e && e.message);
    admin = null;
  }
  return admin;
}

module.exports = { getAdmin };
