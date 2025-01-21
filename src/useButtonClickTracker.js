import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const useButtonClickTracker = () => {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.tagName === 'BUTTON') {
        const buttonId = event.target.id || 'unknown_button';
        ReactGA.event({
          category: 'Button',
          action: 'Click',
          label: buttonId,
        });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useButtonClickTracker;