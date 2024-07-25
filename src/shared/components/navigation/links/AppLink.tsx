import { Link } from 'react-scroll';
import styles from './Links.module.css';

type Props = {
  href: string,
  name: string,
  isFooterLink: boolean,
  onClick?: any,
}

export const AppLink = ({
  href,
  name,
  isFooterLink,
  onClick,
}: Props) => {

  return (
    <div>
      <Link
        to={href}
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500}
        className={styles.link + ' ' + (isFooterLink ? styles.link__footerLink : '')}
        onClick={onClick}
      >
        {name}
      </Link>
    </div>
  )
}