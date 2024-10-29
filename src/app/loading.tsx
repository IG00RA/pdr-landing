import Image from 'next/image';
import styles from './loader.module.css';
import logo from '../img/header/logo.png';

export default function Loading() {
  return (
    <div className={styles.logo_wrap}>
      <Image
        className={styles.logo}
        src={logo}
        width={200}
        height={150}
        alt="logo"
      />
    </div>
  );
}
