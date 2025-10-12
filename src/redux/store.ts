import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
export type RootSatet = ReturnType<typeof store.getState>;
export default store;
