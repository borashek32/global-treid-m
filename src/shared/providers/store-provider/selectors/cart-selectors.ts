import { RootState } from "../model/store";

const selectProducts = (state: RootState) => state.cart.products;
const selectProduct = (state: RootState) => state.cart.product;

export {
  selectProduct,
  selectProducts,
}