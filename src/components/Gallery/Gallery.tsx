'use client';

import { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon from '@/helpers/Icon';
import { galleryImages as originalGalleryImages } from '@/data/mediaData';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState(originalGalleryImages);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [loadingImages, setLoadingImages] = useState<boolean[]>(
    Array(originalGalleryImages.length).fill(true)
  );

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

  const handleImageLoad = (index: number) => {
    setLoadingImages(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
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

  useEffect(() => {
    setGalleryImages(shuffleArray(originalGalleryImages));
  }, []);

  return (
    <section id="gallery" className={styles.gallery}>
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
          breakpoints={{
            768: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className={styles.gallery_item}>
              <div className={styles.image_wrapper}>
                {loadingImages[index] && (
                  <div className={styles.loader}>
                    <Icon name="icon-load" width={35} height={35} />
                  </div>
                )}
                <img
                  src={image}
                  alt={`Приклад видалення мятин без фарбування ${index + 1}`}
                  className={styles.slider_image}
                  onLoad={() => handleImageLoad(index)}
                  onClick={() => openModal(image)}
                  width={400}
                  height={400}
                />
              </div>
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
                alt="Зразок виконаних робіт"
                className={styles.full_image}
                width={1200}
                height={1200}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
