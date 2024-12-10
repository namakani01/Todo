import {legacy_createStore, applyMiddleware} from 'redux';
import operationReducer from '../reducer/reducer';

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('store', store);
      console.log('action', action);
      next(action);
    };
  };
}

const store = legacy_createStore(operationReducer, applyMiddleware(logger));

export default store;
