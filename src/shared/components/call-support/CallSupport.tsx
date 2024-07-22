'use client'

import Image from 'next/image';
import { Modal } from '../modal/Modal';
import styles from './CallSupport.module.css';
import support from '@/shared/assets/icons/support.svg';
import { useState } from "react";

export const CallSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.support}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={styles.support__imgWrapper}
      >
        <Image 
          src={support} 
          alt="Позвоните в тех. поддержку" 
          className={styles.support__img}  
        />
      </div>
      {isOpen && 
        <div className={styles.support__modal}>
          <Modal 
            title='Техническая поддержка'
            desc='Оставьте вашу заявку на консультацию с менеджером и мы свяжемся с вами в течение 10 мнут'
            phone='+79169174630'
            email='borashek@inbox.ru'
          />
        </div>
      }
    </div>
  )
}