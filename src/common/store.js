import cartSlice from "../slices/cartSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartSlice
});

export const store = configureStore({
  reducer: rootReducer,
});
