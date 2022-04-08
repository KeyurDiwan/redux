import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import { addToWishList } from "../redux/reducers/wishlist";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../styles/SingleProduct.css";
import Loading from "./Loading";
import girl from "../data/girl";
import men from "../data/men";
import mobile from "../data/mobile";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { quantityWishList, wishlistItems } = useSelector(
    (state) => state.wishlist
  );
  const { cartItems } = useSelector((state) => state.cart);

  const id = location.state.id;
  const title = location.state.title;
  const image = location.state.image;
  const description = location.state.description;
  const category = location.state.category;
  const price = location.state.price;
  console.log(description);

  let product = {
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  };

  return (
    <div className="SingleProduct container">
      <div className="left-div">
        <img src={image} alt={title} />
      </div>
      <div className="right-div">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
        <p
          className="description"
          style={{
            color: "black",
          }}
        >
          {description}
        </p>
        <p className="price">₹{price}</p>
        <div>
          {cartItems.some((p) => p.id === product.id) ? (
            <button className="btn-sp"> ✅ Added to Cart</button>
          ) : (
            <button
              className="btn-sp"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          )}

          {wishlistItems.some((p) => p.id === product.id) ? (
            <button className="btn-sp"> ✅ Added to WishList</button>
          ) : (
            <button
              className="btn-sp"
              onClick={() => dispatch(addToWishList(product))}
            >
              Add To WishList
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
