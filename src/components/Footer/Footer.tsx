import styles from './Footer.module.css';
import Image from 'next/image';
import logo from '../../img/header/logo.png';
import Icon from '@/helpers/Icon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_wrap}>
          <a href="/">
            <Image className={styles.logo} src={logo} alt="logo" />
          </a>
        </div>
        <ul className={styles.contacts}>
          <li>
            <a
              className={styles.link}
              href="https://maps.app.goo.gl/yLwk89t9KdKCYJeE9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-location" width={25} height={25} />
              вул. Богдана Хмельницького, 29а, м. Червоноград
            </a>
          </li>
          <li>
            <a className={styles.link} href="tel:+380731190408">
              <Icon name="icon-phone" width={25} height={25} />
              +380 73 119 0408
            </a>
          </li>
        </ul>
        <ul className={styles.nav_wrap}>
          <li>
            <a
              className={styles.link}
              href="https://www.instagram.com/dent_center_chg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-instagram" width={35} height={35} />
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.instagram.com/dent_center_chg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-facebook" width={35} height={35} />
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="viber://add?number=%2B380731190408"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-viber" width={35} height={35} />
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://t.me/Oleg_tovstyak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-telegram" width={35} height={35} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Червоноград Dent Center. Всі права захищені.</p>
        <a
          className={styles.github_link}
          href="https://github.com/IG00RA"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Igoora
        </a>
        <a
          className={styles.github_link}
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Політика конфіденційності
        </a>
      </div>
    </footer>
  );
}
