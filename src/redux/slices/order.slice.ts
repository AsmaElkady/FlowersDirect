import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { Order, orderState } from "../../Types/order";

const initialState: orderState = {
  orders: [],
  loading: false,
};

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (order: Order) => {
    const res = await axios.post("http://localhost:3000/orders", order);
    return res.data;
  }
);

export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
  const res = await axios.get(`http://localhost:3000/orders`);
  return res.data;
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
    });
    builder.addCase(fetchOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default orderSlice.reducer;
