/**
 * Akshara Lightweight Event & Analytics Tracker (GA4 Ready)
 * Handles non-intrusive event telemetry for CTA clicks, blueprint interactions, and contact leads.
 */

(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;

  window.trackEvent = function (eventName, eventParams = {}) {
    try {
      const payload = {
        event: eventName,
        timestamp: new Date().toISOString(),
        route: window.location.hash || '#home',
        ...eventParams,
      };

      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, payload);
      }

      // Log in development for audit
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`[Analytics Track] ${eventName}:`, payload);
      }
    } catch (err) {
      // Fail silently to never impact user experience
    }
  };

  // Auto-track CTA & conversion link clicks via delegation
  document.addEventListener('click', function (e) {
    const target = e.target.closest('a, button');
    if (!target) return;

    // Track WhatsApp clicks
    if (target.href && target.href.includes('wa.me')) {
      window.trackEvent('whatsapp_click', {
        label: target.getAttribute('title') || 'WhatsApp Contact',
        href: target.href,
      });
    }

    // Track Phone Call clicks
    if (target.href && target.href.startsWith('tel:')) {
      window.trackEvent('phone_call_click', {
        number: target.href.replace('tel:', ''),
      });
    }

    // Track Email clicks
    if (target.href && target.href.startsWith('mailto:')) {
      window.trackEvent('email_click', {
        email: target.href.replace('mailto:', ''),
      });
    }

    // Track Blueprint & CAD interactions
    if (target.href && target.href.includes('#blueprint:')) {
      window.trackEvent('view_blueprint_click', {
        project: decodeURIComponent(target.href.split('#blueprint:')[1] || ''),
      });
    }
  });
})();
