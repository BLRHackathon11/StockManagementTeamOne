import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _get } from "../../services/axioshelper";

const initialState = {
    stocksData: [],
    status: 'idle',
    error: null
}
export const fetchStocks = createAsyncThunk('stocksAPI', async (thunkAPI) => {
    try {
        const res = await _get('stock/fetchAll');
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue({ error: err.message })
    }
})

export const StocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        getStocks: (state, action) => {
            state.stocksData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStocks.pending, state => {
            state.status = 'loading'
        }).addCase(fetchStocks.fulfilled, (state, action) => {
            state.stocksData = action.payload;
            state.status = 'idle'
        })
    }
});

export const { getStocks } = StocksSlice.actions;

export default StocksSlice.reducer;

export const stocksData = state => state.stocksData;
