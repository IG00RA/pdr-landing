'use client';

import styles from './Map.module.css'; // Стилі для секції карти

export default function MapSection() {
  return (
    <section className={styles.map}>
      <div className={styles.container}>
        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1396.5437299199355!2d24.22893457348121!3d50.38707256340707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1729619358561!5m2!1sen!2sua"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.map_overlay}></div>
        <div className={styles.info_container}>
          <h3 className={styles.info_header}>Наші контакти</h3>
          <p>Адреса: вул. Шептицького, Червоноград</p>
          <p>Телефон: +380 123 456 789</p>
          <p>Email: service@example.com</p>
        </div>
      </div>
    </section>
  );
}
