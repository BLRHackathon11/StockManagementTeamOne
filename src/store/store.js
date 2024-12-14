
import { configureStore } from "@reduxjs/toolkit";
import myOrderReducer from './slices/MyOrdersSlice'

const store = configureStore({
    reducer: { myOrderReducer },
}
);

export default store;