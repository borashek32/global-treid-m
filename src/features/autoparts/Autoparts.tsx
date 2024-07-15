'use client'

import Link from 'next/link';
import styles from './Autoparts.module.css';
import { ProductType } from '@/shared/lib/types';
import { FC } from 'react';

type Props = {
  autoparts: ProductType[]
}

export const Autoparts: FC<Props> = ({ autoparts }: Props) => {
  console.log(autoparts)

  return (
    <section className={styles.autoparts}>
      <div>
				<h2>Каталог товаров</h2>
				<h4>Наш каталог содержит более 1 млн. наименований товаров. Для поиска необходимой запасной части воспользуйтесь поиском</h4>
			</div>
      <div className={styles.autoparts__listWrapper}>
        <div className={styles.autoparts__list}>{autoparts && autoparts.map((autopart: ProductType) => {
          return (
            <div className={styles.autoparts__item + ' ' + styles.autopart} key={autopart.id}>
              <p className={styles.autopart__title}>{autopart.name} </p>
              <p className={styles.autopart__desc}>на {autopart.car_model}, </p>
              <p className={styles.autopart__desc}>по цене {autopart.price} руб., </p>
              <Link href={'#'}>
                <p className={styles.autopart__desc}>подробнее...</p>
              </Link>
            </div>
          )
        })}
        </div>
      </div>
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