import styles from './Advantages.module.css';

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h3 className={styles.advantages_par_header}>
          Переваги видалення вм'ятин без необхідності фарбування:
        </h3>
        <ul className={styles.advantages_list}>
          <li className={styles.advantages_item}>
            <p>
              збереження оригінального лакофарбового покриття. Часто можна
              побачити автомобілі з різницею в кольорах окремих частин, через
              неправильний підбір фарби;
            </p>
          </li>
          <li className={styles.advantages_item}>
            <p>
              оригінальне покриття автомобіля більш довговічне, оскільки
              заводське фарбування відбувається із дотриманням усіх
              технологічних вимог;
            </p>
          </li>
          <li className={styles.advantages_item}>
            <p>
              процес фарбування займає значно більше часу, а через невелику
              кількість кваліфікованих майстрів, очікування може становити до
              кількох тижнів;
            </p>
          </li>
          <li className={styles.advantages_item}>
            <p>
              рихтування без фарбування за допомогою PDR коштує менше, ніж повне
              відновлення та фарбування деталі. У важкодоступних місцях вартість
              може наближатися до ціни фарбування, але все одно буде вигіднішою;
            </p>
          </li>
          <li className={styles.advantages_item}>
            <p>
              авто зберігає статус "нефарбоване", що позитивно впливає на його
              вартість і прискорює продаж у майбутньому.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
