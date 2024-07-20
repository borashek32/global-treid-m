import { FC } from "react";
import styles from "./Button.module.css";

type Props = {
  type: 'submit' | 'button',
  name: string,
  disabled: boolean,
}

export const Button: FC<Props> = ({ 
  type,
  name,
  disabled,
}: Props) => {
  console.log(disabled)

  return (
    <button 
      type={type}
      className={styles.button}
      disabled={disabled}
    >
      <p className={styles.button__text}>{name}</p>
    </button>
  )
}