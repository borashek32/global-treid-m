import styles from './Promo.module.css'

export const Promo = () => {

  return (
    <section className={styles.promo}>
      <div className={styles.promo__container}>
        <h1 className={styles.promo__header}>Global Treid-M</h1>
        <h2 className={styles.promo__subheader}>Мы всегда рядом</h2>
        <p className={styles.promo__desc}>г. Москва, шоссе Энтузиастов, д. 10/2</p>
        <a className={styles.promo__desc} href="mailto:borashek@inbox.ru">info@global-treid-m.com</a>
        <a className={styles.promo__desc} href="tel:+79169174630">+7 (916) 917-46-30</a>
        <p className={styles.promo__desc}>Поиск автозапчасти по VIN-номеру, названию детали или модели авто</p>
      </div>
    </section>
  )
}