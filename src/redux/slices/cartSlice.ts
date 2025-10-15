import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ICartItem } from "../../Types/cart.ts";
import type { IProduct } from "../../Types/productType.ts"
import axios from "axios";
import { baseUrl } from "../../constants/main.tsx";
import type { IFav } from "../../Types/fav.ts";

const saveInLocalStorage = (state: ICartItem) => {
    const cartStates = {
        cartItems: state.cartItems,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice
    }
    localStorage.setItem("Cart", JSON.stringify(cartStates))
}
const isInLocalStorage = JSON.parse(localStorage.getItem("Cart")!)


const initialState = isInLocalStorage ? isInLocalStorage : {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const fetchUser = createAsyncThunk<{ cart: ICartItem, fav: IFav }>(
    "user/fetchUser",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(baseUrl + "users", {
                headers: { Authorization: `Bearer ${token}` }
            });
            const users = Array.isArray(res.data) ? res.data[0] : res.data;
            // const users: IUser =res.data;
            console.log("Fetched User:", users.cart);
            return { cart: users.cart, fav: users[0].favorites };
        } catch (error:unknown) {
            console.error("Error fetching user:", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: { //actions
        AddToCart(state, action) {
            const product = action.payload as IProduct;
            const existingItems = state.cartItems.find((item: IProduct) => item.id === product.id)
            if (!existingItems) {
                // existingItems.quantity += 1;
                // existingItems.totalPrice += product.price;
                state.cartItems.push({
                    ...product,
                    quantity: 1,
                    totalPrice: product.price
                })
            }
            // getUser()
            state.totalPrice += product.price;
            state.totalQuantity += 1;
            console.log(product)
            saveInLocalStorage(state);
        },
        RemoveFromCart(state, action) {
            const id = action.payload as number;
            const removerItemsPrice = state.cartItems.find((item: IProduct) => +item.id === id).price;
            state.totalPrice -= removerItemsPrice
            state.cartItems = state.cartItems.filter((item: IProduct) => +item.id !== id);
            state.totalQuantity -= 1;

            saveInLocalStorage(state);
        },
        CleareCart(state) {
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;

            saveInLocalStorage(state);
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const { cart } = action.payload;
            console.log("User fetched successfully:", cart);

            if (cart) {
                state.cartItems = cart.cartItems || [];
                state.totalQuantity = cart.totalQuantity || 0;
                state.totalPrice = cart.totalPrice || 0;
                saveInLocalStorage(state);
            }
        });
    },
})

export const { AddToCart, RemoveFromCart, CleareCart } = cartSlice.actions
export default cartSlice.reducer;
