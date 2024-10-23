import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.hero_text}>
          Видалення вм’ятин без фарбування на авто <span>PDR TECNOLOGY</span>
        </h1>
        <button className={styles.hero_button} type="button">
          Наші роботи
        </button>
      </div>
    </section>
  );
}
