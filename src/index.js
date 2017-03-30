import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'

import Counter from './containers/counter.js';
import reducers from './reducers';

const history = createHistory();

const store = createStore(
  reducers,
  { count: 0 },
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        <div>
        <Route exact path="/" component={Counter}/>
        <Route path="/counter" component={Counter}/>
      </div>
      </Router>
    </Provider>
  </div>
  , document.getElementById('app'));

