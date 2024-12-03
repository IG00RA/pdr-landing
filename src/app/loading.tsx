import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.logo_wrap}>
      <img
        className={styles.logo}
        src="/assets/img/header/logo.webp"
        alt="logo"
      />
    </div>
  );
}
