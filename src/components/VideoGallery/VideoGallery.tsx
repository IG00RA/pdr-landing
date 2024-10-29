'use client';

import { useState, useRef } from 'react';
import styles from './VideoGallery.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon from '@/helpers/Icon';

const videoPairs = [
  [
    'https://rozborka.pp.ua/image/oleg/1.mp4',
    'https://rozborka.pp.ua/image/oleg/2.mp4',
  ],
  [
    'https://rozborka.pp.ua/image/oleg/3.mp4',
    'https://rozborka.pp.ua/image/oleg/4.mp4',
  ],
  [
    'https://rozborka.pp.ua/image/oleg/5.mp4',
    'https://rozborka.pp.ua/image/oleg/6.mp4',
  ],
  [
    'https://rozborka.pp.ua/image/oleg/7.mp4',
    'https://rozborka.pp.ua/image/oleg/8.mp4',
  ],
];

export default function VideoGallery() {
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoPairs.length).fill(false)
  );
  const [isLoading, setIsLoading] = useState<boolean[]>(
    Array(videoPairs.length).fill(true)
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[][]>(
    videoPairs.map(() => [null, null]) as (HTMLVideoElement | null)[][]
  );

  const handleCanPlay = (index: number) => {
    setIsLoading(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const togglePlayPause = (index: number) => {
    if (isLoading[index]) return;

    setIsPlaying(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];

      videoRefs.current[index].forEach(video => {
        if (video) {
          if (updated[index]) {
            video.play();
          } else {
            video.pause();
          }
        }
      });

      return updated;
    });
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
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
          slidesPerView={1.2}
          className={styles.gallery_slider}
          modules={[Navigation, Pagination]}
          loop={true}
        >
          {videoPairs.map((pair, index) => (
            <SwiperSlide
              key={index}
              className={styles.gallery_item}
              onClick={() => togglePlayPause(index)}
            >
              <div className={styles.video_pair}>
                {pair.map((video, i) => (
                  <div key={i} className={styles.video_wrapper}>
                    <video
                      ref={el => {
                        videoRefs.current[index][i] = el;
                      }}
                      src={video}
                      className={styles.slider_video}
                      muted
                      loop
                      onCanPlay={() => handleCanPlay(index)}
                    />
                  </div>
                ))}
              </div>
              {isLoading[index] ? (
                <div className={styles.loader}>
                  <Icon name="icon-load" width={35} height={35} />
                </div>
              ) : (
                <button
                  className={styles.play_pause_button}
                  disabled={isLoading[index]}
                >
                  {isPlaying[index] ? (
                    <Icon name="icon-pause" width={35} height={35} />
                  ) : (
                    <Icon name="icon-play" width={35} height={35} />
                  )}
                </button>
              )}
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
      </div>
    </div>
  );
}
