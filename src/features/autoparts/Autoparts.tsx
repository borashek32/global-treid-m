'use client'

import Link from 'next/link';
import styles from './Autoparts.module.css';
import { Loader } from '@/shared/components/loader/Loader';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { 
  selectAutoparts, 
  selectError, 
  selectIsLoading
} from '@/shared/providers/store-provider/selectors/autoparts-selectors';
import { Error } from '@/shared/components/error/Error';
import { ProductFromFavoritApiType } from '@/shared/types/types';
import { SearchForm } from '@/shared/components/search-form/SearchForm';
import { setProduct } from '@/shared/providers/store-provider/slices/cart-slice';
import { useAppDispatch } from '@/shared/hooks/use-app-dispatch';

export const Autoparts = () => {
  const autoparts = useAppSelector(selectAutoparts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  const addToCart = (autopart: ProductFromFavoritApiType) => {
    dispatch(setProduct(autopart));
    console.log(autopart)
  }
  
  return (
    <section id='autoparts' className={styles.autoparts}>
      <div>
				<h2>Каталог товаров</h2>
				<h4>Наш каталог содержит более 1 млн. наименований товаров. Также мы работаем с другими агрегаторами запасных частей. Для поиска необходимой детали воспользуйтесь поиском</h4>
			</div>
      <SearchForm />
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {autoparts.length !== 0 && <div className={styles.autoparts__listWrapper}>
        <div className={styles.autoparts__list}>
          {autoparts.map((autopart: ProductFromFavoritApiType) => {
            return (
              <div key={autopart.goodsID} className="w-80 p-6 bg-gray-100 hover:bg-gray- border border-gray-200 rounded-lg shadow">
                <Link href="#">
                  <h5 className="text-lg tracking-tight text-black">
                    {autopart.name.slice(0, 40)}...
                  </h5>
                  <p className="mb-4">подробнее...</p>
                </Link>
                <p className="mb-3 font-normal text-black">{(autopart.price * 1.2).toFixed(2)} руб.</p>
                <div onClick={() => addToCart(autopart)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                    В корзину
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>}
      <div className={styles.autoparts__desc}>
        <p className={styles.autoparts__descText}>Вы можете найти нужную автозапчасть по каталожному номеру или по названию.Если вы зарегистрированны, как физическое лицо, то вам будут предоставлены цены для физических лиц. Для того, чтобы стать нашим партнером, зарегистрируйте аккаунт юридического лица и прикрепите реквизиты вашей компании. Подробнее смотрите в</p>
        <Link href='#' className={styles.autoparts__link}>ответах на частые вопросы FAQ</Link>
        {/* <p className={styles.autoparts__descText}>Если воникли проблемы при подборе запасных частей, свяжитесь с нашими сотрудником:</p>
        <Link href="tel:+79267013882" className={styles.autoparts__link}>+7 (926) 701-38-82 - Вадим</Link>
        <p className={styles.autoparts__descText}>Если возникли проблемы при регистрации на сайте, свяжитесь с техническим специалистом:</p>
        <Link href="tel:+79169174630" className={styles.autoparts__link}>+7 (916) 917-46-30 - Наталья</Link> */}
      </div>
    </section>
  )
}