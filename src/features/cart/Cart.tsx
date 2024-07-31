'use client';

import { useAppSelector } from '@/shared/hooks/use-app-selector';
import styles from './Cart.module.css';
import '@/shared/assets/styles/global.css';
import { selectProducts } from '@/shared/providers/store-provider/selectors/cart-selectors';
import { useEffect } from 'react';
import { getProducts } from '@/shared/providers/store-provider/slices/cart-slice';
import { useAppDispatch } from '@/shared/hooks/use-app-dispatch';

export const Cart = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  console.log(products)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <section className='flex flex-col items-start'>
      <div className={styles.cart__wrapper}>
        <h2 className="mb-4">Корзина</h2>
        <div className="relative overflow-x-auto mb-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">№</th>
                <th scope="col" className="px-6 py-3">Наименование</th>
                <th scope="col" className="px-6 py-3">Количество</th>
                <th scope="col" className="px-6 py-3">руб/шт</th>
                <th scope="col" className="px-6 py-3">Общая цена</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.cart__subheader}>Общая стоимость - </p>
      </div>
    </section>
  )
}