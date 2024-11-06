import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToCart,
  checkout,
  fetchCart,
  removeFromCart,
} from "../../apis/cart";
import { PaymentMethodCreateParams } from "@stripe/stripe-js";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type AddItemPayload = {
  product: Product;
  qty: number;
};

type CheckoutPayload = {
  cartId: number;
  paymentInfo: PaymentMethodCreateParams; // Stripe type for payment info
};

export const addItem = createAsyncThunk(
  "cart/addItem",
  async ({ product, qty }: AddItemPayload) => {
    try {
      const response = await addToCart(product.id, qty);
      const item = {
        ...product,
        cartItemId: response.id,
        qty,
      };
      return { item };
    } catch (err) {
      throw err;
    }
  }
);

export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async ({ cartId, paymentInfo }: CheckoutPayload) => {
    try {
      const response = await checkout(cartId, paymentInfo);
      return {
        order: response,
      };
    } catch (err) {
      throw err;
    }
  }
);

export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  try {
    const response = fetchCart();
    return {
      cart: response,
    };
  } catch (err) {
    throw err;
  }
});

export const removeItem = createAsyncThunk(
  "cart/removeItem",
  async (cartItemId: number) => {
    try {
      await removeFromCart(cartItemId);
      return {
        item: cartItemId,
      };
    } catch (err) {
      throw err;
    }
  }
);
