import { useAppDispatch } from "@/shared/hooks/use-app-dispatch"
import { setAutoparts } from "@/shared/providers/store-provider/slices/autoparts-slice";
import { ProductFromFavoritApiType } from "@/shared/types/types"
import Link from "next/link"

type Props = {
  item: ProductFromFavoritApiType
}

export const AutopartCard = (props: Props) => {
  const dispatch = useAppDispatch();
  
  const addToCart = () => {
    // dispatch(setAutoparts(props.item));
  }

  return (
    <div key={props.item.goodsID} className="w-80 p-6 bg-gray-100 hover:bg-gray- border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <h5 className="text-xl tracking-tight text-black">
          {props.item.name.slice(0, 40)}...
        </h5>
        <p className="mb-4">подробнее...</p>
      </Link>
      <p className="mb-3 font-normal text-black">{(props.item.price * 1.2).toFixed(2)} руб.</p>
      <Link onClick={addToCart} href={'#'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          В корзину
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </Link>
    </div>
  )
}