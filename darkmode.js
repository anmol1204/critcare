// CritCare.in — Dark Mode + Search
(function () {
  const html = document.documentElement;
  const STORAGE_KEY = 'critcare-theme';

  function applyTheme(dark) {
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    const btn = document.getElementById('dmToggle');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
  }

  // Apply saved preference immediately (before paint to prevent flash)
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved === 'dark' || (saved === null && prefersDark));

  window.toggleDarkMode = function () {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    const btn = document.getElementById('dmToggle');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  };

  // ── SEARCH ────────────────────────────────────────────────────────────────
  let indexLoaded = false;

  function loadIndex(cb) {
    if (indexLoaded || window.CRITCARE_INDEX) { indexLoaded = true; cb(); return; }
    const s = document.createElement('script');
    s.src = 'search-index.js';
    s.onload = function () { indexLoaded = true; cb(); };
    document.head.appendChild(s);
  }

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function typeLabel(type) {
    if (type === 'topic') return '<span class="sr-type sr-topic">Topic</span>';
    if (type === 'score') return '<span class="sr-type sr-score">Score</span>';
    if (type === 'tool')  return '<span class="sr-type sr-tool">Tool</span>';
    return '<span class="sr-type sr-page">Page</span>';
  }

  // Capped Levenshtein — bails out as soon as the distance clearly exceeds max.
  function editDist(a, b, max) {
    var m = a.length, n = b.length;
    if (Math.abs(m - n) > max) return max + 1;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i; var best = cur[0];
      for (j = 1; j <= n; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        if (cur[j] < best) best = cur[j];
      }
      if (best > max) return max + 1;
      for (j = 0; j <= n; j++) prev[j] = cur[j];
    }
    return prev[n];
  }
  // A query token matches if it's a substring, or a near-miss of some word (typo tolerance).
  function tokenMatch(tok, words, hay) {
    if (hay.indexOf(tok) >= 0) return true;
    if (tok.length < 4) return false;
    var max = tok.length >= 7 ? 2 : 1;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (w.length < 3 || Math.abs(w.length - tok.length) > max) continue;
      if (editDist(tok, w, max) <= max) return true;
    }
    return false;
  }
  // 120/100 = exact phrase (title / anywhere), 50+ = all tokens, else = #tokens; +title bonus.
  function scoreItem(item, q, tokens) {
    var title = item.title.toLowerCase();
    var hay = (item.title + ' ' + item.tags + ' ' + item.desc).toLowerCase();
    if (q && hay.indexOf(q) >= 0) return title.indexOf(q) >= 0 ? 120 : 100;
    if (!tokens.length) return 0;
    var words = hay.split(/[^a-z0-9]+/), matched = 0, titleHits = 0;
    for (var i = 0; i < tokens.length; i++) {
      if (tokenMatch(tokens[i], words, hay)) { matched++; if (title.indexOf(tokens[i]) >= 0) titleHits++; }
    }
    if (matched === 0) return 0;
    return (matched === tokens.length ? 50 + matched : matched) + titleHits * 0.5;
  }

  function doSearch(query) {
    const out = document.getElementById('cc-search-results');
    if (!out) return;
    query = query.trim();
    if (query.length < 2) { out.innerHTML = '<p class="sr-hint">Type at least 2 characters to search…</p>'; return; }
    const q = query.toLowerCase();
    const tokens = q.split(/\s+/).filter(function (t) { return t.length > 0; });
    var scored = [];
    (window.CRITCARE_INDEX || []).forEach(function (item, i) {
      var s = scoreItem(item, q, tokens);
      if (s > 0) scored.push({ item: item, s: s, i: i });
    });
    var maxS = 0;
    scored.forEach(function (x) { if (x.s > maxS) maxS = x.s; });
    if (maxS >= 50) scored = scored.filter(function (x) { return x.s >= 50; });   // drop weak partials when strong hits exist
    scored.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
    const matches = scored.slice(0, 25).map(function (x) { return x.item; });
    if (matches.length === 0) {
      out.innerHTML = '<p class="sr-hint">No results for <strong>' + query + '</strong></p>'; return;
    }
    var acc = window.CritCareAccess;
    var locked = acc && !acc.loggedIn();
    out.innerHTML = matches.map(function (item) {
      var isLocked = locked && acc.isGated(item.url);
      return '<a href="' + (isLocked ? 'login.html?next=' + encodeURIComponent(item.url) : item.url) + '" class="sr-item" onclick="closeSearch()">' +
        typeLabel(item.type) +
        '<span class="sr-title">' + highlight(item.title, query) + (isLocked ? ' <span class="sr-lock">🔒</span>' : '') + '</span>' +
        '<span class="sr-desc">' + (isLocked ? 'Create a login to access all topics &amp; tools.' : item.desc) + '</span>' +
        '</a>';
    }).join('');
  }

  window.openSearch = function () {
    loadIndex(function () {
      const overlay = document.getElementById('cc-search-overlay');
      const input = document.getElementById('cc-search-input');
      if (overlay) {
        overlay.classList.add('active');
        if (input) { input.value = ''; input.focus(); }
        document.getElementById('cc-search-results').innerHTML = '<p class="sr-hint">Search topics, tools, scores, drug doses, guidelines…</p>';
      }
    });
  };

  window.closeSearch = function () {
    const overlay = document.getElementById('cc-search-overlay');
    if (overlay) overlay.classList.remove('active');
  };

  document.addEventListener('DOMContentLoaded', function () {
    // Dark mode icon
    const btn = document.getElementById('dmToggle');
    if (btn) btn.textContent = html.classList.contains('dark') ? '☀️' : '🌙';

    // Inject search button into nav
    const nav = document.querySelector('.nav');
    const dmBtn = document.querySelector('.dm-toggle');
    if (nav && dmBtn) {
      const sb = document.createElement('button');
      sb.id = 'cc-search-btn';
      sb.className = 'cc-search-btn';
      sb.setAttribute('aria-label', 'Search');
      sb.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
      sb.onclick = openSearch;
      nav.insertBefore(sb, dmBtn);
    }

    // Inject search overlay
    const overlay = document.createElement('div');
    overlay.id = 'cc-search-overlay';
    overlay.innerHTML =
      '<div class="cc-search-modal" role="dialog" aria-label="Search CritCare.in">' +
        '<div class="cc-search-header">' +
          '<div class="cc-search-input-wrap">' +
            '<svg class="cc-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
            '<input id="cc-search-input" class="cc-search-input" type="search" placeholder="Search topics, drugs, scores, guidelines…" autocomplete="off" autocorrect="off" spellcheck="false"/>' +
            '<kbd class="cc-search-esc" onclick="closeSearch()">ESC</kbd>' +
          '</div>' +
        '</div>' +
        '<div id="cc-search-results" class="cc-search-results"><p class="sr-hint">Search topics, tools, scores, drug doses, guidelines…</p></div>' +
      '</div>';
    overlay.onclick = function (e) { if (e.target === overlay) closeSearch(); };
    document.body.appendChild(overlay);

    // Live search on input
    const input = document.getElementById('cc-search-input');
    if (input) {
      input.addEventListener('input', function () { doSearch(this.value); });
      input.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSearch(); });
    }

    // Keyboard shortcut: / or Ctrl+K to open search
    document.addEventListener('keydown', function (e) {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) &&
          !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
  });
})();
