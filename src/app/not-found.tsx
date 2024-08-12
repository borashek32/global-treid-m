import Link from 'next/link';
import styles from '@/shared/assets/styles/NotFound.module.css';
import { TbError404 } from 'react-icons/tb';
 
export default function Page() {

  return (
    <div className={styles.error}>
      <TbError404 size={100}/>
      <h2>Страница не найдена</h2>
      <p>Запрашиваемой страницы не существует</p>
      <Link href="/" className={styles.error__link}>Главная страница</Link>
    </div>
  )
}