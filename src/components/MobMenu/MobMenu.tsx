import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';

type MobMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobMenu({ isMenuOpen, closeMenu }: MobMenuProps) {
  return (
    <div
      onClick={closeMenu}
      className={`${styles.mobile_wrap} ${
        isMenuOpen && styles.mobile_menu_open
      }`}
    >
      <div className={styles.close_icon} onClick={closeMenu}>
        <Icon name="icon-close" width={25} height={25} />
      </div>
      <nav
        className={styles.burger_menu}
        onClick={event => event.stopPropagation()}
      >
        <ul>
          <li className={styles.mobile_link}>
            <a href="#about" onClick={closeMenu}>
              Послуги
            </a>
          </li>
          <li className={styles.mobile_link}>
            <a href="#gallery" onClick={closeMenu}>
              Портфоліо
            </a>
          </li>
          <li className={styles.mobile_link}>
            <a href="#contacts" onClick={closeMenu}>
              Контакти
            </a>
          </li>
        </ul>
        <ul>
          <li className={styles.mobile_link}>
            <a
              href="https://www.instagram.com/dent_center_chg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="icon-instagram" width={25} height={25} />
              @dent_center
            </a>
          </li>
          <li className={styles.mobile_link}>
            <a href="tel:+380731190408">
              <Icon name="icon-mobile" width={25} height={25} />
              +380 73 119 0408
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
