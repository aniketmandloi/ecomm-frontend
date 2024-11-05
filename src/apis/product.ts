import API from "./client";

type Product = {
  id: number;
  name: string;
  price: number; // Or `number`, depending on compatibility
  description: string;
};

// API interface for loading products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await API.get(`products`);
    return response.data;
  } catch (err: any) {
    throw err.response.data;
  }
};

// API interface for loading a product by product ID
export const fetchProduct = async (productId: number) => {
  try {
    const response = await API.get(`products/${productId}`);

    return response.data;
  } catch (err: any) {
    throw err.response.data;
  }
};
