import { createSlice } from "@reduxjs/toolkit";


const usd = createSlice({
    name: 'usd',
    initialState: {
        usd: 0
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