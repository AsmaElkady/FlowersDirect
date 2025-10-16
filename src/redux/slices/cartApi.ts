import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../constants/main";
import type { IUserState } from "../../Types/cart";


export const fetchUser = createAsyncThunk("cartApI/fetchUser",
    async () => {
        const token = localStorage.getItem("token");
        const res = await fetch(baseUrl + "users/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) throw new Error("Network Error");
        return await res.json();
    }
)

const initialState: IUserState = {
    userData: null,
    error: null,
    status: "idle",
}
const userApISlice = createSlice({
    name:"UserApi",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "success";
                state.userData = action.payload;

            })
            .addCase(fetchUser.rejected, (status, action) => {
                status.status = "failed";
                status.error = action.error.message || "Failed";
            })
    }
})

export default userApISlice.reducer;
