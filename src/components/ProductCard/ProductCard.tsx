import React from "react";
import CustomButton from "../Button";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductCardProps = {
  data: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="grid-item">
      <img
        className="product-card-img"
        src="https://elcopcbonline.com/photos/product/4/176/4.jpg"
        alt={data.name}
      />
      <div className="product-card-info-container">
        <div className="product-card-info">
          <p>{data.name}</p>
          <p>{data.price / 100}</p>
        </div>
        <CustomButton
          variant="outlined"
          color="primary"
          component={Link}
          to={`/products/${data.id}`}
        >
          View
        </CustomButton>
      </div>
    </div>
  );
};

export default ProductCard;
