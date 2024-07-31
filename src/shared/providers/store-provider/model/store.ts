import { configureStore } from '@reduxjs/toolkit';
import autopartsReducer from '../slices/autoparts-slice';
import cartReducer from '../slices/cart-slice';

export const store = configureStore({
  reducer: {
    autoparts: autopartsReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch