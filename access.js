// ============================================================
// CritCare.in — Access control (client-side soft gate)
// ------------------------------------------------------------
// NOTE: This is a CLIENT-SIDE gate only. Content still exists in
// the HTML, so this is a sign-up funnel / deterrent, NOT real
// security. For enforced paid access, add a backend that serves
// gated content only to authenticated/paid users + verifies the
// Razorpay payment signature server-side.
// ============================================================
(function () {
  var AUTH_KEY = 'critcare-auth';   // '1' once logged in (free account for now)
  var PRO_KEY  = 'critcare-pro';    // '1' once CritCare Pro purchased (future)

  // Pages that are ALWAYS free (no login needed)
  var FREE = {
    '': 1, 'index.html': 1, 'topics.html': 1, 'login.html': 1, 'pro.html': 1,
    'about.html': 1, 'search.html': 1, 'dashboard.html': 1,
    // free "taster" topic articles:
    'topic-sepsis.html': 1, 'topic-ards.html': 1, 'topic-shock.html': 1,
    'topic-anaphylaxis.html': 1, 'topic-stroke.html': 1, 'topic-acid-base.html': 1
  };

  function fileOf(href) {
    if (!href) return '';
    // strip query/hash and path
    var s = href.split('#')[0].split('?')[0];
    s = s.split('/').pop();
    return s || 'index.html';
  }
  function loggedIn() { try { return localStorage.getItem(AUTH_KEY) === '1'; } catch (e) { return false; } }
  function isPro()    { try { return localStorage.getItem(PRO_KEY)  === '1'; } catch (e) { return false; } }
  function isFree(file) { return !!FREE[fileOf(file)]; }
  function isGated(file) { return !isFree(file); }

  // expose for other scripts (topics page, search, pro page)
  window.CritCareAccess = {
    loggedIn: loggedIn, isPro: isPro, isFree: isFree, isGated: isGated,
    login: function () { try { localStorage.setItem(AUTH_KEY, '1'); } catch (e) {} },
    logout: function () { try { localStorage.removeItem(AUTH_KEY); localStorage.removeItem(PRO_KEY); } catch (e) {} },
    setPro: function () { try { localStorage.setItem(PRO_KEY, '1'); localStorage.setItem(AUTH_KEY, '1'); } catch (e) {} }
  };

  var thisFile = fileOf(location.pathname);
  var gateThisPage = isGated(thisFile) && !loggedIn();

  // Reflect auth state on <html> so CSS can show/hide login banners
  if (loggedIn()) document.documentElement.classList.add('cc-auth');

  // Lock as early as possible to reduce content flash
  if (gateThisPage) document.documentElement.classList.add('cc-locked');

  // ---- Build the lock overlay ----
  function buildGate() {
    if (document.querySelector('.cc-gate')) return;
    var nextParam = encodeURIComponent(thisFile);
    var g = document.createElement('div');
    g.className = 'cc-gate';
    g.innerHTML =
      '<div class="cc-gate-card">' +
        '<div class="cc-gate-lock">🔒</div>' +
        '<h2>Members-only content</h2>' +
        '<p>Create a <strong>free account</strong> to unlock all topics, the ABG Analyser, the AI Tool, the Drug Reference and score calculators.</p>' +
        '<a class="cc-btn cc-btn-primary" href="login.html?next=' + nextParam + '">Create free account / Log in</a>' +
        '<a class="cc-btn cc-btn-ghost" href="pro.html">✦ Explore CritCare Pro — ₹3,000</a>' +
        '<div class="cc-gate-free">Free to read now: ' +
          '<a href="topic-sepsis.html">Sepsis</a> · <a href="topic-ards.html">ARDS</a> · ' +
          '<a href="topic-shock.html">Shock</a> · <a href="topic-anaphylaxis.html">Anaphylaxis</a> · ' +
          '<a href="topic-stroke.html">Stroke</a> · <a href="topic-acid-base.html">Acid–Base</a></div>' +
      '</div>';
    document.body.appendChild(g);
  }

  // ---- Nav: inject Pro link + swap Login/Logout ----
  function decorateNav() {
    var menu = document.getElementById('menu');
    if (!menu) return;
    // Inject a Pro link once (before the login CTA)
    var cta = menu.querySelector('a.nav-cta');
    if (!menu.querySelector('.nav-pro')) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="pro.html" class="nav-pro">✦ Pro</a>';
      if (cta && cta.parentNode) menu.insertBefore(li, cta.parentNode);
      else menu.appendChild(li);
    }
    // Auth state
    if (cta) {
      if (loggedIn()) {
        // Inject an account link (→ dashboard) showing the user's first name
        if (!menu.querySelector('.nav-account')) {
          var name = '';
          try { name = localStorage.getItem('critcare-name') || ''; } catch (e) {}
          var first = name.replace(/^dr\.?\s*/i, '').trim().split(/\s+/)[0];
          var al = document.createElement('li');
          al.innerHTML = '<a href="dashboard.html" class="nav-account">👤 ' + (first ? first : 'Dashboard') + '</a>';
          if (cta.parentNode) menu.insertBefore(al, cta.parentNode);
        }
        cta.textContent = 'Log out';
        cta.setAttribute('href', '#');
        cta.addEventListener('click', function (e) {
          e.preventDefault();
          window.CritCareAccess.logout();
          try { localStorage.removeItem('critcare-name'); localStorage.removeItem('critcare-email'); } catch (er) {}
          location.href = 'index.html';
        });
      } else {
        // keep "Login" → login page
        if (/login/i.test(cta.textContent) === false) cta.textContent = 'Login';
        cta.setAttribute('href', 'login.html');
      }
    }
  }

  // ---- Mark locked topic/feature cards with a badge ----
  function markLockedCards() {
    if (loggedIn()) return;
    var cards = document.querySelectorAll('a.card, a.feature-card');
    cards.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && isGated(href) && !a.querySelector('.cc-lock-badge')) {
        a.classList.add('cc-card-locked');
        var b = document.createElement('span');
        b.className = 'cc-lock-badge';
        b.textContent = '🔒 Login to access';
        a.appendChild(b);
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    decorateNav();
    markLockedCards();
    if (gateThisPage) buildGate();
  });
})();
