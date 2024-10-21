import styles from './Features.module.css';
import Icon from '@/helpers/Icon';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.features_text}>Чому dent center?</h2>
        <ul className={styles.features_list}>
          <li className={styles.features_item}>
            <h3>ГАРАНТІЯ ЯКОСТІ</h3>
            <Icon name="icon-trace" width={50} height={50} />
            <p>
              Ми хочемо, щоб ви були впевнені в якості нашої роботи, тому оплата
              здійснюється лише після проведення всіх робіт. Тільки так ви
              зможете переконатися, що все виконано належним чином
            </p>
          </li>
          <li className={styles.features_item}>
            <h3>ЯКІСТЬ РОБІТ</h3>
            <Icon name="icon-star" width={50} height={50} />
            <p>
              Наша місія – індивідуальний підхід до кожного клієнта, наша мета –
              якісно виконана робота. Для нас важливим є результат і задоволений
              клієнт. Робота на швидкість – це не про нас!
            </p>
          </li>
          <li className={styles.features_item}>
            <h3>БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ</h3>
            <Icon name="icon-chat" width={50} height={50} />
            <p>
              Виникли питання? Вам саме сюди! Дзвоніть, і наші фахівці з радістю
              підкажуть як повернути вашому автомобілю неперевершений зовнішній
              вигляд і блиск.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
