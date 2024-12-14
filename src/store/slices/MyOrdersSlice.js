import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMyOrder = createAsyncThunk('endpoint', async (url, thunkAPI) => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
    }
})

export const MyOrderSlice = createSlice({
    name: 'myorders',
    initialState: [],
    reducers: {
        getMyOrders: (state, action) => {
            state.push(action.payload)
        }
    },
});

export const { getMyOrders } = MyOrderSlice.actions;

export default MyOrderSlice.reducer;

// export const selectCart = state => state.cart;

// export const selectCartTotal = state => state.cart.reduce((total, item))
