import Image from 'next/image'
import styles from './Logo.module.css'
import Link from 'next/link'
import logo from '@/shared/assets/img/logo-200.png'
import { MouseEvent } from 'react'

type Props = {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void,
}

export const Logo = ({ onClick }: Props) => {

  return (
    <Link href='/' className={styles.logo} onClick={onClick}>
      <Image src={logo} alt='logo Globsl treid-M' className={styles.logo__img} />
    </Link>
  )
}