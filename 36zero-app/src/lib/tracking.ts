// Analytics and tracking utilities
import { clarity } from '@/components/Clarity';

interface TrackingEvent {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  timestamp?: number;
}

class Analytics {
  private isEnabled: boolean;
  private userId?: string;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'production';
  }

  // Set user ID for tracking
  setUserId(userId: string): void {
    this.userId = userId;
    // Also set in Clarity
    clarity.setUserId(userId);
  }

  // Track page views
  trackPageView(page: string, properties?: Record<string, any>): void {
    this.track('page_view', {
      page,
      ...properties,
    });
  }

  // Track user interactions
  trackEvent(event: string, properties?: Record<string, any>): void {
    this.track(event, properties);
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean, properties?: Record<string, any>): void {
    this.track('form_submission', {
      form_name: formName,
      success,
      ...properties,
    });
  }

  // Track button clicks
  trackButtonClick(buttonName: string, properties?: Record<string, any>): void {
    this.track('button_click', {
      button_name: buttonName,
      ...properties,
    });
  }

  // Track route searches
  trackRouteSearch(query: string, resultsCount: number): void {
    this.track('route_search', {
      query,
      results_count: resultsCount,
    });
  }

  // Track vessel bookings
  trackVesselBooking(vesselId: string, routeId: string, price: number): void {
    this.track('vessel_booking', {
      vessel_id: vesselId,
      route_id: routeId,
      price,
    });
  }

  // Track email signups
  trackEmailSignup(email: string, source: string): void {
    this.track('email_signup', {
      email,
      source,
    });
  }

  // Private track method
  private track(event: string, properties?: Record<string, any>): void {
    const trackingEvent: TrackingEvent = {
      event,
      properties,
      userId: this.userId,
      timestamp: Date.now(),
    };

    if (!this.isEnabled) {
      console.log('Analytics (dev):', trackingEvent);
      return;
    }

    // Send to Clarity for custom events
    clarity.event(event);
    
    // Set custom properties in Clarity if provided
    if (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        clarity.set(key, String(value));
      });
    }

    console.log('Analytics:', trackingEvent);

    // Example: Send to Google Analytics, Mixpanel, etc.
    // gtag('event', event, properties);
  }
}

// Create singleton instance
export const analytics = new Analytics();

// Convenience functions
export const trackPageView = (page: string, properties?: Record<string, any>) => {
  analytics.trackPageView(page, properties);
};

export const trackEvent = (event: string, properties?: Record<string, any>) => {
  analytics.trackEvent(event, properties);
};

export const trackFormSubmission = (formName: string, success: boolean, properties?: Record<string, any>) => {
  analytics.trackFormSubmission(formName, success, properties);
};

export const trackButtonClick = (buttonName: string, properties?: Record<string, any>) => {
  analytics.trackButtonClick(buttonName, properties);
};

export const trackRouteSearch = (query: string, resultsCount: number) => {
  analytics.trackRouteSearch(query, resultsCount);
};

export const trackVesselBooking = (vesselId: string, routeId: string, price: number) => {
  analytics.trackVesselBooking(vesselId, routeId, price);
};

export const trackEmailSignup = (email: string, source: string) => {
  analytics.trackEmailSignup(email, source);
};
