import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idText } from "typescript";
import { RootState } from "../../app/store";

export interface CartItemModel {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItemModel[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemModel>) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      // Sposob 1
      // const index = state.items.findIndex((i) => i.id === action.payload.id);

      // if (index > -1) {
      //   state.items.splice(index, 1);
      // }

      // [ {id: 1}, {id: 2}, id: {3}] // 5
      // [ {id: 1}, {id: 2}, {id: 3}]
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;

export const selectItemsQuantity = (rootState: RootState) =>
  rootState.cart.items.length;

export const selectItems = (rootState: RootState) => rootState.cart.items;

export const selectCartTotal = (rootState: RootState) => {
  return rootState.cart.items
    .reduce((total, item) => (total += item.price * item.quantity), 0)
    .toFixed(2);
};

export const cartReducer = cartSlice.reducer;
