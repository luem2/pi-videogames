import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './redux/store';
import { DOMAIN, SV_PORT } from './utility';
import './index.css';

axios.defaults.baseURL = process.env.REACT_APP_API || `${DOMAIN}${SV_PORT}`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
