import React, { useState } from "react";
import Incrementer from "../Incrementer";
import { Divider, Typography } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { removeItem } from "../../store/cart/Cart.actions";

type CartItemCardProps = {
  cartItemId: number;
  name: string;
  price: number;
  qty: number;
};

const CartItemCard: React.FC<CartItemCardProps> = (props) => {
  const { cartItemId, name, price, qty } = props;
  const [quantity, setQuantity] = useState(qty);

  const dispatch = useAppDispatch();

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  }

  async function remove() {
    await dispatch(removeItem(cartItemId));
  }
  return (
    <>
      <div className="cart-item-container">
        <div className="cart-item-details">
          <img
            src="https://m.media-amazon.com/images/I/61fTX5TjAEL._UL1001_.jpg"
            alt=""
            style={{ height: "100%", paddingRight: "10px" }}
          />
          <p>{name}</p>
          <p>{price / 100}</p>
        </div>
        <div className=".cart-item-interact">
          <Incrementer
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            value={quantity}
          />
          <Typography onClick={remove}>Remove</Typography>
        </div>
        <div className=".cart-item-price">
          <p>{`$${(price * qty) / 100}`}</p>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default CartItemCard;
