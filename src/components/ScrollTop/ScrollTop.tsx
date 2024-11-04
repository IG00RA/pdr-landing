'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollTop.module.css';
import Icon from '@/helpers/Icon';

export default function ScrollTop() {
  const [scrollInfo, setScrollInfo] = useState({
    isVisible: false,
    scrollY: 0,
    circleProgress: 0,
  });

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (newScrollY / maxScroll) * 100;

    setScrollInfo({
      isVisible: newScrollY > 300,
      scrollY: newScrollY,
      circleProgress: progress,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { isVisible, circleProgress } = scrollInfo;

  return (
    <>
      {isVisible && (
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.borderCircle} ${isVisible ? styles.show : ''}`}
          >
            <div className={`${styles.scrollToTopIcon} ${styles.phoneIcon}`}>
              <a className={styles.link} href="tel:+380731190408">
                <Icon name="icon-phone" width={25} height={25} />
              </a>
            </div>
          </div>
          <div
            onClick={scrollToTop}
            className={`${styles.borderCircle} ${isVisible ? styles.show : ''}`}
          >
            <svg viewBox="0 0 100 100" width="50" height="50">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#f2b843"
                strokeWidth="4"
                strokeDasharray="301.6"
                strokeDashoffset={301.6 - (301.6 * circleProgress) / 100}
              />
            </svg>
            <div className={styles.scrollToTopIcon}>
              <Icon name="icon-arrow-up" width={30} height={30} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
