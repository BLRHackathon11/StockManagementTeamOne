
import { configureStore } from "@reduxjs/toolkit";
import myOrderReducer from './slices/MyOrdersSlice';
import stockReducer from './slices/StocksSlice';

const store = configureStore({
    reducer: { myorders: myOrderReducer, stocks: stockReducer },
}
);

export default store;