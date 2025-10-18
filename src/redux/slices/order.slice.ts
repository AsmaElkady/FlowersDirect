import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { IProduct } from "../../Types/productType"
import axios from "axios";



interface order {
    id:string,
    userId:string,
    items:IProduct[],
    totalPrice:number,
    address:string
}

interface orderState{
    orders:order[],
    loading:boolean,
}

const initialState:orderState = {
   orders:[],
    loading:false, 
}

export const addOrder = createAsyncThunk("order/addOrder", async (order: order) => {
    const res = await axios.post('http://localhost:3000/orders', order)
    return res.data;
})

// export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {

//     const res = await axios.get('http://localhost:3000/orders')
//     return res.data;
// })


const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addOrder.fulfilled,(state,action)=>{
            state.orders.push(action.payload);
        });
    }
})


export default orderSlice.reducer;