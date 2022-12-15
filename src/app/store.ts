import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart/cartSlice";
import counterReducer from "../features/counter/counterSlice";
import { productReducer } from "../features/product/productSlice";
import { notificationsReducer } from "../features/notifications/notificationsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    product: productReducer,
    notifications: notificationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
