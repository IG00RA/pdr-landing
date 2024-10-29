import styles from './Map.module.css';

// 50.386985, 24.229896;
export default function Map() {
  return (
    <section id="contacts" className={styles.map}>
      <div className={styles.container}>
        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2544.7557043109596!2d24.225025094305295!3d50.38698831865923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDIzJzEzLjIiTiAyNMKwMTMnNDcuNiJF!5e0!3m2!1sen!2sua!4v1729692691774!5m2!1sen!2sua"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.map_overlay}></div>
        <div className={styles.info_container}>
          <h3 className={styles.info_header}>Наші контакти</h3>
          <ul>
            <li>
              Адреса:
              <a
                href="https://maps.app.goo.gl/yLwk89t9KdKCYJeE9"
                target="_blank"
                rel="noopener noreferrer"
              >
                вул. Богдана Хмельницького, 29а, м. Червоноград
              </a>
            </li>
            <li>
              Телефон:
              <a href="tel:+380731190408">+380 73 119 0408</a>
            </li>
            <li>
              Instagram:
              <a
                href="https://www.instagram.com/dent_center_chg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dent_center_chg
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
