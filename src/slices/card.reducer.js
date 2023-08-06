import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setProducts: (state, action)=>{

    },
    addProductToCard: (state, action)=>{

    },
    removeProductToCard: (state, action)=>{

    },
  }
})

export const cardReducer = cardSlice.reducer;
export const cardActions = cardSlice.actions;