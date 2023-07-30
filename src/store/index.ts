import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productSlice";
import productArrReducer from "./slice/ProductArr"
import coinReducer from "./slice/CoinSlice"
import usdReducer from "./slice/UsdSlice"

export const store = configureStore({
  reducer: {
    product: productsReducer,
    productArr: productArrReducer,
    coin: coinReducer,
    usd: usdReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
