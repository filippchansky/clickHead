import { createSlice } from "@reduxjs/toolkit";


const usdLocalStore = JSON.parse(localStorage.getItem('usd')!)

const usd = createSlice({
    name: 'usd',
    initialState: {
        usd: usdLocalStore || 0
    },
    reducers: {
        addUsd: (state, action) => {
            state.usd += action.payload
        },
        removeUsd: (state, action) => {
            state.usd -= action.payload
        }
    }
})

export const {addUsd,removeUsd} = usd.actions
export default usd.reducer