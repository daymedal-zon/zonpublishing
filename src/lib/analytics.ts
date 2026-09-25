type AnalyticsEvent = {
  event: string;
  properties?: Record<string, string | number | boolean>;
};

class Analytics {
  private initialized = false;

  init() {
    if (this.initialized) return;

    this.initialized = true;
    console.log('Analytics initialized');
  }

  trackPageView(path: string) {
    if (!this.initialized) return;

    console.log('Page view:', path);
  }

  trackEvent(eventName: string, properties?: Record<string, string | number | boolean>) {
    if (!this.initialized) return;

    const event: AnalyticsEvent = {
      event: eventName,
      properties
    };

    console.log('Event tracked:', event);
  }

  identify(userId: string, traits?: Record<string, string | number | boolean>) {
    if (!this.initialized) return;

    console.log('User identified:', userId, traits);
  }
}

export const analytics = new Analytics();
