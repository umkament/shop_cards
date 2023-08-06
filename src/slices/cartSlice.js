import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addProductToCart: (state, action)=>{

    },
    removeProductToCart: (state, action)=>{

    },
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;