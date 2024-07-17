import Image from 'next/image';
import styles from './Input.module.css';
import search from '@/shared/assets/icons/search-black.svg';
import { KeyboardEvent, FC, useState } from 'react';

type Props = {
  setNumber: (number: string) => void,
  type: 'number' | 'text',
  placeholder: string,
  search: boolean,
}

export const Input: FC<Props> = ({ 
  setNumber,
  type,
  placeholder,
}: Props) => {
  const [localValue, setLocalValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  const searchProduct = (value: string) => {
    if (value.trim() !== '') {
      setNumber(value.trim())
    } else {
      setError('Поле обязательно для заполнения')
    }
  }

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.key === 'Enter') {
      searchProduct(localValue)
    }
  };

  return (
    <div className={styles.search}>
      <input 
        value={localValue}
        onChange={e => setLocalValue(e.currentTarget.value)}
        className={styles.search__input} 
        type={type} 
        placeholder={placeholder}
        onKeyPress={onPressEnter}
      />
      <p>{error}</p>
      {search && <Image src={search} alt='search' className={styles.searchImg} />}
    </div>
  )
}