import { useDispatch } from "react-redux";
import { removeFromWishList } from "../redux/reducers/wishlist";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const WishListItem = (props) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props;

  return (
    <div className="cart-item">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-title">
        <h2>{title}</h2>
        <h2 className="product-price">₹{price}</h2>
        <button onClick={() => dispatch(removeFromWishList(props))}>
          Remove from wishlist
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
