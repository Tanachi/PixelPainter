import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import Canvas from './canvas';

const redux = require('redux');
const colorReducer = require('./reducers/colors');
const palletReducer = require('./reducers/pallet');
const rootReducer = redux.combineReducers({
  pallet: palletReducer,
  color: colorReducer
});

const finalCreateStore = redux.compose(
  (window.devToolsExtension) ? window.devToolsExtension : function (x) {return x;}
);
const store = finalCreateStore(
  rootReducer, {}
);


ReactDom.render(
 <Provider
    store={store}
  >
  <Canvas />
  </Provider>,
  document.getElementById('app')
);
