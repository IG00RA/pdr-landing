'use client';

import { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import firstImg from '../../img/gallery/1.jpg';
import secondImg from '../../img/gallery/2.jpg';
import thirdImg from '../../img/gallery/3.jpg';
import fourthImg from '../../img/gallery/4.jpg';
import Icon from '@/helpers/Icon';

const images: string[] = [firstImg, secondImg, thirdImg, fourthImg].map(
  image => image.src
);

export default function Gallery() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');

  const openModal = (image: string): void => {
    setCurrentImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setCurrentImage('');
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.gallery_text}>Наші роботи:</h2>
        <Swiper
          navigation={{
            prevEl: `.${styles.prev}`,
            nextEl: `.${styles.next}`,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.pagination}`,
          }}
          spaceBetween={20}
          slidesPerView={2}
          className={styles.gallery_slider}
          modules={[Navigation, Pagination]}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className={styles.gallery_item}>
              <img
                src={image}
                alt={`Слайд ${index + 1}`}
                className={styles.slider_image}
                onClick={() => openModal(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.prev}>
          <Icon name="icon-arrow_back" width={35} height={35} />
        </div>
        <div className={styles.next}>
          <Icon name="icon-arrow_forward" width={35} height={35} />
        </div>
        <div className={styles.pagination}></div>

        {isOpen && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modal_content}>
              <img
                src={currentImage}
                alt="Full size"
                className={styles.full_image}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
