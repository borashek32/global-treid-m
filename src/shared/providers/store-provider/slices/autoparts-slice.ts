import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductFromFavoritApiType } from '@/shared/types/types';

export interface AutopartsState {
  autoparts: ProductFromFavoritApiType[],
  isLoading: boolean,
  error: string,
}

const initialState: AutopartsState = {
  autoparts: [],
  isLoading: false,
  error: '',
}

const AutopartsSlice = createSlice({
  name: 'autoparts',
  initialState,
  reducers: {
    setAutoparts(state, action: PayloadAction<ProductFromFavoritApiType[]>) {
      const autopartsArr = action.payload.filter((item: ProductFromFavoritApiType) => item.price > 0);
      state.autoparts = autopartsArr;
    },       
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    }
  },
})

export const { 
  setAutoparts, 
  setIsLoading,
  setError,
} = AutopartsSlice.actions
export default AutopartsSlice.reducer