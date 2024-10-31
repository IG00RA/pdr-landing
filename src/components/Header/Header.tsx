'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import logo from '../../img/header/logo.png';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_wrap}>
          <a href="/">
            <Image
              className={styles.logo}
              src={logo}
              width={200}
              height={150}
              alt="logo"
            />
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
              <a
                className={styles.link}
                href="https://www.instagram.com/dent_center_chg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="icon-instagram" width={25} height={25} />
                @dent_center
              </a>
            </li>
            <li>
              <a className={styles.link} href="tel:+380731190408">
                <Icon name="icon-mobile" width={25} height={25} />
                +380 73 119 0408
              </a>
            </li>
          </ul>
          <nav>
            <ul className={styles.nav}>
              <li>
                <a className={styles.link} href="#about">
                  Послуги
                </a>
              </li>
              <li>
                <a className={styles.link} href="#gallery">
                  Портфоліо
                </a>
              </li>
              <li>
                <a className={styles.link} href="#contacts">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.burger_wrap} onClick={openMenu}>
          <Icon name="icon-menu" width={30} height={40} />
        </div>
        <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}
