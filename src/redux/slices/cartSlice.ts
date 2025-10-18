import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ICart } from "../../Types/cart.ts";
import type {IProduct } from "../../Types/productType.ts"
import { fetchUser } from "./cartApi.ts";
import axios from "axios";
import Cart from './../../pages/Cart/Cart';
import type { Product } from './../../Types/Product';

const initialState :ICart = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

// New cart slice by aya
const baseUrl = 'http://localhost:3000/users/'
const user = localStorage.getItem("user");
const userId = user ? JSON.parse(user).id : null;

export const fetchCart = createAsyncThunk('cart/fetch', async ()=>{
    const res = await axios.get(baseUrl+`${userId}`)
    return res.data.cart.cartsItems;
})

export const addToCartAsync = createAsyncThunk('cart/add', async ({item}: {item: IProduct})=>{
    const res= await axios.post(baseUrl+`${userId}/cart`, item)
    return res.data;
})

export const getUser = async ()=>{
    const res = await axios.get("http://localhost:3000/users/"+userId)
    return res.data;
}



const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: { 
        AddToCart(state, action) {
            const product = action.payload as IProduct;
            const existingItems = state.cartItems.find((item: IProduct) => item.id === product.id)
            if (!existingItems) {
                state.cartItems.push({
                    ...product,
                    quantity: 1,
                    totalPrice: product.price
                })
            } else {
                if (existingItems.quantity < product.totalQuantity){
                    existingItems.quantity += 1;
                    existingItems.totalPrice += product.price;
                }
            }
            state.totalPrice += product.price;
            state.totalQuantity += 1;
            console.log(product)
            // saveInLocalStorage(state);
        },
        RemoveFromCart(state, action) {
            const id = action.payload;
            const itemToRemove = state.cartItems.find((item: IProduct) => item.id === id);
            console.log(itemToRemove)
            if (itemToRemove) {
                console.log("halooz")
                state.totalPrice -= itemToRemove.price;
                state.totalQuantity -= itemToRemove.quantity || 1;
                state.cartItems = state.cartItems.filter((item: IProduct) => item.id !== id);
                console.log(state.cartItems)
                // saveInLocalStorage(state);
            }
        },
        CleareCart(state) {
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;

            // saveInLocalStorage(state);
        },
        decreaseQuantity(state, action) {
            const pro = action.payload;
            const existingItem = state.cartItems.find((item:IProduct)=> item.id === pro.id);
            console.log(existingItem);
            console.log(pro);
            
            if (existingItem && existingItem.quantity > 1){
                existingItem.quantity -=1;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity -=1 ;
                state.totalPrice -= existingItem.price;
                
                // saveInLocalStorage(state);
            }

        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const user = action.payload;
            console.log("User fetched successfully:", user);

            if (user?.cart) {
                state.cartItems = user.cartItems || [];
                state.totalQuantity = user.totalQuantity || 0;
                state.totalPrice = user.totalPrice || 0;
                // saveInLocalStorage(state);
            }
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
            state.cartItems = action.payload;
            state.totalQuantity = action.payload.reduce((acc: number, item: Product) => acc + (item.quantity || 1), 0);
        })
        .addCase(addToCartAsync.fulfilled, (state, action) => {
            state.cartItems.push(action.payload);
        });
    },
})

export const { AddToCart, RemoveFromCart, CleareCart, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer;
