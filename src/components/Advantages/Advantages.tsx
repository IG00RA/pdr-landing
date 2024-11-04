import { advantagesData } from '@/data/data';
import FadeInSection from '../Motion/FadeInSection';
import styles from './Advantages.module.css';

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <div className={styles.container}>
        <h3 className={styles.advantages_par_header}>
          Переваги видалення вм&apos;ятин без необхідності фарбування:
        </h3>
        <ul className={styles.advantages_list}>
          {advantagesData.map((advantage, index) => (
            <FadeInSection key={index}>
              <li className={styles.advantages_item}>
                <p>{advantage}</p>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </section>
  );
}
