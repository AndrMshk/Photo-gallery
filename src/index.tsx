import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from './bll/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </HashRouter>,
);

