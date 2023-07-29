import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Cart, Product } from '../../models'

interface ProductArr {
  productArr: number[];
}

const initialState: ProductArr = {
  productArr: []
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
        }
    }
})

export const {addProductArr, removeProductArr} = productArr.actions
export default productArr.reducer