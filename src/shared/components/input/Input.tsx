import Image from 'next/image';
import styles from './Input.module.css';
import searchImg from '@/shared/assets/icons/search-black.svg';
import { KeyboardEvent, Ref, useState } from 'react';

type Props = {
  onChange: (value: string) => void
  type: 'number' | 'text',
  placeholder: string,
  search: boolean,
  value: string,
  onPressEnter: () => void,
  ref?: Ref<HTMLInputElement>,
  onBlur: () => void,
}

export const Input = ({ 
  onPressEnter,
  onChange,
  type,
  placeholder,
  search,
  value,
}: Props) => {
  const [error, setError] = useState<string | null>(null);

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Enter') {
      onPressEnter();
    }
  };

  return (
    <div className={styles.input}>
      <input 
        value={value}
        onChange={e => onChange((e.currentTarget.value).trim())}
        className={styles.input__input} 
        type={type} 
        placeholder={placeholder}
        onKeyPress={onKeyPress}
      />
      <p className={styles.input__error}>{error}</p>
      {search && <Image src={searchImg} alt='search' className={styles.input__img} />}
    </div>
  )
}