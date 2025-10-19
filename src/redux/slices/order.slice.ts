import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IProduct } from "../../Types/productType"
import axios from "axios";



export interface Order {
    id:string,
    userId:string,
    items:IProduct[],
    totalPrice:number,
    address:string,
    note? : string,
    phone?: string,
    status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

interface orderState{
    orders:Order[],
    loading:boolean,
}

const initialState:orderState = {
   orders:[],
    loading:false, 
}

export const addOrder = createAsyncThunk("order/addOrder", async (order: Order) => {
    const res = await axios.post('http://localhost:3000/orders', order)
    return res.data;
})

export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {

    const res = await axios.get(`http://localhost:3000/orders`)
    return res.data;
})


const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addOrder.fulfilled,(state,action)=>{
            state.orders.push(action.payload);
        });
        builder.addCase(fetchOrders.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchOrders.fulfilled,(state,action)=>{
            state.loading=false;
            state.orders=action.payload;
        });
        builder.addCase(fetchOrders.rejected,(state)=>{
            state.loading=false;
        });
    }
})


export default orderSlice.reducer;