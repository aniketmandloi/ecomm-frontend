import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadProduct, loadProducts } from "./Products.actions";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductState = {
  [id: number]: Product;
};

const initialState: ProductState = {};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loadProduct.fulfilled,
      (state, action: PayloadAction<{ product: Product }>) => {
        const { product } = action.payload;
        state[product.id] = product;
      }
    );

    builder.addCase(
      loadProducts.fulfilled,
      (state, action: PayloadAction<{ products: Product[] }>) => {
        const { products } = action.payload;
        products.forEach((product) => {
          const { id } = product;
          state[id] = product;
        });
      }
    );
  },
});

// Export reducer function by default
export default productSlice.reducer;
