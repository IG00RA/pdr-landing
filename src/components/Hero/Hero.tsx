import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.hero_text}>
          Видалення вм’ятин без фарбування на авто <span>PDR TECHNOLOGY</span>
        </h1>
        <a href="#gallery" className={styles.hero_button}>
          Наші роботи
        </a>
      </div>
    </section>
  );
}
