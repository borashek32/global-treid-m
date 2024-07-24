import { Fragment, MouseEvent } from "react";
import { AppLink } from "../links/AppLink";
import { PATHS } from "@/shared/constants/paths";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from './Header.module.css';

type Props = {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void,
  isFooterMenu: boolean,
}

export const Menu = ({ onClick, isFooterMenu }: Props) => {
  const path = usePathname();

  return (
    <Fragment>
      {path == '/' ?
        (
          <Fragment>
            <li>
              <AppLink 
                href={PATHS.AUTOPARTS} 
                name='Поиск детали' 
                onClick={onClick}
                isFooterLink={isFooterMenu} 
              />
            </li>
            <li>
              <AppLink 
                href={PATHS.DELIVERY} 
                name='Доставка' 
                onClick={onClick}
                isFooterLink={isFooterMenu} 
              />
            </li>
            <li>
              <AppLink 
                href={PATHS.RETURN} 
                name='Возврат' 
                onClick={onClick}
                isFooterLink={isFooterMenu} 
              />
            </li>
            <li>
              <AppLink 
                href={PATHS.FAQ} 
                name='FAQ' 
                onClick={onClick}
                isFooterLink={isFooterMenu} 
              />
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className={isFooterMenu ? styles.menu__footerLink : ''}>
              <Link href={`/#${PATHS.AUTOPARTS}`} onClick={onClick}>
                Поиск детали
              </Link>
            </li>
            <li className={isFooterMenu ? styles.menu__footerLink : ''}>
              <Link href={`/#${PATHS.DELIVERY}`} onClick={onClick}>
                Доставка
              </Link>
            </li>
            <li className={isFooterMenu ? styles.menu__footerLink : ''}>
              <Link href={`/#${PATHS.RETURN}`} onClick={onClick}>
                Возврат
              </Link>
            </li>
            <li className={isFooterMenu ? styles.menu__footerLink : ''}>
              <Link href={`/#${PATHS.FAQ}`} onClick={onClick}>
                FAQ
              </Link>
            </li>
          </Fragment>
        )
      }  
    </Fragment>
  )
}