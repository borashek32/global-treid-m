import { Link } from 'react-scroll';
import styles from './Links.module.css';

type Props = {
  href: string,
  name: string,
  callback?: () => void,
}

export const HeaderLink = ({
  href,
  name,
  callback,
}: Props) => {

  return (
    <div>
      <Link
        to={href}
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500}
        className={styles.header__link}
        onSetActive={callback}
      >
        {name}
      </Link>
    </div>
  )
}