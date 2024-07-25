import styles from './Close.module.css';

type Props = {
  onClick: (active: boolean) => void,
}

export const Close = ({ onClick }: Props) => {

  return (
    <div 
      className={styles.close} 
      onClick={() => onClick(false)}
    ></div>
  )
}