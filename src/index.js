import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AnalyticsProvider from './AnalyticsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  </Router>
);