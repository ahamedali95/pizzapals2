import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styleSheets/index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './components/containerComponents/App';
import reducer from './reducers/index.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
