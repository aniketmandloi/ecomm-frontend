import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadProducts } from "../../store/products/Products.actions";
import ProductCard from "../../components/ProductCard/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number; // Or `number`, depending on compatibility
  description: string;
};

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    const load = async () => {
      await dispatch(loadProducts());
    };
    load();
  }, [dispatch]);

  return (
    <section className="grid">
      {products &&
        Object.keys(products).length > 0 &&
        Object.keys(products).map((key: any) => {
          const product = products[key] as Product;
          return <ProductCard data={product} key={product.id} />;
        })}
    </section>
  );
};

export default Home;
