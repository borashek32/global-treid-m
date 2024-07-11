import Image from 'next/image';
import styles from './Search.module.css';
import search from '@/shared/assets/icons/search-black.svg';

export const Search = () => {

  return (
    <div className={styles.search}>
      <input 
        className={styles.search__input} 
        type="text" 
        placeholder='Введите VIN детали, название или модель авто' 
      />
      <Image src={search} alt='search' className={styles.searchImg} />
      <p className={styles.search__desc}>Поиск автозапчасти по VIN-номеру, названию детали или модели авто</p>
    </div>
  )
}