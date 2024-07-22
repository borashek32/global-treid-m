import { FC } from "react";
import styles from "./Button.module.css";

type Props = {
  type: 'submit' | 'button',
  name: string,
  disabled?: boolean,
  onClick?: () => void
}

export const Button: FC<Props> = ({ 
  type,
  name,
  disabled,
  onClick,
}: Props) => {

  return (
    <button 
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      <p className={styles.button__text}>{name}</p>
    </button>
  )
}