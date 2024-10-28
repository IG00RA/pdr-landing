'use client';

import { useState, useRef } from 'react';
import styles from './VideoGallery.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import video1 from '/src/videos/1.mp4';
import video2 from '/src/videos/2.mp4';
import video3 from '/src/videos/3.mp4';
import video4 from '/src/videos/4.mp4';
import video5 from '/src/videos/5.MOV';
import video6 from '/src/videos/6.MOV';
import video7 from '/src/videos/7.MOV';
import video8 from '/src/videos/8.MOV';
import Icon from '@/helpers/Icon';

const videoPairs = [
  [video1, video2],
  [video3, video4],
  [video5, video6],
  [video7, video8],
];

export default function VideoGallery() {
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoPairs.length).fill(false)
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[][]>(
    videoPairs.map(() => [null, null]) as (HTMLVideoElement | null)[][]
  );

  const togglePlayPause = (index: number) => {
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
                    />
                  </div>
                ))}
              </div>
              <button className={styles.play_pause_button}>
                {isPlaying[index] ? (
                  <Icon name="icon-pause" width={35} height={35} />
                ) : (
                  <Icon name="icon-play" width={35} height={35} />
                )}
              </button>
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
