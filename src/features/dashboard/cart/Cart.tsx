'use client';

import { AutopartCard } from "@/features/autoparts/autopart-card/AutopartCard";
import { useAppSelector } from "@/shared/hooks/use-app-selector";
import { selectGoodsInCart } from "@/shared/providers/store-provider/selectors/autoparts-selectors";

export const Cart = () => {
  const goodsInCart = useAppSelector(selectGoodsInCart);
  console.log(goodsInCart)

  return (
    <>
      <h2>Ваша корзина:</h2>
        <div className="flex flex-row sm:flex-col sm:pt-10 gap-4">
        {goodsInCart && goodsInCart.map(item => {
          return <AutopartCard key={item.goodsID} item={item} inCart={true} />
        })}
      </div>
    </>
  )
}