import Image from 'next/image';
import styles from './loading.module.css';
import logo from '../img/header/logo.webp';

export default function Loading() {
  return (
    <div className={styles.logo_wrap}>
      <Image
        className={styles.logo}
        src={logo}
        width={0}
        height={0}
        sizes="100vw"
        alt="logo"
      />
    </div>
  );
}
