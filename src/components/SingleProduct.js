import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import { addToWishList } from "../redux/reducers/wishlist";
import { useSelector } from "react-redux";
import axios from "axios";
import "../styles/SingleProduct.css";
import Loading from "./Loading";
import { FaHeart } from "react-icons/fa";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("id", id);
  const { quantityWishList, wishlistItems } = useSelector(
    (state) => state.wishlist
  );
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProduct();
  }, [id, quantityWishList]);

  const { title, price, description, category, image } = product;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="SingleProduct container">
      <div className="left-div">
        <img src={image} alt={title} />
      </div>
      <div className="right-div">
        <h2 className="title">{title}</h2>
        <h3 className="category">{category}</h3>
        <p className="description">{description}</p>
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
