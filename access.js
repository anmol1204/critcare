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
    // engagement hubs (pilot — free to explore):
    'mcqs.html': 1, 'quick-revision.html': 1, 'flashcards.html': 1,
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
  // DNB papers (hub + pre-rendered solved-paper pages) are always free & crawlable.
  function isFree(file) { var f = fileOf(file); return !!FREE[f] || /^dnb/.test(f); }
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
        // Inject a Library opener (saved + read-later drawer)
        if (!menu.querySelector('.nav-library')) {
          var lib = document.createElement('li');
          lib.innerHTML = '<a href="#" class="nav-library">🔖 Library</a>';
          if (cta.parentNode) menu.insertBefore(lib, cta.parentNode);
          lib.querySelector('a').addEventListener('click', function (e) {
            e.preventDefault();
            if (window.CCPanel) window.CCPanel.open();
          });
        }
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

  // ---- Declutter the nav: move secondary items into a "More ▾" dropdown ----
  function groupNav() {
    var menu = document.getElementById('menu');
    if (!menu || menu.getAttribute('data-grouped')) return;
    // items that always stay visible up front
    var PRIMARY = { 'index.html': 1, 'topics.html': 1, 'mcqs.html': 1, 'quick-revision.html': 1, 'dnb.html': 1 };
    var lis = [].slice.call(menu.children);
    var secondary = [];
    lis.forEach(function (li) {
      var a = li.querySelector('a'); if (!a) return;
      if (a.classList.contains('nav-cta') || a.classList.contains('nav-pro') ||
          a.classList.contains('nav-library') || a.classList.contains('nav-account')) return;
      var f = fileOf(a.getAttribute('href') || '');
      if (!PRIMARY[f]) secondary.push(li);
    });
    if (secondary.length < 3) return; // not worth a dropdown
    var more = document.createElement('li');
    more.className = 'nav-more';
    more.innerHTML = '<a href="#" class="nav-more-btn">More <span aria-hidden="true">▾</span></a><ul class="nav-more-menu"></ul>';
    var sub = more.querySelector('.nav-more-menu');
    // insert the dropdown just before the first "special" item (Pro/Library/account/Login)
    var anchor = menu.querySelector('.nav-pro, .nav-library, .nav-account, .nav-cta');
    var anchorLi = anchor ? anchor.closest('li') : null;
    if (anchorLi) menu.insertBefore(more, anchorLi); else menu.appendChild(more);
    secondary.forEach(function (li) { sub.appendChild(li); });
    var btn = more.querySelector('.nav-more-btn');
    btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); more.classList.toggle('open'); });
    document.addEventListener('click', function (e) { if (!more.contains(e.target)) more.classList.remove('open'); });
    menu.setAttribute('data-grouped', '1');
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

  // ── Mark topic/feature cards with a "read" / "% read" badge ──
  function markProgressCards() {
    var prog = engGet('cc-progress', {});
    if (!prog || !Object.keys(prog).length) return;
    injectProgressStyles();
    var cards = document.querySelectorAll('a.card, a.feature-card, a.qa-card');
    cards.forEach(function (a) {
      if (a.querySelector('.cc-read-badge')) return;
      var p = prog[fileOf(a.getAttribute('href') || '')];
      if (!p || (!p.done && !(p.pct > 0))) return;
      var b = document.createElement('span');
      if (p.done) { b.className = 'cc-read-badge done'; b.textContent = '✓ Read'; }
      else { b.className = 'cc-read-badge'; b.textContent = p.pct + '% read'; }
      a.classList.add('cc-card-hasread');
      a.appendChild(b);
    });
  }

  // ── Multi-page (tabbed) topics: roll section progress up onto the tab strip ──
  function renderTabProgress() {
    if (!loggedIn()) return;
    var nav = document.querySelector('.airway-tabs');
    var wrap = document.querySelector('.airway-tabs-wrap');
    if (!nav || !wrap) return;
    var prog = engGet('cc-progress', {});
    var seen = {}, pages = [];
    [].slice.call(nav.querySelectorAll('a[href]')).forEach(function (a) {
      var f = fileOf(a.getAttribute('href'));
      if (f && !seen[f]) { seen[f] = 1; pages.push({ a: a, f: f }); }
    });
    if (pages.length < 2) return;               // not a real multi-page topic
    injectProgressStyles();
    var done = 0;
    pages.forEach(function (p) {
      var pr = prog[p.f];
      if (pr && pr.done) {
        done++;
        p.a.classList.add('cc-tab-done');
        if (!p.a.querySelector('.cc-tab-tick')) {
          var t = document.createElement('span');
          t.className = 'cc-tab-tick'; t.setAttribute('aria-hidden', 'true'); t.textContent = '✓';
          p.a.appendChild(t);
        }
      }
    });
    var pct = Math.round(done / pages.length * 100);
    var complete = done >= pages.length;
    var roll = document.getElementById('cc-tabroll');
    if (!roll) {
      roll = document.createElement('div'); roll.id = 'cc-tabroll'; roll.className = 'cc-tabroll';
      wrap.parentNode.insertBefore(roll, wrap.nextSibling);
    }
    roll.classList.toggle('complete', complete);
    roll.innerHTML =
      '<span class="cc-tr-ic">' + (complete ? '🎉' : '📖') + '</span>' +
      '<span class="cc-tr-txt"><b>' + done + '</b> of <b>' + pages.length + '</b> sections read' +
        (complete ? ' — topic complete' : '') + '</span>' +
      '<span class="cc-tr-bar"><span style="width:' + pct + '%"></span></span>' +
      '<span class="cc-tr-pct">' + pct + '%</span>';
  }

  // ── Engagement: reading time, last-read, bookmarks (logged-in only) ──
  function engGet(k, def) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
  function engSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  // ── Reading progress + completion (per-article) ──────────────────────
  // cc-progress: { "<file>": { pct, done, sec, secTotal, title, ts } }
  var PROG_KEY   = 'cc-progress';
  var COMPLETE_AT = 90;           // max scroll-depth % that counts as "read"

  function progAll() { return engGet(PROG_KEY, {}); }
  function progGet(u) { var a = progAll(); return a[u] || null; }
  function progSave(u, patch) {
    var a = progAll(), cur = a[u] || {}, k;
    for (k in patch) cur[k] = patch[k];
    cur.ts = Date.now();
    a[u] = cur;
    engSet(PROG_KEY, a);
    try { if (window.CCCloud && window.CCCloud.pushSoon) window.CCCloud.pushSoon(); } catch (e) {}
  }

  function injectProgressStyles() {
    if (document.getElementById('cc-progress-css')) return;
    var s = document.createElement('style');
    s.id = 'cc-progress-css';
    s.textContent =
      // completion chip (article pages)
      '.cc-prog-chip{position:fixed;left:1rem;bottom:5.2rem;z-index:120;background:var(--bg);border:1.5px solid var(--line);color:var(--slate);font-weight:700;font-size:.78rem;padding:.45rem .8rem;border-radius:30px;box-shadow:0 4px 16px rgba(0,0,0,.16);font-family:var(--font-body);display:flex;align-items:center;gap:.45rem;cursor:default;}' +
      '.cc-prog-chip.done{border-color:#16a34a;color:#16a34a;}' +
      'html.dark .cc-prog-chip.done{border-color:#22c55e;color:#4ade80;}' +
      '.cc-prog-chip.flash{animation:ccProgPulse .55s ease 2;}' +
      '@keyframes ccProgPulse{50%{transform:scale(1.09);box-shadow:0 6px 22px rgba(22,163,74,.45);}}' +
      '@media(min-width:821px){.cc-prog-chip{bottom:1.5rem;}}' +
      '.cc-prog-ring{width:14px;height:14px;border-radius:50%;flex-shrink:0;background:conic-gradient(var(--accent) calc(var(--p,0)*1%),var(--line) 0);}' +
      // section ticks beside each h2 inside the article
      '.topic-content h2.cc-sec-h{position:relative;}' +
      '.cc-sec-tick{display:inline-flex;align-items:center;justify-content:center;width:1.05em;height:1.05em;margin-right:.45em;vertical-align:-0.1em;}' +
      '.cc-sec-dot{width:.72em;height:.72em;border-radius:50%;border:2px solid var(--line);box-sizing:border-box;transition:background .25s,border-color .25s;position:relative;}' +
      'h2.cc-sec-read .cc-sec-dot{background:#16a34a;border-color:#16a34a;}' +
      'h2.cc-sec-read .cc-sec-dot::after{content:"\\2713";position:absolute;inset:0;color:#fff;font-size:.5em;line-height:1;display:flex;align-items:center;justify-content:center;font-weight:900;}' +
      // "read" badge on topic/feature cards (listing pages)
      'a.card.cc-card-hasread,a.feature-card.cc-card-hasread,a.qa-card.cc-card-hasread{position:relative;}' +
      '.cc-read-badge{position:absolute;top:.6rem;right:.6rem;z-index:3;background:var(--bg-alt);border:1px solid var(--line);color:var(--slate);font-size:.62rem;font-weight:800;letter-spacing:.02em;padding:.16rem .5rem;border-radius:20px;}' +
      '.cc-read-badge.done{background:#dcfce7;border-color:#86efac;color:#15803d;}' +
      'html.dark .cc-read-badge.done{background:#0f2a1a;border-color:#16613a;color:#4ade80;}' +
      // tabbed-topic rollup bar (below the tab strip) + per-tab ticks
      '.cc-tabroll{max-width:1180px;margin:.55rem auto;padding:0 .9rem;display:flex;align-items:center;gap:.6rem;font-size:.8rem;color:var(--ink);font-family:var(--font-body);}' +
      '.cc-tabroll .cc-tr-ic{font-size:1rem;flex-shrink:0;}' +
      '.cc-tabroll .cc-tr-txt{white-space:nowrap;} .cc-tabroll .cc-tr-txt b{color:var(--blue-dark);}' +
      '.cc-tabroll.complete .cc-tr-txt b{color:#15803d;}' +
      '.cc-tr-bar{flex:1;height:7px;min-width:60px;border-radius:20px;background:var(--bg-alt);border:1px solid var(--line);overflow:hidden;}' +
      '.cc-tr-bar>span{display:block;height:100%;background:linear-gradient(90deg,var(--accent),#16a34a);transition:width .5s ease;}' +
      '.cc-tr-pct{font-weight:800;font-size:.72rem;color:var(--accent);flex-shrink:0;}' +
      '.airway-tabs a .cc-tab-tick{margin-left:.15em;color:#5ce08f;font-weight:900;font-size:.85em;}' +
      '.airway-tabs a.active .cc-tab-tick{color:#dcfce7;}' +
      '.airway-tabs a:not(.active).cc-tab-done{color:#15803d;}' +
      'html.dark .airway-tabs a:not(.active).cc-tab-done{color:#4ade80;}';
    document.head.appendChild(s);
  }

  function trackTime() {
    var t = parseInt(localStorage.getItem('cc-time') || '0', 10) || 0;
    setInterval(function () {
      if (document.visibilityState === 'visible') { t += 15; try { localStorage.setItem('cc-time', String(t)); } catch (e) {} }
    }, 15000);
  }

  function articleTitle() {
    var h1 = document.querySelector('.topic-hero h1');
    var txt = h1 ? h1.textContent : document.title;
    return txt.replace(/^[^A-Za-z0-9]*\s*/, '').replace(/\s*[—|].*$/, '').trim();
  }

  function initEngagement() {
    if (!loggedIn()) return;
    trackTime();
    var content = document.querySelector('.topic-content');
    if (!content) return; // article pages only
    var url = thisFile, title = articleTitle();
    engSet('cc-last', { url: url, title: title, ts: Date.now() });

    // ── reading progress bar + completion tracking ──
    injectProgressStyles();
    var bar = document.createElement('div');
    bar.className = 'cc-readbar';
    document.body.appendChild(bar);

    var prev    = progGet(url) || {};
    var maxPct  = prev.pct || 0;
    var done    = !!prev.done;
    var heads   = [].slice.call(content.querySelectorAll('h2'));
    var secTotal = heads.length;
    var readSet = {};

    // completion chip (shows live % → turns into "✓ Read")
    var chip = document.createElement('div');
    chip.className = 'cc-prog-chip';
    document.body.appendChild(chip);
    function paintChip() {
      if (done) { chip.className = 'cc-prog-chip done'; chip.innerHTML = '✓ Read'; }
      else { chip.className = 'cc-prog-chip';
        chip.innerHTML = '<span class="cc-prog-ring" style="--p:' + maxPct + '"></span>' + maxPct + '% read'; }
    }
    paintChip();

    // tick markers beside each section heading
    heads.forEach(function (h, i) {
      h.classList.add('cc-sec-h');
      h.setAttribute('data-cc-sec', i);
      var t = document.createElement('span');
      t.className = 'cc-sec-tick'; t.setAttribute('aria-hidden', 'true');
      t.innerHTML = '<span class="cc-sec-dot"></span>';
      h.insertBefore(t, h.firstChild);
    });
    // restore ticks already earned on a previous visit (best-effort: first N)
    if (prev.sec) heads.slice(0, Math.min(prev.sec, secTotal)).forEach(function (h, i) {
      readSet[i] = 1; h.classList.add('cc-sec-read');
    });

    var saveTimer = null;
    function persist() {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () {
        progSave(url, { pct: maxPct, done: done, sec: Object.keys(readSet).length,
                        secTotal: secTotal, title: title });
      }, 600);
    }
    function markComplete() {
      if (done) return;
      done = true; maxPct = Math.max(maxPct, 100);
      // fill any remaining section ticks
      heads.forEach(function (h, i) { readSet[i] = 1; h.classList.add('cc-sec-read'); });
      paintChip();
      chip.classList.add('flash');
      setTimeout(function () { chip.classList.remove('flash'); }, 1300);
      progSave(url, { pct: 100, done: true, sec: secTotal, secTotal: secTotal, title: title });
      renderTabProgress();   // refresh the tab-strip rollup live if this is a tabbed topic
    }

    // tick a section once its heading scrolls up into the reading zone
    if ('IntersectionObserver' in window && secTotal) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var idx = e.target.getAttribute('data-cc-sec');
          if (readSet[idx]) return;
          readSet[idx] = 1;
          e.target.classList.add('cc-sec-read');
          persist();
          if (Object.keys(readSet).length >= secTotal) markComplete();
        });
      }, { rootMargin: '0px 0px -70% 0px', threshold: 0.01 });
      heads.forEach(function (h) { io.observe(h); });
    }

    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? Math.round(h.scrollTop / max * 100) : 100;
      bar.style.width = pct + '%';
      if (pct > maxPct) { maxPct = pct; if (!done) paintChip(); persist(); }
      if (!done && maxPct >= COMPLETE_AT) markComplete();
    }, { passive: true });

    // short articles that don't scroll: count as read after a dwell
    if (document.documentElement.scrollHeight - document.documentElement.clientHeight < 40) {
      setTimeout(function () { if (!done) { maxPct = 100; markComplete(); } }, 8000);
    }
    // seed a record so "started" shows on the dashboard even before scrolling
    if (!prev.ts) progSave(url, { pct: maxPct, done: done, sec: Object.keys(readSet).length,
                                  secTotal: secTotal, title: title });

    function cloudPush() { try { if (window.CCCloud && window.CCCloud.pushSoon) window.CCCloud.pushSoon(); } catch (e) {} }
    function toggleIn(key, btn, onCls, onHtml, offCls, offHtml) {
      var arr = engGet(key, []);
      var i = -1;
      for (var k = 0; k < arr.length; k++) { if (arr[k].url === url) { i = k; break; } }
      if (i >= 0) { arr.splice(i, 1); btn.className = offCls; btn.innerHTML = offHtml; }
      else { arr.unshift({ url: url, title: title, ts: Date.now() }); btn.className = onCls; btn.innerHTML = onHtml; }
      engSet(key, arr);
      cloudPush();
    }

    // save / bookmark toggle
    var isSaved = engGet('cc-saved', []).some(function (x) { return x.url === url; });
    var btn = document.createElement('button');
    btn.className = 'cc-save-btn' + (isSaved ? ' saved' : '');
    btn.innerHTML = isSaved ? '★ Saved' : '☆ Save';
    btn.setAttribute('aria-label', 'Save this article');
    btn.onclick = function () { toggleIn('cc-saved', btn, 'cc-save-btn saved', '★ Saved', 'cc-save-btn', '☆ Save'); };
    document.body.appendChild(btn);

    // read-later queue toggle
    var isLater = engGet('cc-readlater', []).some(function (x) { return x.url === url; });
    var lbtn = document.createElement('button');
    lbtn.className = 'cc-later-btn' + (isLater ? ' queued' : '');
    lbtn.innerHTML = isLater ? '✓ Read later' : '📑 Read later';
    lbtn.setAttribute('aria-label', 'Add to read-later queue');
    lbtn.onclick = function () { toggleIn('cc-readlater', lbtn, 'cc-later-btn queued', '✓ Read later', 'cc-later-btn', '📑 Read later'); };
    document.body.appendChild(lbtn);
  }

  // ============================================================
  //  Library drawer (Saved + Read-later) — site-wide
  //  Continue-reading banner — site-wide
  // ============================================================
  function isArticle() { return !!document.querySelector('.topic-content'); }

  function injectWidgetStyles() {
    if (document.getElementById('cc-widget-css')) return;
    var s = document.createElement('style');
    s.id = 'cc-widget-css';
    s.textContent =
      '.cc-lib-btn{position:fixed;right:1rem;bottom:5.2rem;z-index:120;background:var(--bg);border:1.5px solid var(--blue);color:var(--blue);font-weight:700;font-size:.82rem;padding:.55rem .95rem;border-radius:30px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.18);font-family:var(--font-body);}' +
      '.cc-lib-btn .cc-lib-n{display:inline-block;min-width:18px;margin-left:.35rem;background:var(--blue);color:#fff;border-radius:20px;font-size:.7rem;padding:.02rem .35rem;}' +
      '@media(min-width:821px){.cc-lib-btn{bottom:1.5rem;}}' +
      '.cc-drawer-ov{position:fixed;inset:0;background:rgba(8,15,30,.55);z-index:1400;opacity:0;pointer-events:none;transition:opacity .22s;}' +
      '.cc-drawer-ov.show{opacity:1;pointer-events:auto;}' +
      '.cc-drawer{position:fixed;top:0;right:0;height:100%;width:min(380px,88vw);background:var(--bg);z-index:1401;box-shadow:-8px 0 40px rgba(0,0,0,.3);transform:translateX(100%);transition:transform .26s ease;display:flex;flex-direction:column;}' +
      '.cc-drawer.show{transform:translateX(0);}' +
      '.cc-drawer-head{padding:1.1rem 1.2rem;border-bottom:1px solid var(--line);display:flex;align-items:center;justify-content:space-between;}' +
      '.cc-drawer-head h3{font-family:var(--font-disp);font-size:1.15rem;color:var(--ink);}' +
      '.cc-drawer-x{background:none;border:none;font-size:1.3rem;color:var(--slate);cursor:pointer;line-height:1;}' +
      '.cc-drawer-body{overflow-y:auto;padding:1rem 1.2rem 2rem;flex:1;}' +
      '.cc-lib-sec{font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--slate);margin:1rem 0 .5rem;display:flex;align-items:center;gap:.4rem;}' +
      '.cc-lib-sec:first-child{margin-top:0;}' +
      '.cc-lib-item{display:flex;align-items:center;gap:.6rem;padding:.6rem .7rem;border:1px solid var(--line);border-radius:11px;margin-bottom:.5rem;background:var(--bg-alt);}' +
      '.cc-lib-item a{flex:1;text-decoration:none;color:var(--ink);font-size:.86rem;font-weight:600;line-height:1.4;}' +
      '.cc-lib-item a:hover{color:var(--blue);}' +
      '.cc-lib-rm{background:none;border:none;color:var(--slate);cursor:pointer;font-size:1rem;flex-shrink:0;}' +
      '.cc-lib-rm:hover{color:#ef4444;}' +
      '.cc-lib-empty{font-size:.82rem;color:var(--slate);padding:.4rem .1rem 0;line-height:1.5;}' +
      '.cc-resume-bar{background:linear-gradient(135deg,var(--blue-soft),var(--bg));border-bottom:1px solid var(--blue);padding:.6rem 5%;display:flex;align-items:center;gap:.7rem;font-size:.85rem;color:var(--ink);}' +
      '.cc-resume-bar .cc-r-ic{font-size:1rem;}' +
      '.cc-resume-bar .cc-r-txt{flex:1;line-height:1.35;}' +
      '.cc-resume-bar .cc-r-txt b{color:var(--blue-dark);}' +
      '.cc-resume-bar a.cc-r-go{background:var(--blue);color:#fff;text-decoration:none;font-weight:700;font-size:.8rem;padding:.4rem .9rem;border-radius:8px;white-space:nowrap;}' +
      '.cc-resume-bar .cc-r-x{background:none;border:none;color:var(--slate);font-size:1.1rem;cursor:pointer;line-height:1;}' +
      'html.dark .cc-resume-bar{background:#0d1b2e;}';
    document.head.appendChild(s);
  }

  function libCount() { return engGet('cc-saved', []).length + engGet('cc-readlater', []).length; }

  function renderLibrary() {
    var body = document.getElementById('cc-drawer-body');
    if (!body) return;
    function section(icon, label, key, empty) {
      var arr = engGet(key, []);
      var items = arr.length ? arr.map(function (x) {
        return '<div class="cc-lib-item" data-key="' + key + '" data-url="' + x.url + '">' +
          '<a href="' + x.url + '">' + (x.title || x.url) + '</a>' +
          '<button class="cc-lib-rm" title="Remove" aria-label="Remove">✕</button></div>';
      }).join('') : '<div class="cc-lib-empty">' + empty + '</div>';
      return '<div class="cc-lib-sec">' + icon + ' ' + label + ' <span style="margin-left:auto;color:var(--slate);">' + arr.length + '</span></div>' + items;
    }
    body.innerHTML =
      section('★', 'Saved', 'cc-saved', 'Nothing saved yet. Tap ☆ Save on any article to keep it here.') +
      section('📑', 'Read later', 'cc-readlater', 'Your read-later queue is empty. Tap 📑 Read later on an article to add it.');
    body.querySelectorAll('.cc-lib-rm').forEach(function (btn) {
      btn.onclick = function () {
        var wrap = btn.closest('.cc-lib-item');
        var key = wrap.getAttribute('data-key'), url = wrap.getAttribute('data-url');
        var arr = engGet(key, []).filter(function (x) { return x.url !== url; });
        engSet(key, arr);
        try { if (window.CCCloud && window.CCCloud.pushSoon) window.CCCloud.pushSoon(); } catch (e) {}
        renderLibrary(); updateLibBtn();
      };
    });
  }

  function updateLibBtn() {
    var b = document.getElementById('cc-lib-btn');
    if (!b) return;
    var n = libCount();
    b.querySelector('.cc-lib-n').textContent = n;
  }

  function buildLibrary() {
    if (!loggedIn()) return;
    if (document.getElementById('cc-drawer')) return;
    injectWidgetStyles();
    var ov = document.createElement('div'); ov.className = 'cc-drawer-ov'; ov.id = 'cc-drawer-ov';
    var dr = document.createElement('div'); dr.className = 'cc-drawer'; dr.id = 'cc-drawer';
    dr.innerHTML =
      '<div class="cc-drawer-head"><h3>📚 Your library</h3><button class="cc-drawer-x" aria-label="Close">✕</button></div>' +
      '<div class="cc-drawer-body" id="cc-drawer-body"></div>';
    document.body.appendChild(ov); document.body.appendChild(dr);

    window.CCPanel = {
      open: function () { renderLibrary(); ov.classList.add('show'); dr.classList.add('show'); },
      close: function () { ov.classList.remove('show'); dr.classList.remove('show'); }
    };
    ov.onclick = window.CCPanel.close;
    dr.querySelector('.cc-drawer-x').onclick = window.CCPanel.close;

    // floating launcher (skip on article pages — those already have Save/Read-later buttons)
    if (!isArticle()) {
      var btn = document.createElement('button');
      btn.className = 'cc-lib-btn'; btn.id = 'cc-lib-btn';
      btn.innerHTML = '🔖 Library<span class="cc-lib-n">0</span>';
      btn.onclick = window.CCPanel.open;
      document.body.appendChild(btn);
      updateLibBtn();
    }
  }

  function buildResumeBanner() {
    if (!loggedIn() || isArticle()) return;
    var last = engGet('cc-last', null);
    if (!last || !last.url || last.url === fileOf(location.pathname)) return;
    var seen = false; try { seen = sessionStorage.getItem('cc-resume-seen') === '1'; } catch (e) {}
    if (seen) return;
    injectWidgetStyles();
    var nav = document.querySelector('nav.nav');
    var bar = document.createElement('div');
    bar.className = 'cc-resume-bar';
    bar.innerHTML =
      '<span class="cc-r-ic">▶️</span>' +
      '<span class="cc-r-txt">Pick up where you left off — <b>' + (last.title || 'your last article') + '</b></span>' +
      '<a class="cc-r-go" href="' + last.url + '">Resume</a>' +
      '<button class="cc-r-x" aria-label="Dismiss">✕</button>';
    if (nav && nav.parentNode) nav.parentNode.insertBefore(bar, nav.nextSibling);
    else document.body.insertBefore(bar, document.body.firstChild);
    bar.querySelector('.cc-r-x').onclick = function () {
      bar.remove(); try { sessionStorage.setItem('cc-resume-seen', '1'); } catch (e) {}
    };
    bar.querySelector('.cc-r-go').addEventListener('click', function () {
      try { sessionStorage.setItem('cc-resume-seen', '1'); } catch (e) {}
    });
  }

  // Expose an opener so nav / other pages can trigger the drawer
  window.CritCareLibrary = { open: function () { if (window.CCPanel) window.CCPanel.open(); } };

  // ============================================================
  // Screenshot deterrents (web).
  // NOTE: a browser CANNOT truly block OS screenshots. This is a
  // DETERRENT layer: a per-user traceable watermark (so any leaked
  // screenshot points to the account), print/save-to-PDF blocking,
  // and a best-effort PrintScreen guard. Real prevention lives in
  // the Android app via FLAG_SECURE.
  // ============================================================
  function userTag() {
    var email = '', name = '';
    try { email = localStorage.getItem('critcare-email') || ''; } catch (e) {}
    try { name  = localStorage.getItem('critcare-name')  || ''; } catch (e) {}
    return email || name || '';
  }

  function buildWatermark() {
    // Only stamp gated pages for a signed-in user — keep free/public
    // pages (and SEO) clean.
    if (isFree(thisFile)) return;
    var tag = userTag();
    if (!tag) return;

    var stamp = tag + '  ·  CritCare.in  ·  ' + new Date().toISOString().slice(0, 10);
    // Diagonal repeating text baked into an SVG tile — appears in any
    // screenshot but never blocks interaction (pointer-events:none).
    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='340' height='200'>" +
      "<text x='20' y='120' transform='rotate(-30 170 100)' " +
      "fill='rgba(128,128,128,0.14)' font-family='sans-serif' font-size='13' " +
      "font-weight='600'>" + stamp.replace(/&/g, '&amp;').replace(/</g, '&lt;') + "</text></svg>";
    var url = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);

    var wm = document.createElement('div');
    wm.id = 'cc-watermark';
    wm.setAttribute('aria-hidden', 'true');
    wm.style.cssText =
      'position:fixed;inset:0;z-index:2147483000;pointer-events:none;' +
      'background-image:url("' + url + '");background-repeat:repeat;' +
      'mix-blend-mode:multiply;';
    document.body.appendChild(wm);

    // Re-attach if something (or the user via devtools) removes it.
    try {
      new MutationObserver(function () {
        if (!document.getElementById('cc-watermark')) document.body.appendChild(wm);
      }).observe(document.body, { childList: true });
    } catch (e) {}
  }

  function buildScreenshotGuards() {
    if (isFree(thisFile)) return;

    // 1) Block print / save-to-PDF of gated content.
    var st = document.createElement('style');
    st.textContent =
      '@media print { body * { visibility:hidden !important; } ' +
      'body::before { content:"CritCare.in — printing is disabled for this content."; ' +
      'visibility:visible; display:block; padding:40px; font:16px sans-serif; } }';
    document.head.appendChild(st);

    // 2) Best-effort PrintScreen deterrent: blank the clipboard + flash
    //    the watermark. (Cannot stop the OS capture itself.)
    document.addEventListener('keyup', function (e) {
      if (e.key === 'PrintScreen') {
        try { navigator.clipboard && navigator.clipboard.writeText(''); } catch (er) {}
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    decorateNav();
    groupNav();
    markLockedCards();
    markProgressCards();
    if (gateThisPage) buildGate();
    initEngagement();
    renderTabProgress();
    buildLibrary();
    buildResumeBanner();
    buildWatermark();
    buildScreenshotGuards();
  });
})();
