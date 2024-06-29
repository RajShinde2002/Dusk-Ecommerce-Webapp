import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

// Register the service worker
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
