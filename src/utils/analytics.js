/**
 * Analytics Utility for SKY A Groups
 * Handles GA4 and Facebook Pixel events
 */

export const trackEvent = (eventName, params = {}) => {
  // GA4 Event
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  // Facebook Pixel Event
  if (window.fbq) {
    // Map GA4 events to FB events if necessary
    const fbEvent = eventName === 'generate_lead' ? 'Lead' : eventName;
    window.fbq('track', fbEvent, params);
  }

  // Debug log in development
  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${eventName}`, params);
  }
};

export const trackLead = (service, method) => {
  trackEvent('generate_lead', {
    service_name: service,
    lead_method: method, // 'form' or 'whatsapp'
  });
};
