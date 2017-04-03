import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

import reducers from './reducers';

import Layout from './components/layout.jsx';
import Home from './containers/home.js';
import Counter from './containers/counter.js';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers(Object.assign({}, reducers, {
    router: routerReducer
  })),
  composeWithDevTools(applyMiddleware(middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider>
        <div>
          <Route path="/" component={Layout} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/counter" component={Counter}/>
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('app')
)

