import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button, Typography } from "@mui/material";
import Incrementer from "../../components/Incrementer";
import CustomButton from "../../components/Button";
import { loadProduct } from "../../store/products/Products.actions";
import { addItem } from "../../store/cart/Cart.actions";

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart);
  if (!productId) {
    throw new Error("Product ID is required");
  }
  const product = products[parseInt(productId)];
  const [heroImg, setHeroImg] = useState(
    "https://elcopcbonline.com/photos/product/4/176/4.jpg"
  );

  useEffect(() => {
    if (!products[parseInt(productId)]) {
      (async function load() {
        await dispatch(loadProduct(parseInt(productId)));
      })();
    }
  }, [dispatch, products, productId]);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  async function handleAddToCart() {
    await dispatch(addItem({ product: product, qty: quantity }));
  }

  return (
    <section className="product-details-container">
      <div className="product-img-container">
        <div className="product-hero-img">
          <img className="hero-img" src={heroImg} alt="" />
        </div>
        <div className="product-img-bar">
          <div
            className="alt-product-img-container"
            onClick={() => {
              setHeroImg(
                "https://elcopcbonline.com/var/photo/product/2000x4000/53/225/8.jpg"
              );
            }}
          >
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={
                "https://elcopcbonline.com/var/photo/product/2000x4000/53/225/8.jpg"
              }
              alt=""
            />
          </div>
          <div
            className="alt-product-img-container"
            onClick={() => {
              setHeroImg(
                "https://elcopcbonline.com/var/photo/product/2000x4000/39/211/9.jpg"
              );
            }}
          >
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={
                "https://elcopcbonline.com/var/photo/product/2000x4000/39/211/9.jpg"
              }
              alt=""
            />
          </div>
          <div
            className="alt-product-img-container"
            onClick={() => {
              setHeroImg(
                "https://elcopcbonline.com/var/photo/product/234x200/76/248/1.jpg"
              );
            }}
          >
            {/* <img style={{maxWidth: '100%', maxHeight: '100%'}} src={"https://elcopcbonline.com/var/photo/product/234x200/76/248/1.jpg"}/> */}
          </div>
          <div
            className="alt-product-img-container"
            onClick={() => {
              setHeroImg(
                "https://elcopcbonline.com/var/photo/product/2000x4000/41/213/11.jpg"
              );
            }}
          >
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={
                "https://elcopcbonline.com/var/photo/product/2000x4000/41/213/11.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="product-info-container">
        {product && (
          <>
            <Typography variant="h3">{product?.name}</Typography>
            <Typography variant="h6">{product?.description}</Typography>
            <Typography variant="h6">{product?.price / 100}</Typography>
            <Incrementer
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              value={quantity}
            />
            <CustomButton
              type="submit"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </CustomButton>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
