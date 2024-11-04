import { featuresData } from '@/data/data';
import FadeInSection from '../Motion/FadeInSection';
import styles from './Features.module.css';
import Icon from '@/helpers/Icon';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.features_text}>Чому dent center?</h2>
        <FadeInSection>
          <ul className={styles.features_list}>
            {featuresData.map((feature, index) => (
              <li className={styles.features_item} key={index}>
                <h3>{feature.title}</h3>
                <Icon name={feature.icon} width={50} height={50} />
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </FadeInSection>
      </div>
    </section>
  );
}
