import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Cart, Product } from '../../models'

interface ProductState {
  products: Cart[];
}

const initialState: ProductState = {
  products: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Cart[]>) => {
            state.products = action.payload
        }
    }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer