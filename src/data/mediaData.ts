import firstImg from '/public/assets/img/gallery/1.webp';
import secondImg from '/public/assets/img/gallery/2.webp';
import thirdImg from '/public/assets/img/gallery/3.webp';
import fourthImg from '/public/assets/img/gallery/4.webp';
import fifthImg from '/public/assets/img/gallery/5.webp';
import sixthImg from '/public/assets/img/gallery/6.webp';
import seventhImg from '/public/assets/img/gallery/7.webp';
import eighthImg from '/public/assets/img/gallery/8.webp';
import nineImg from '/public/assets/img/gallery/9.webp';
import tenthImg from '/public/assets/img/gallery/10.webp';
import eleventhImg from '/public/assets/img/gallery/11.webp';
import twelfthImg from '/public/assets/img/gallery/12.webp';
import thirteenthImg from '/public/assets/img/gallery/13.webp';
import fourteenthImg from '/public/assets/img/gallery/14.webp';
import fifteenthImg from '/public/assets/img/gallery/15.webp';
import sixteenthImg from '/public/assets/img/gallery/16.webp';
import seventeenthImg from '/public/assets/img/gallery/17.webp';

import firstVideoImg from '/public/assets/img/gallery/1v.webp';
import secondVideoImg from '/public/assets/img/gallery/2v.webp';
import thirdVideoImg from '/public/assets/img/gallery/3v.webp';
import fourthVideoImg from '/public/assets/img/gallery/4v.webp';
import fifthVideoImg from '/public/assets/img/gallery/5v.webp';
import sixthVideoImg from '/public/assets/img/gallery/6v.webp';
import seventhVideoImg from '/public/assets/img/gallery/7v.webp';
import eighthVideoImg from '/public/assets/img/gallery/8v.webp';
import firstVideoImg1 from '/public/assets/img/gallery/1-1v.webp';
import secondVideoImg1 from '/public/assets/img/gallery/2-1v.webp';
import thirdVideoImg1 from '/public/assets/img/gallery/3-1v.webp';
import fourthVideoImg1 from '/public/assets/img/gallery/4-1v.webp';
import fifthVideoImg1 from '/public/assets/img/gallery/5-1v.webp';
import sixthVideoImg1 from '/public/assets/img/gallery/6-1v.webp';
import seventhVideoImg1 from '/public/assets/img/gallery/7-1v.webp';
import eighthVideoImg1 from '/public/assets/img/gallery/8-1v.webp';

export const galleryImages: string[] = [
  firstImg,
  secondImg,
  thirdImg,
  fourthImg,
  fifthImg,
  sixthImg,
  seventhImg,
  eighthImg,
  nineImg,
  tenthImg,
  eleventhImg,
  twelfthImg,
  thirteenthImg,
  fourteenthImg,
  fifteenthImg,
  sixteenthImg,
  seventeenthImg,
].map(image => image.src);

export const videoPairs: {
  video: [string, string];
  poster: [string, string];
}[] = [
  {
    video: [
      'https://rozborka.pp.ua/image/video/1.mp4',
      'https://rozborka.pp.ua/image/video/1-1.mp4',
    ],
    poster: [firstVideoImg.src, firstVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/2.mp4',
      'https://rozborka.pp.ua/image/video/2-1.mp4',
    ],
    poster: [secondVideoImg.src, secondVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/3.mp4',
      'https://rozborka.pp.ua/image/video/3-1.mp4',
    ],
    poster: [thirdVideoImg.src, thirdVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/4.mp4',
      'https://rozborka.pp.ua/image/video/4-1.mp4',
    ],
    poster: [fourthVideoImg.src, fourthVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/5.mp4',
      'https://rozborka.pp.ua/image/video/5-1.mp4',
    ],
    poster: [fifthVideoImg.src, fifthVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/6.mp4',
      'https://rozborka.pp.ua/image/video/6-1.mp4',
    ],
    poster: [sixthVideoImg.src, sixthVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/7.mp4',
      'https://rozborka.pp.ua/image/video/7-1.mp4',
    ],
    poster: [seventhVideoImg.src, seventhVideoImg1.src],
  },
  {
    video: [
      'https://rozborka.pp.ua/image/video/8.mp4',
      'https://rozborka.pp.ua/image/video/8-1.mp4',
    ],
    poster: [eighthVideoImg.src, eighthVideoImg1.src],
  },
];
