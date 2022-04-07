import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    quantityWishList: 0,
    wishlistItems: [],
    totalAmount: 0,
  },
  reducers: {
    addToWishList: (state, { payload }) => {
      const isItemExist = state.wishlistItems.find(
        (item) => item.id === payload.id
      );
      if (!isItemExist) {
        state.wishlistItems = [
          ...state.wishlistItems,
          { ...payload, quanquantityWishListtity: 1 },
        ];
      } else {
        state.wishlistItems = state.wishlistItems.map((item) => {
          if (item.id === payload.id) {
            return { ...item, quantityWishList: item.quantityWishList + 1 };
          } else {
            return item;
          }
        });
      }
      state.quantityWishList++;
      state.totalAmount += payload.price;
    },

    removeFromWishList: (state, { payload }) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== payload.id
      );
      state.quantityWishList -= 1;
      state.totalAmount -= payload.price * payload.quantityWishList;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
