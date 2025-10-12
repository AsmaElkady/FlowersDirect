import { createSlice } from "@reduxjs/toolkit";

const inialState = {
  token: JSON.parse(localStorage.getItem("token") || ""),
  name: "",
  id: 0,
};
const authSlice = createSlice({
  name: "auth",
  initialState: inialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export default authSlice;
export const { setToken, setName, setID } = authSlice.actions;
