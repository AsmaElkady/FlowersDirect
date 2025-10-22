import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import Cart from "./slices/cartSlice";
import FavSlice from "./slices/favSlice";
import CartApi from "./slices/cartApi";
import adminSlice from "./slices/AdminSlice";
import { usersAPI } from "./api/auth";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    Cart: Cart,
    FavSlice: FavSlice,
    CartApi,
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      usersAPI.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
