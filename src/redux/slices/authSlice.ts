import { createSlice } from "@reduxjs/toolkit";
import type { IAuthSlice } from "../../types/auth";

const inialState: IAuthSlice = {
  token: JSON.parse(localStorage.getItem("token")!),
  name: "",
  id: 0,
  email: "",
  user: JSON.parse(localStorage.getItem("user")!),
  // {
  //   id: 0,
  //   email: "",
  //   password: "",
  //   username: "",
  //   cart: {
  //     cartsItems: [],
  //     totalQuantity: 0,
  //     totalPrice: 0,
  //   },
  //   favorites: [],
  //   orders: [],
  // },
};

const authSlice = createSlice({
  name: "auth",
  initialState: inialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setID: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export default authSlice.reducer;
export const { setToken, setName, setID, setUser } = authSlice.actions;
