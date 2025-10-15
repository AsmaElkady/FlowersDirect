import {  createSlice } from "@reduxjs/toolkit";
import type { IFav } from "../../Types/fav";
import type { IProduct } from "../../Types/productType.ts";
import { fetchUser } from "./cartSlice.ts";


const SaveInLocalStorage = (state: IFav) => {
    localStorage.setItem("Favorite", JSON.stringify(state))
}
const IsInLocalStorage = JSON.parse(localStorage.getItem("Favorite") || "null");

const initialState = IsInLocalStorage ? IsInLocalStorage : {
    favItem: []
}




const favSlice = createSlice({
    name: "FavSlice",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const pro = action.payload as IProduct;
            const existingItems = state.favItem.some((item: IProduct) => item.id === pro.id);
            if (!existingItems) {
                state.favItem.push(pro)
            }

            SaveInLocalStorage(state)
        },
        removeFav: (state, action) => {
            const pro = action.payload as IProduct;
            state.favItem = state.favItem.filter((item: IProduct) => item.id != pro.id)
            SaveInLocalStorage(state)
        },
        clearAll: (state) => {
            state.favItem = []
            SaveInLocalStorage(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            const { fav } = action.payload;
            console.log("User fetched successfully:", fav);

            if (fav) {
                state.favItems = fav.favItem || [];

                SaveInLocalStorage(state);
            }
        });
    },

})

export const { addToFav, removeFav, clearAll } = favSlice.actions

export default favSlice.reducer