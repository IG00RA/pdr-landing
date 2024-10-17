import Image from 'next/image';
import styles from './Header.module.css';
import logo from '../../img/header/logo.png';
import Icon from '@/helpers/Icon';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_wrap}>
          <a href="/">
            <Image className={styles.logo} src={logo} alt="logo" />
          </a>
          <div className={styles.text_wrap}>
            <span className={`${styles.logo_text} ${styles.logo_text_large}`}>
              dent center
            </span>
            <span className={styles.logo_text}>paintless dent repair</span>
          </div>
        </div>
        <div className={styles.nav_wrap}>
          <ul className={styles.contacts}>
            <li>
              <a className={styles.link} href="mailto:info@devstudio.com">
                <Icon name="icon-instagram" width={25} height={25} />
                @dent_center
              </a>
            </li>
            <li>
              <a className={styles.link} href="tel:+380961111111">
                <Icon name="icon-mobile" width={25} height={25} />
                +38 096 111 11 11
              </a>
            </li>
          </ul>
          <nav>
            <ul className={styles.nav}>
              <li>
                <a className={styles.link} href="#">
                  Послуги
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Портфоліо
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
