import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HelloWorld from './components/hello-world.jsx';
import Counter from './containers/counter.js';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootEl = document.getElementById('app');

const render = () => ReactDOM.render(
  <div>
    <HelloWorld />
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
  , rootEl);

render();
store.subscribe(render);

