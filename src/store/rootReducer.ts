import { combineReducers } from "redux";
import authReducer from "./auth/Auth.reducers";
import productReducer from "./products/Products.reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>;
