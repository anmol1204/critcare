// CritCare.in — Dark Mode
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

  // Set icon after DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('dmToggle');
    if (btn) btn.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
  });
})();
