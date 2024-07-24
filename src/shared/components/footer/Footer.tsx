'use client';

import styles from './Footer.module.css';
import { Logo } from '../logo/Logo';
import { SocialMedia } from '../social-media/SocialMedia';
import { Menu } from '../header/Menu';

export const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
          <ul className={styles.footer__menu}>
            <Menu isFooterMenu={true} />
          </ul>
          <div className={styles.footer__contacts}>
            <div className={styles.footer__logo}>
              <Logo />
            </div>
            <p className={styles.footer__contactsItem}>г. Москва, шоссе Энтузиастов, д. 10/2</p>
            <a className={styles.footer__contactsItem} href="mailto:borashek@inbox.ru">info@global-treid-m.com</a>
            <a className={styles.footer__contactsItem} href="tel:+79169174630">+7 (916) 917-46-30</a>
            <div className={styles.footer__socialMediaWrapper}>
              <SocialMedia />
            </div>
          </div>
      </div>
      <div className={styles.footer__footer}>
        <p className={styles.footer__footerText}>
          © Global Treid-M, {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}