import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ProductModel {
  id: string;
  name: string;
  price: number;
}

export interface CartState {
  items: ProductModel[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductModel>) => {
      const product = action.payload;

      state.items.push(product);

      // items [ 1, 2, 3, ] => 0, 1, 2 => state.items.length => 3
      // state.items[state.items.length] = product;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectItemsQuantity = (rootState: RootState) =>
  rootState.cart.items.length;

export const selectItems = (rootState: RootState) => rootState.cart.items;

export const selectCartTotal = (rootState: RootState) => {
  // Policz sumę produktów w koszyku

  // Sposób 1
  //   let total = 0;

  //   rootState.cart.items.forEach((item) => {
  //     total += item.price;
  //   });

  //   return total;

  return rootState.cart.items
    .reduce((total, item) => (total += item.price), 0)
    .toFixed(2);
};

export const cartReducer = cartSlice.reducer;
