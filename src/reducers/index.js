// rootReducer.js
import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

const rootReducer = combineReducers({
  crud: crudReducer,
  // Other reducers if you have them...
});

export default rootReducer;
