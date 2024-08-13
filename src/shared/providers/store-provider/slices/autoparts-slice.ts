import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductFromFavoritApiType } from '@/shared/types/types';

export interface AutopartsState {
  autoparts: ProductFromFavoritApiType[],
  goodsInCart: ProductFromFavoritApiType[],
  isLoading: boolean,
  error: string,
}

const initialState: AutopartsState = {
  autoparts: [],
  goodsInCart: [],
  isLoading: false,
  error: '',
}

const AutopartsSlice = createSlice({
  name: 'autoparts',
  initialState,
  reducers: {
    setAutoparts(state, action: PayloadAction<ProductFromFavoritApiType[]>) {
      state.autoparts = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setGoodsInCart(state, action: PayloadAction<ProductFromFavoritApiType>) {
      state.goodsInCart = [...state.goodsInCart, action.payload];
    },
  },
})

export const { 
  setAutoparts, 
  setIsLoading,
  setError,
  setGoodsInCart,
} = AutopartsSlice.actions
export default AutopartsSlice.reducer