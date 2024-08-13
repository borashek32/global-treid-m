import { Cart } from "@/features/dashboard/cart/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Корзина',
};

export default function Page() {
  

  return <Cart />
}