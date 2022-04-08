import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Error from "./components/Error";
import WishList from "./components/WishList";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Products />}></Route> */}
        <Route path="/" element={<Home />}></Route>

        {/* different routes for product page */}
        <Route path="/products" element={<Products />}></Route>
        <Route path="/men" element={<Products />}></Route>
        <Route path="/girl" element={<Products />}></Route>
        <Route path="/mobile" element={<Products />}></Route>

        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default App;
