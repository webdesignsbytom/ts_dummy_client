import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID || '');  // Ensure a fallback type

// Hook to track page views
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
};

// Types for tracking event parameters
interface EventParams {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Hook to track custom events
export const useEventTracking = (): ((category: string, action: string, label?: string, value?: number) => void) => {
  const trackEvent = (category: string, action: string, label?: string, value?: number): void => {
    ReactGA.send({
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventLabel: label,
      eventValue: value
    });
  };

  return trackEvent;
};

// Hook to track social interactions
export const useSocialTracking = (): ((network: string, action: string, target?: string) => void) => {
  const trackSocial = (network: string, action: string, target?: string): void => {
    ReactGA.send({
      hitType: 'social',
      socialNetwork: network,
      socialAction: action,
      socialTarget: target,
    });
  };

  return trackSocial;
};

// Hook to track exceptions
export const useExceptionTracking = (): ((description: string, fatal?: boolean) => void) => {
  const trackException = (description: string, fatal: boolean = false): void => {
    ReactGA.send({
      hitType: 'exception',
      exDescription: description,
      exFatal: fatal,
    });
  };

  return trackException;
};

// Hook to set custom dimensions or metrics
export const useCustomMetrics = (): ((dimension: string, metric: string | number) => void) => {
  const setCustomMetric = (dimension: string, metric: string | number): void => {
    ReactGA.set({
      [dimension]: metric
    });
  };

  return setCustomMetric;
};
