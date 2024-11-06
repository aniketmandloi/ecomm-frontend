import { combineReducers } from "redux";
import authReducer from "./auth/Auth.reducers";
import productReducer from "./products/Products.reducers";
import cartReducer from "./cart/Cart.reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>;
