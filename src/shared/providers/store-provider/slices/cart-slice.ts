import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductFromFavoritApiType } from '@/shared/types/types';

export interface CartState {
  products: ProductFromFavoritApiType[],
  product: ProductFromFavoritApiType | null,
  isLoading: boolean,
  error: string,
}

const initialState: CartState = {
  products: [],
  product: null,
  isLoading: false,
  error: '',
}

const CartSlice = createSlice({
  name: 'autoparts',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<ProductFromFavoritApiType>) {
      console.log('123', action.payload);
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
    getProducts(state) {
      state.products;
    },
    removeProduct(state, action: PayloadAction<ProductFromFavoritApiType>) {
      state.products.filter((item: ProductFromFavoritApiType) => item !== action.payload);
    }
  },
})

export const { 
  setProduct,
  getProducts,
  removeProduct,
} = CartSlice.actions
export default CartSlice.reducer