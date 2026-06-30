// ============================================================
// CritCare.in — Cloud sync layer (Firestore)
// ------------------------------------------------------------
// Loaded as:  <script type="module" src="cc-cloud.js"></script>
//
// Mirrors the localStorage keys that access.js already uses
// (cc-saved, cc-last, critcare-name/specialty/institute …) into
// a per-user Firestore document  users/{uid}  so that a clinician's
// profile, saved articles, read-later queue and "continue reading"
// position follow them across devices and survive a browser clear.
//
// Degrades gracefully: if Firestore has not yet been enabled in the
// Firebase console, every cloud call is caught and the site keeps
// working on localStorage alone.
//
// Public API (window.CCCloud):
//   .ready()                         → bool, true once first pull done
//   .uid()                           → current user id or null
//   .saveProfile({name,specialty,institute})
//   .addReadLater({url,title})       .removeReadLater(url)
//   .removeSaved(url)
//   .push() / .pushSoon()            → persist local state to cloud
// Fires a `cc-synced` DOM event after each successful pull.
// ============================================================
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp }
  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            "AIzaSyDBe56ZKsRlF_3nEW7tY6jlzZuGWyLevUQ",
  authDomain:        "ccm-website-c16c0.firebaseapp.com",
  projectId:         "ccm-website-c16c0",
  storageBucket:     "ccm-website-c16c0.firebasestorage.app",
  messagingSenderId: "807505080196",
  appId:             "1:807505080196:web:f438c96b0fd755ef03f7d1",
  measurementId:     "G-8FZXQ6C1DM"
};

// Reuse the app instance if another module (e.g. login.html) already created it.
const app  = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

const LS = {
  name: 'critcare-name', email: 'critcare-email',
  spec: 'critcare-specialty', inst: 'critcare-institute',
  saved: 'cc-saved', readlater: 'cc-readlater', last: 'cc-last', pro: 'critcare-pro'
};

function lget(k){ try { return localStorage.getItem(k); } catch (e) { return null; } }
function lset(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
function jget(k, d){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
function jset(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

// Union two {url,title,ts} arrays, keeping the newest entry per url, newest first.
function mergeList(a, b){
  var map = {};
  (a || []).concat(b || []).forEach(function(x){
    if (x && x.url && (!map[x.url] || (x.ts || 0) > (map[x.url].ts || 0))) map[x.url] = x;
  });
  return Object.keys(map).map(function(k){ return map[k]; })
              .sort(function(p, q){ return (q.ts || 0) - (p.ts || 0); });
}

let currentUid = null;
let isReady = false;

async function pull(uid){
  var snap    = await getDoc(doc(db, 'users', uid));
  var existed = snap.exists();
  var cloud   = existed ? (snap.data() || {}) : {};
  // Profile scalars — cloud wins when present, otherwise keep whatever is local.
  if (cloud.name)      lset(LS.name, cloud.name);
  if (cloud.specialty) lset(LS.spec, cloud.specialty);
  if (cloud.institute) lset(LS.inst, cloud.institute);
  if (cloud.pro)       lset(LS.pro, '1');
  // Lists — merge local + cloud so nothing already on this device is lost.
  var mSaved = mergeList(jget(LS.saved, []),     cloud.saved);
  var mLater = mergeList(jget(LS.readlater, []), cloud.readlater);
  jset(LS.saved,     mSaved);
  jset(LS.readlater, mLater);
  // Continue-reading — keep the most recent of the two.
  var ll = jget(LS.last, null), cl = cloud.last || null;
  var last = (!ll) ? cl : (!cl) ? ll : ((cl.ts || 0) > (ll.ts || 0) ? cl : ll);
  if (last) jset(LS.last, last);
  // Did this device hold data the cloud was missing? If so, we owe it an upload.
  var changed = !existed
    || mSaved.length !== (cloud.saved || []).length
    || mLater.length !== (cloud.readlater || []).length
    || (!!lget(LS.name) && !cloud.name)
    || (!!lget(LS.spec) && !cloud.specialty)
    || (!!lget(LS.inst) && !cloud.institute)
    || (lget(LS.pro) === '1' && !cloud.pro);
  return changed;
}

async function push(){
  if (!currentUid) return;
  var data = {
    name:      lget(LS.name) || '',
    email:     lget(LS.email) || '',
    specialty: lget(LS.spec) || '',
    institute: lget(LS.inst) || '',
    saved:     jget(LS.saved, []),
    readlater: jget(LS.readlater, []),
    last:      jget(LS.last, null),
    pro:       lget(LS.pro) === '1',
    updatedAt: serverTimestamp()
  };
  try { await setDoc(doc(db, 'users', currentUid), data, { merge: true }); }
  catch (e) { /* Firestore not enabled yet — stay on localStorage */ }
}

var pushTimer = null;
function pushSoon(){ clearTimeout(pushTimer); pushTimer = setTimeout(push, 800); }

window.CCCloud = {
  ready: function(){ return isReady; },
  uid:   function(){ return currentUid; },
  saveProfile: function(p){
    p = p || {};
    if (p.name)            lset(LS.name, p.name);
    if (p.specialty)       lset(LS.spec, p.specialty);
    if (p.institute != null) lset(LS.inst, p.institute);
    pushSoon();
  },
  addReadLater: function(item){
    if (!item || !item.url) return;
    var a = jget(LS.readlater, []);
    if (!a.some(function(x){ return x.url === item.url; })) { a.unshift(item); jset(LS.readlater, a); }
    pushSoon();
  },
  removeReadLater: function(url){
    jset(LS.readlater, jget(LS.readlater, []).filter(function(x){ return x.url !== url; }));
    pushSoon();
  },
  removeSaved: function(url){
    jset(LS.saved, jget(LS.saved, []).filter(function(x){ return x.url !== url; }));
    pushSoon();
  },
  push: push,
  pushSoon: pushSoon
};

onAuthStateChanged(auth, async function(user){
  if (user){
    currentUid = user.uid;
    if (user.email)       lset(LS.email, user.email);
    if (user.displayName && !lget(LS.name)) lset(LS.name, user.displayName);
    var owesUpload = false;
    try { owesUpload = await pull(user.uid); } catch (e) {}
    // Only write back when this device actually had something new — keeps
    // steady-state navigation to one read and zero writes per page.
    if (owesUpload) { try { await push(); } catch (e) {} }
    isReady = true;
    document.dispatchEvent(new CustomEvent('cc-synced'));
  } else {
    currentUid = null;
  }
});
