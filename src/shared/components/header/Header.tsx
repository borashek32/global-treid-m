'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import cart from '@/shared/assets/icons/cart.svg';
import user from '@/shared/assets/icons/user.svg';
import search from '@/shared/assets/icons/search-black.svg';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../logo/Logo';

export const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className={styles.header}>
        <Logo />
        <ul className={styles.header__container}>
          <li>
            <Link href='#' className={styles.header__link}>Поиск детали</Link>
          </li>
          <li>
            <Link href='#' className={styles.header__link}>Доставка</Link>
          </li>
          <li>
            <Link href='#' className={styles.header__link}>Возврат</Link>
          </li>
          <li>
            <Link href='#' className={styles.header__link}>Реквизиты</Link>
          </li>
          <li>
            <Link href='#' className={styles.header__link}>FAQ</Link>
          </li>
        </ul>
        <div className={styles.icons}>
          <Link href='#'>
            <Image src={cart} alt='user cart' width={20} />
          </Link>
          <Link href='/user/dashboard'>
            <Image src={user} alt='user dashboard' width={20} />
          </Link>
          <Link href='#'>
            <Image src={search} alt='search' width={20} />
          </Link>
        </div>
        <div className={styles.burger} onClick={() => setActive(!active)}>
          <span></span>
        </div>
      </nav>
      {active && 
        <div className={styles.wrapper}>
          <ul className={styles.header__smallContainer}>
            <li onClick={() => setActive(false)}>
              <Link href='#' className={styles.header__link}>Поиск детали</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href='#' className={styles.header__link}>Доставка</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href='#' className={styles.header__link}>Возврат</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href='#' className={styles.header__link}>Реквизиты</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href='#' className={styles.header__link}>FAQ</Link>
            </li>
          </ul>
          <div className={styles.smallIcons}>
            <Link onClick={() => setActive(false)} href='#'>
              <Image src={cart} alt='user cart' width={20} />
            </Link>
            <Link onClick={() => setActive(false)} href='#'>
              <Image src={user} alt='user dashboard' width={20} />
            </Link>
            <Link onClick={() => setActive(false)} href='#'>
              <Image src={search} alt='search' width={20} />
            </Link>
          </div>
        </div>
      }
    </>
  )
}