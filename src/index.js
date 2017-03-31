import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers';
import Root from './root.js';

const history = createHistory();

const store = createStore(
  reducers,
  { count: 0 },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Root />
      </Router>
    </Provider>
  , document.getElementById('app'));

