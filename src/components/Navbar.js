import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoBag } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import "../styles/Navbar.css";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  let { quantityWishList, wishlistItems } = useSelector(
    (state) => state.wishlist
  );
  const { pathname } = useLocation();

  console.log(quantityWishList);

  return (
    <>
      <div className="Navbar">
        <div className="topHalf">
          <div className="logoWrapper">
            <Link to="/">
              <img
                className="logo"
                src="http://www.userlogos.org/files/logos/ArkAngel06/Amazon.png"
              />
            </Link>
          </div>
        </div>

        <div className="bottomHalf">
          <div className="sections-div">
            <div className="section">
              {" "}
              <h3 className="h3"> Your Amazon.com </h3>
            </div>
            <div className="section">
              {" "}
              <h3 className="h3"> Today's Deals </h3>{" "}
            </div>
            <div className="section">
              <h3 className="h3">Gift Cards Registry</h3>
            </div>
            <div className="section">
              <h3 className="h3"> Sell </h3>
            </div>
            <div className="section">
              <h3 className="h3"> Help </h3>
            </div>
          </div>
          <div className="accountStuff">
            <Link to="/cart" className="cart">
              <IoBag />
              {quantity !== 0 && <span>{quantity}</span>}
            </Link>
            <Link to="/wishlist" className="cart">
              <IoBookmark />

              {quantityWishList !== 0 && <span>{quantityWishList}</span>}
            </Link>

            <div className="section">
              {" "}
              <h3 className="h3"> Your Account </h3>
            </div>
            <div className="section">
              <h3 className="h3"> Try Prime </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
