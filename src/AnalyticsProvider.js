import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import usePageTitle from './usePageTitle';
import useButtonClickTracker from './useButtonClickTracker';

const AnalyticsProvider = ({ children }) => {
  const location = useLocation();
  usePageTitle('My App');
  useButtonClickTracker();

  useEffect(() => {
    ReactGA.initialize('G-4345KFVDC8');
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title
    });
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;