import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addItem, checkoutCart, loadCart, removeItem } from "./Cart.actions";
import { checkLoginStatus } from "../auth/Auth.actions";

type CartItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  cartItemId: number;
  qty: number;
};

type CartState = {
  items: CartItem[];
  total: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addItem.fulfilled,
      (state, action: PayloadAction<{ item: CartItem }>) => {
        const { item } = action.payload;
        state.items.push(item);
      }
    );

    builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
      const { cart } = action.payload;
      Object.assign(state, cart);
    });

    builder.addCase(checkoutCart.fulfilled, (state, action) => {});

    builder.addCase(loadCart.fulfilled, (state, action) => {
      const { cart } = action.payload;
      Object.assign(state, cart);
    });

    builder.addCase(removeItem.fulfilled, (state, action) => {
      const { item } = action.payload;
      state.items = state.items.filter(
        (product) => product.cartItemId !== item
      );
    });
  },
});

export default cartSlice.reducer;
