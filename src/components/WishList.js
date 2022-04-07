import React from "react";
import { useSelector } from "react-redux";
import "../styles/Cart.css";
import CartItem from "./WishListItem";

const WishList = () => {
  const { wishlistItems, quantityWishList } = useSelector(
    (state) => state.wishlist
  );

  if (quantityWishList === 0) {
    return <h2 className="no-items">No items in wishlist...</h2>;
  }

  console.log(wishlistItems);

  return (
    <div className="Cart container">
      <h1>WishList</h1>
      <div className="cart-items">
        {wishlistItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WishList;
