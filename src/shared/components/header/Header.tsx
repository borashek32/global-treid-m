'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import cart from '@/shared/assets/icons/cart.svg';
import user from '@/shared/assets/icons/user.svg';
import search from '@/shared/assets/icons/search-black.svg';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../logo/Logo';
import { HeaderLink } from '../links/HeaderLink';

export const Header = () => {
  const [active, setActive] = useState(false);
  console.log(active)

  return (
    <>
      <nav className={styles.header}>
        <Logo />
        <ul className={styles.header__container}>
          <li>
            <HeaderLink href='autoparts' name='Поиск детали' />
          </li>
          <li>
            <HeaderLink href='delivery' name='Доставка' />
          </li>
          <li>
            <HeaderLink href='return' name='Возврат' />
          </li>
          <li>
            <HeaderLink href='faq' name='FAQ' />
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
        <div className={styles.burger} onClick={() => {
          setActive(!active)
          }}>
          <span></span>
        </div>
      </nav>
      {active && 
        <div className={styles.wrapper}>
          <ul className={styles.header__smallContainer}>
            <li>
              <Link href='#autoparts' onClick={() => setActive(false)}>Поиск детали</Link>
            </li>
            <li>
              <Link href='#delivery' onClick={() => setActive(false)}>Доставка</Link>
            </li>
            <li>
              <Link href='#return' onClick={() => setActive(false)}>Возврат</Link>
            </li>
            <li>
              <Link href='#faq' onClick={() => setActive(false)}>FAQ</Link>
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