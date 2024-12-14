import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    orederData: [],
    status: 'idle',
    error: null
}
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
    initialState,
    reducers: {
        getMyOrders: (state, action) => {
            state.orederData = action.payload;
        }
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            // When data is being fetched
            state.status = 'loading'
        },
        [getPosts.fulfilled]: (state, action) => {
            // When data is being fetched
            state.orederData = action.payload;
            state.status = 'idle'
        },
    }
});

export const { getMyOrders } = MyOrderSlice.actions;

export default MyOrderSlice.reducer;

// export const selectCart = state => state.cart;

// export const selectCartTotal = state => state.cart.reduce((total, item))
