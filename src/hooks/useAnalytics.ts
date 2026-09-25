import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../lib/analytics';

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    analytics.init();
  }, []);

  useEffect(() => {
    analytics.trackPageView(location.pathname);
  }, [location.pathname]);

  return analytics;
}
