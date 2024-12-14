import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { _get } from "../../services/axioshelper";


const initialState = {
    orderData: [],
    status: 'idle',
    error: null
}
export const fetchMyOrder = createAsyncThunk('myorderAPI', async (endpoint, thunkAPI) => {
    try {
        const res = await _get(endpoint)
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
    }
})

export const MyOrderSlice = createSlice({
    name: 'myorders',
    initialState,
    reducers: {
        getMyOrders: (state, action) => {
            state.orderData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMyOrder.pending, state => {
            state.status = 'loading'
        }).addCase(fetchMyOrder.fulfilled, (state, action) => {
            state.orderData = action.payload;
            state.status = 'idle'
        })
    }
});

export const { getMyOrders } = MyOrderSlice.actions;

export default MyOrderSlice.reducer;

export const myOrderData = state => state.orderData;
