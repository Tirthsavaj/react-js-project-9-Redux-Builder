// src/store.js
import { createStore, combineReducers } from 'redux';
import crudReducer from './reducers/crudReducer';

const rootReducer = combineReducers({
  crud: crudReducer,
});

const store = createStore(rootReducer);

export default store;
