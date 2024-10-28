import { combineReducers } from "redux";
import authReducer from "./auth/Auth.reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>;
