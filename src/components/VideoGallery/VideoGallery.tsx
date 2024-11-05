'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VideoGallery.module.css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Icon from '@/helpers/Icon';
import { videoPairs as originalVideoPairs } from '@/data/mediaData';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function VideoGallery() {
  const [videoPairs, setVideoPairs] = useState(originalVideoPairs);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(originalVideoPairs.length).fill(false)
  );
  const [isLoading, setIsLoading] = useState<boolean[]>(
    Array(originalVideoPairs.length).fill(false)
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[][]>(
    originalVideoPairs.map(() => [null, null]) as (HTMLVideoElement | null)[][]
  );

  const togglePlayPause = (index: number) => {
    if (isLoading[index]) return;

    setIsPlaying(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];

      videoRefs.current[index].forEach(video => {
        if (video) {
          if (updated[index]) {
            if (video.readyState === 0) {
              video.load();
            }
            video.play();
          } else {
            video.pause();
          }
        }
      });

      return updated;
    });
  };

  const handleCanPlay = (index: number) => {
    setIsLoading(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const pauseAllVideos = () => {
    setIsPlaying(Array(videoPairs.length).fill(false));
    videoRefs.current.forEach(videoPair => {
      videoPair.forEach(video => {
        if (video) video.pause();
      });
    });
  };

  useEffect(() => {
    setVideoPairs(shuffleArray(originalVideoPairs));
  }, []);

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
          onSlideChange={pauseAllVideos}
          breakpoints={{
            768: {
              spaceBetween: 20,
              slidesPerView: 1.2,
            },
            0: {
              spaceBetween: 10,
              slidesPerView: 0.8,
            },
          }}
        >
          {videoPairs.map((pair, index) => (
            <SwiperSlide
              key={index}
              className={styles.gallery_item}
              onClick={() => togglePlayPause(index)}
            >
              <div className={styles.video_pair}>
                {pair.video.map((video, i) => (
                  <div key={i} className={styles.video_wrapper}>
                    <video
                      ref={el => {
                        videoRefs.current[index][i] = el;
                      }}
                      src={video}
                      className={styles.slider_video}
                      muted
                      loop
                      preload="none"
                      poster={pair.poster[i]}
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
                  type="button"
                  className={styles.play_pause_button}
                  disabled={isLoading[index]}
                  aria-label={isPlaying[index] ? 'Pause video' : 'Play video'}
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
