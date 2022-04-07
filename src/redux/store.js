import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import wishlistReducer from './reducers/wishlist'


export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  
  },
});
