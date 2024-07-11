import Image from 'next/image'
import styles from './Logo.module.css'
import Link from 'next/link'
import logo from '@/shared/assets/img/logo-200.png'

export const Logo = () => {

  return (
    <Link href='/' className={styles.logo}>
      <Image src={logo} alt='logo Globsl treid-M' className={styles.logo__img} />
    </Link>
  )
}