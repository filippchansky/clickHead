import { createSlice } from "@reduxjs/toolkit";


const coinLocalStore = JSON.parse(localStorage.getItem('coin')!)

const coin = createSlice({
    name: 'coin',
    initialState: {
        coin: coinLocalStore || 0
    },
    reducers: {
        addCoin: (state, action) => {
            state.coin += action.payload;
        },
        removeCoin: (state, action) => {
            state.coin -= action.payload;
        }
    }
});

export const { addCoin, removeCoin } = coin.actions;
export default coin.reducer;