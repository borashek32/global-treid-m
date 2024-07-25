'use client'

import styles from './CallSupport.module.css';
import { useState } from "react";
import { SupportLink } from '../navigation/links/SupportLink';

export const CallSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.support}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={styles.support__imgWrapper}
      >
        <SupportLink phone='+79169174630' />
      </div>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={styles.support__imgWrapper}
      >
        <SupportLink email='info@global-treid-m.com' />
      </div>
    </div>
  )
}