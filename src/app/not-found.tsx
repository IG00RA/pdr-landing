import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Сторінку не знайдено</h1>
      <p className={styles.message}>
        Вибачте, але сторінку, яку ви шукаєте, не існує.
      </p>
      <a href="/" className={styles.homeLink}>
        На головну
      </a>
    </div>
  );
}
