import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct, fetchProducts } from "../../apis/product";

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async (productId: number, thunkAPI) => {
    try {
      const response = await fetchProduct(productId);
      return {
        product: response,
      };
    } catch (err) {
      throw err;
    }
  }
);

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async () => {
    try {
      const response = await fetchProducts();
      return {
        products: response,
      };
    } catch (err) {
      throw err;
    }
  }
);
