import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Cart, Product } from '../../models'

interface ProductArr {
  productArr: number[];
}

const savedProductArr = JSON.parse(localStorage.getItem('productArr')!) || [];

const initialState: ProductArr = {
  productArr: savedProductArr || []
};

const productArr = createSlice({
    name: 'productArr',
    initialState,
    reducers: {
        addProductArr: (state, action: PayloadAction<number>) => {
          state.productArr.push(action.payload);
        },
        removeProductArr: (state, action: PayloadAction<number>) => {
          const index = state.productArr.indexOf(action.payload)
          if(index !== -1){
            state.productArr.splice(index,1)
          }
        },
        clearProductArr: (state, action: PayloadAction) => {
          state.productArr.splice(0, state.productArr.length)
        }
    }
})

export const {addProductArr, removeProductArr, clearProductArr} = productArr.actions
export default productArr.reducer