'use client'

import Link from 'next/link';
import styles from './Autoparts.module.css';
import { Input } from '@/shared/components/input/Input';
import { Loader } from '@/shared/components/loader/Loader';
import { CallSupport } from '@/shared/components/call-support/CallSupport';
import { fetchAutoparts } from '@/shared/services/autoparts/autoparts-reducer';
import { useAppDispatch } from '@/shared/hooks/use-app-dispatch';
import { useAppSelector } from '@/shared/hooks/use-app-selector';
import { selectAutoparts, selectError, selectIsLoading } from '@/shared/providers/store-provider/selectors/autoparts-selectors';
import { Error } from '@/shared/components/error/Error';
import { ProductFromFavoritApiType } from '@/shared/types/types';
import { Button } from '@/shared/components/button/Button';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { isFulfilled } from '@reduxjs/toolkit';

type SearchFormType = {
  search: string
}

export const Autoparts = () => {
  const dispatch = useAppDispatch();
  const autoparts = useAppSelector(selectAutoparts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const {
    handleSubmit,
    getValues,
    control,
    watch,
    formState: { errors },
  } = useForm<SearchFormType>({
    mode: 'onChange',
    defaultValues: {
      search: "",
    },
  });
  const onSubmit: SubmitHandler<SearchFormType> = (data) => {
    dispatch(fetchAutoparts(data.search));
  }

  watch()
  const isFillField = getValues([
    'search',
  ]).every(e => !!e)

  return (
    <section className={styles.autoparts}>
      <div>
				<h2>Каталог товаров</h2>
				<h4>Наш каталог содержит более 1 млн. наименований товаров. Также мы работаем с другими агрегаторами запасных частей. Для поиска необходимой детали воспользуйтесь поиском</h4>
			</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.autoparts__searchWrapper}>
        <Controller
          control={control}
          name="search"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Input 
              type='text'
              search={true}
              placeholder='Введите VIN детали, название или модель авто'
              setNumber={onChange} 
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
        <div className={styles.autoparts__searchButton}>
          <Button 
            type='submit'
            name='Поиск'
            disabled={!isFillField}
          />
        </div>
      </form>
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {autoparts.length !== 0 && <div className={styles.autoparts__listWrapper}>
        <div className={styles.autoparts__list}>
          {autoparts && 
            autoparts.map((autopart: ProductFromFavoritApiType) => {
              return (
                <div key={autopart.goodsID} className="w-80 p-6 bg-gray-100 hover:bg-gray- border border-gray-200 rounded-lg shadow">
                  <Link href="#">
                    <h5 className="text-xl tracking-tight text-black">
                      {autopart.name.slice(0, 40)}...
                    </h5>
                    <p className="mb-4">подробнее...</p>
                  </Link>
                  <p className="mb-3 font-normal text-black">{(autopart.price * 1.2).toFixed(2)} руб.</p>
                  <Link href={'#'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      В корзину
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              )
            }
          )}
        </div>
      </div>}
      <div className={styles.autoparts__desc}>
        <p className={styles.autoparts__descText}>Вы можете найти нужную автозапчасть по каталожному номеру или по названию.Если вы зарегистрированны, как физическое лицо, то вам будут предоставлены цены для физических лиц. Для того, чтобы стать нашим партнером, зарегистрируйте аккаунт юридического лица и прикрепите реквизиты вашей компании. Подробнее смотрите в</p>
        <Link href='#' className={styles.autoparts__link}>ответах на частые вопросы FAQ</Link>
        <CallSupport />
        {/* <p className={styles.autoparts__descText}>Если воникли проблемы при подборе запасных частей, свяжитесь с нашими сотрудником:</p>
        <Link href="tel:+79267013882" className={styles.autoparts__link}>+7 (926) 701-38-82 - Вадим</Link>
        <p className={styles.autoparts__descText}>Если возникли проблемы при регистрации на сайте, свяжитесь с техническим специалистом:</p>
        <Link href="tel:+79169174630" className={styles.autoparts__link}>+7 (916) 917-46-30 - Наталья</Link> */}
      </div>
    </section>
  )
}