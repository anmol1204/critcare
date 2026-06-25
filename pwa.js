// CritCare.in PWA — Service Worker registration + Install Prompt
(function() {

  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  // Install prompt logic
  let deferredPrompt = null;
  const DISMISSED_KEY = 'pwa-install-dismissed';
  const INSTALL_DATE_KEY = 'pwa-install-date';

  // Don't show if already installed or dismissed in last 7 days
  function shouldShowPrompt() {
    if (window.matchMedia('(display-mode: standalone)').matches) return false;
    if (window.navigator.standalone === true) return false;
    const dismissed = localStorage.getItem(DISMISSED_KEY);
    if (dismissed) {
      const daysSince = (Date.now() - parseInt(dismissed)) / (1000 * 60 * 60 * 24);
      if (daysSince < 7) return false;
    }
    return true;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (shouldShowPrompt()) {
      setTimeout(showInstallBanner, 3000); // Show after 3s on page
    }
  });

  function showInstallBanner() {
    if (document.getElementById('pwa-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'pwa-banner';
    banner.innerHTML = `
      <div style="display:flex;align-items:center;gap:.8rem;flex:1;">
        <img src="/icon-192.png" style="width:40px;height:40px;border-radius:10px;flex-shrink:0;" alt="CritCare"/>
        <div>
          <div style="font-weight:700;font-size:.9rem;color:#fff;">Add CritCare.in to Home Screen</div>
          <div style="font-size:.75rem;color:rgba(255,255,255,.7);">Quick access to ICU reference, ABG & Scores</div>
        </div>
      </div>
      <div style="display:flex;gap:.5rem;flex-shrink:0;">
        <button id="pwa-install-btn" style="background:#1e6fd9;color:#fff;border:none;border-radius:8px;padding:.5rem 1rem;font-size:.82rem;font-weight:700;cursor:pointer;white-space:nowrap;">Add to Home</button>
        <button id="pwa-dismiss-btn" style="background:rgba(255,255,255,.15);color:#fff;border:none;border-radius:8px;padding:.5rem .8rem;font-size:.82rem;cursor:pointer;">✕</button>
      </div>
    `;
    banner.style.cssText = `
      position:fixed;bottom:0;left:0;right:0;
      background:linear-gradient(135deg,#0f1f3d,#1a3560);
      padding:1rem 1.2rem;
      display:flex;align-items:center;gap:.8rem;
      z-index:9999;
      box-shadow:0 -4px 20px rgba(0,0,0,.4);
      border-top:1px solid rgba(255,255,255,.1);
      animation:slideUp .3s ease;
    `;

    const style = document.createElement('style');
    style.textContent = '@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}';
    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('pwa-install-btn').addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        localStorage.setItem(INSTALL_DATE_KEY, Date.now().toString());
      }
      deferredPrompt = null;
      banner.remove();
    });

    document.getElementById('pwa-dismiss-btn').addEventListener('click', () => {
      localStorage.setItem(DISMISSED_KEY, Date.now().toString());
      banner.remove();
    });
  }

  // Also expose manual install trigger
  window.installPWA = function() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    } else {
      alert('To add to home screen:\nAndroid: Menu (⋮) → "Add to Home screen"\niOS Safari: Share button → "Add to Home Screen"');
    }
  };

})();
