import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer, // key must be "ui"
  },
});
