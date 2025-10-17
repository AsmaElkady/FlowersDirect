import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import Cart from "./slices/cartSlice"
import FavSlice from "./slices/favSlice";
import CartApi from "./slices/cartApi";

const store = configureStore({
  reducer: {
    auth: authSlice,
    Cart: Cart,
    FavSlice: FavSlice,
    CartApi,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
