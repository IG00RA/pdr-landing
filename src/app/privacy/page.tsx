import { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Політика конфіденційності</h1>
      <p className={styles.text}>
        Ця політика конфіденційності описує, як ми збираємо, використовуємо та
        захищаємо вашу особисту інформацію під час використання нашого вебсайту.
      </p>

      <h2 className={styles.subtitle}>1. Інформація, яку ми збираємо</h2>
      <p className={styles.text}>
        Ми можемо збирати певну інформацію, таку як ваше ім&apos;я, електронну
        адресу, номер телефону, а також іншу інформацію, яку ви надаєте
        добровільно.
      </p>

      <h2 className={styles.subtitle}>2. Використання вашої інформації</h2>
      <p className={styles.text}>
        Ми використовуємо вашу інформацію для покращення нашого сайту, відповіді
        на ваші запити та надання відповідних послуг.
      </p>

      <h2 className={styles.subtitle}>3. Захист вашої інформації</h2>
      <p className={styles.text}>
        Ми вживаємо відповідних заходів для захисту вашої особистої інформації
        від несанкціонованого доступу та розголошення.
      </p>

      <h2 className={styles.subtitle}>4. Зміни в політиці конфіденційності</h2>
      <p className={styles.text}>
        Ми залишаємо за собою право вносити зміни до цієї політики
        конфіденційності в будь-який час. Всі зміни будуть опубліковані на цій
        сторінці.
      </p>

      <h2 className={styles.subtitle}>5. Контактна інформація</h2>
      <p className={styles.text}>
        Якщо у вас виникли питання або пропозиції щодо нашої політики
        конфіденційності, зв&apos;яжіться з нами за допомогою контактної
        інформації на сайті.
      </p>
    </div>
  );
}
