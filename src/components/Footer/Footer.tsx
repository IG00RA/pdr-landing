import styles from './Footer.module.css';
import Icon from '@/helpers/Icon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_wrap}>
          <a href="/" aria-label="Home">
            <img
              className={styles.logo}
              src="/assets/img/header/logo.webp"
              alt="Dent Center logo"
            />
          </a>
        </div>
        <ul className={styles.contacts}>
          <li>
            <a
              className={styles.link}
              href="https://maps.app.goo.gl/yLwk89t9KdKCYJeE9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location on Google Maps"
            >
              <Icon name="icon-location" width={25} height={25} />
              вул. Богдана Хмельницького, 29а, м. Червоноград
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="tel:+380731190408"
              aria-label="Phone number +380 73 119 0408"
            >
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
              aria-label="Instagram profile"
            >
              <Icon name="icon-instagram" width={35} height={35} />
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.facebook.com/dent_center_chg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
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
              aria-label="Viber chat"
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
              aria-label="Telegram profile"
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
          href="/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Privacy Policy"
        >
          Політика конфіденційності
        </a>
        <a
          className={styles.github_link}
          href="https://github.com/IG00RA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile of Igoora"
        >
          By Igoora
        </a>
      </div>
    </footer>
  );
}
