// CritCare native bridge — runs only inside the Capacitor Android app
// Initialises: StatusBar, SplashScreen, PushNotifications, back-button handling

(function () {
  // Only run inside Capacitor shell
  if (!window.Capacitor) return;

  const { StatusBar, SplashScreen, PushNotifications, App } = window.Capacitor.Plugins;

  // ── Status bar: dark background, white icons ──────────────────────────────
  if (StatusBar) {
    StatusBar.setBackgroundColor({ color: '#0f1f3d' });
    StatusBar.setStyle({ style: 'DARK' });
    StatusBar.setOverlaysWebView({ overlay: false });
  }

  // ── Splash screen: hide after page load ───────────────────────────────────
  if (SplashScreen) {
    window.addEventListener('load', function () {
      setTimeout(function () { SplashScreen.hide(); }, 300);
    });
  }

  // ── Hardware back button ──────────────────────────────────────────────────
  if (App) {
    App.addListener('backButton', function (data) {
      if (!data.canGoBack) {
        // On home/index — ask to exit
        if (confirm('Exit CritCare?')) App.exitApp();
      } else {
        window.history.back();
      }
    });
  }

  // ── Push Notifications (Firebase FCM) ────────────────────────────────────
  if (PushNotifications) {
    PushNotifications.requestPermissions().then(function (result) {
      if (result.receive === 'granted') {
        PushNotifications.register();
      }
    });

    PushNotifications.addListener('registration', function (token) {
      // Token available — in production, send to your server
      console.log('[FCM] Token:', token.value);
    });

    PushNotifications.addListener('registrationError', function (err) {
      console.error('[FCM] Registration error:', err.error);
    });

    PushNotifications.addListener('pushNotificationReceived', function (notification) {
      console.log('[FCM] Notification received:', notification);
    });

    PushNotifications.addListener('pushNotificationActionPerformed', function (action) {
      var url = action.notification.data && action.notification.data.url;
      if (url) window.location.href = url;
    });
  }
})();
