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
import { AutopartCard } from '@/features/autoparts/autopart-card/AutopartCard';

export const Autoparts = () => {
  const autoparts = useAppSelector(selectAutoparts);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);
  
  return (
    <section id='autoparts' className={styles.autoparts}>
      <div>
				<h2>Каталог товаров</h2>
				<h4>Наш каталог содержит более 1 млн. наименований товаров. Также мы работаем с другими агрегаторами запасных частей. Для поиска необходимой детали воспользуйтесь поиском</h4>
			</div>
      <SearchForm />
      {isLoading ? <Loader /> : error ? <Error error={error} /> :
      autoparts.length !== 0 ? <div className={styles.autoparts__listWrapper}>
        <div className={styles.autoparts__list}>
          {autoparts
            .filter((autopart: ProductFromFavoritApiType) => autopart.price > 0)
            .map((autopart: ProductFromFavoritApiType) => {
              return <AutopartCard key={autopart.goodsID} item={autopart} />
            })
          }
        </div>
      </div> : ''}
      <div className={styles.autoparts__desc}>
        <p className={styles.autoparts__descText}>Вы можете найти нужную автозапчасть по каталожному номеру или по названию.Если вы зарегистрированны, как физическое лицо, то вам будут предоставлены цены для физических лиц. Для того, чтобы стать нашим партнером, зарегистрируйте аккаунт юридического лица и прикрепите реквизиты вашей компании. Подробнее смотрите в</p>
        <Link href='#' className={styles.autoparts__link}>ответах на частые вопросы FAQ</Link>
        <p className={styles.autoparts__descText}>Если воникли проблемы при подборе запасных частей, свяжитесь с нашими сотрудником:</p>
        <Link href="tel:+79267013882" className={styles.autoparts__link}>+7 (926) 701-38-82 - Вадим</Link>
        <p className={styles.autoparts__descText}>Если возникли проблемы при регистрации на сайте, свяжитесь с техническим специалистом:</p>
        <Link href="tel:+79169174630" className={styles.autoparts__link}>+7 (916) 917-46-30 - Наталья</Link>
      </div>
    </section>
  )
}