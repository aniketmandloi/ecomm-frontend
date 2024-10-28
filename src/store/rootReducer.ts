import { combineReducers } from "redux";
import authReducer from "./auth/Auth.reducers";

export default combineReducers({
  auth: authReducer,
  // other reducers
});
