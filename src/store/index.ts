import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import productArrReducer from "./slice/ProductArr"

export const store = configureStore({
  reducer: {
    product: productsReducer,
    productArr: productArrReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
