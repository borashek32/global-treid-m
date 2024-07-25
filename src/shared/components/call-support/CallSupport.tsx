'use client'

import styles from './CallSupport.module.css';
import { useState } from 'react';
import Link from 'next/link';
import emailImg from '@/shared/assets/icons/email.svg';
import phoneImg from '@/shared/assets/icons/phone.svg';
import chatImg from '@/shared/assets/icons/chat.svg';
import { Chat } from "@/shared/components/chat/Chat";
import Image from 'next/image';

export const CallSupport = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      {active && <Chat active={active} setActive={() => setActive} />}
      <div className={styles.support}>
        <div 
          className={styles.support__imgWrapper} 
          onClick={() => setActive(!active)}
        >
          <Image src={chatImg} alt='поддержка' />
        </div>
        <div className={styles.support__imgWrapper}>
          <Link 
            href='tel:+79169174630'
            className="flex gap-2 align-center mb-2 relative z-40"
          >
            <Image src={phoneImg} alt='поддерржка' />
          </Link>
        </div>
        <div className={styles.support__imgWrapper}>
          <Link 
            href='mailto:info@global-treid-m.com'
            className="flex gap-2 align-center mb-2 relative z-40"
          >
            <Image src={emailImg} alt='поддерржка' />
          </Link>
        </div>
      </div>
    </>
  )
}