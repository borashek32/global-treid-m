'use client';

import { MouseEvent, useState } from 'react';
import styles from './Header.module.css';
import { Logo } from '@/shared/components/logo/Logo';
import { Menu } from './Menu';
import { DashboardLinks } from './DashboardLinks';

export const Header = () => {
  const [active, setActive] = useState(false);

  const handleSetActive = (e: MouseEvent<HTMLAnchorElement>) => {
    setActive(!active);
  }

  return (
    <>
      <nav className={styles.header}>
        <Logo onClick={() => setActive(false)} />
        <ul className={styles.header__container}>
          <Menu isFooterMenu={false} />
        </ul>
        <div className={styles.icons}>
          <DashboardLinks  />
        </div>
        <div className={styles.burger} onClick={() => setActive(!active)}>
          <span></span>
        </div>
      </nav>
      {active &&
        <nav className={styles.wrapper}>
          <ul className={styles.header__smallContainer}>
            {active && <Menu isFooterMenu={false} onClick={handleSetActive} />}
          </ul>
          <div className={styles.smallIcons}>
            <DashboardLinks onClick={() => setActive(false)} />
          </div>
        </nav>
      }
    </>
  )
}