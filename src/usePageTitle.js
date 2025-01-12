import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (defaultTitle) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = defaultTitle;

    if (path === '/') {
      title = 'Home Page';
    } else if (path === '/about') {
      title = 'About Page';
    } else {
      title = 'My App';
    }

    document.title = title;
  }, [location, defaultTitle]);
};

export default usePageTitle;