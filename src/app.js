import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Canvas from './canvas';

const redux = require('redux');
const colorReducer = require('./reducers/colors');
const palletReducer = require('./reducers/pallet');
const rootReducer = redux.combineReducers({
  pallet: palletReducer,
  color: colorReducer
});

  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDom.render(
 <Provider
    store={store}
  >
  <Canvas />
  </Provider>,
  document.getElementById('app')
);
