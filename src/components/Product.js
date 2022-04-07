import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cart";
import { useSelector } from "react-redux";

const Product = ({ id, image, title, price }) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="product">
      <div
        className="image-container"
        onClick={() => history(`/products/${id}`)}
      >
        <img src={image} alt={title} />
      </div>
      <div className="product-info" onClick={() => history(`/products/${id}`)}>
        <h3>{title}</h3>
        <h3>₹{price}</h3>
      </div>
      <div className="buttons">
        {cartItems.some((p) => p.id === id) ? (
          <button className="btn-sp"> ✅ Added to basket</button>
        ) : (
          <button
            className="btn-sp"
            onClick={() => dispatch(addToCart({ id, image, title, price }))}
          >
            Add To basket
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
