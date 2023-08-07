import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeProductToCart: (state, action) => {
      /*  state.filter(item => item.id !== productToRemove);*/

      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const productToRemove = state[index];
        if (productToRemove.quantity > 1) {
          productToRemove.quantity--;
        } else {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addProductToCart, removeProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
