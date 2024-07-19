import styles from './Error.module.css'

type Props = {
  error: string,
}

export const Error = ({ error }: Props) => {

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.error}>
        {error}
      </p>
    </div>
  )
}