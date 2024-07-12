import Image from 'next/image';
import styles from './SocialMedia.module.css';
import fb from '@/shared/assets/icons/fb.svg';
import youtube from '@/shared/assets/icons/youtube.svg';
import ig from '@/shared/assets/icons/ig.svg';
import tw from '@/shared/assets/icons/tw.svg';

export const SocialMedia = () => {

  return (
    <div className={styles.socialMedia}>
      <Image className={styles.socialMedia__icon} src={fb} alt='facebook' />
      <Image className={styles.socialMedia__icon} src={youtube} alt='youtube' />
      <Image className={styles.socialMedia__icon} src={ig} alt='instagram' />
      <Image className={styles.socialMedia__icon} src={tw} alt='twitter' />
    </div>
  )
} 