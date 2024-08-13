'use client';

import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { selectGoodsInCart } from "@/shared/providers/store-provider/selectors/autoparts-selectors";

export const Cart = () => {
  const goodsInCart = useAppSelector(selectGoodsInCart);
  console.log(goodsInCart)

  return (
    <h1>cart cart cart</h1>
  )
}