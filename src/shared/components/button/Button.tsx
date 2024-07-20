import { FC } from "react";
import styles from "./Button.module.css";

type Props = {

}

export const Button: FC<Props> = ({ 
  
}: Props) => {

  return (
    <div className={styles.button}>
      <p className={styles.button__text}>Поиск</p>
    </div>
  )
}