import firstImg from '../img/gallery/1.webp';
import secondImg from '../img/gallery/2.webp';
import thirdImg from '../img/gallery/3.webp';
import fourthImg from '../img/gallery/4.webp';
import fifthImg from '../img/gallery/5.webp';
import sixthImg from '../img/gallery/6.webp';
import seventhImg from '../img/gallery/7.webp';
import eighthImg from '../img/gallery/8.webp';
import nineImg from '../img/gallery/9.webp';
import tenthImg from '../img/gallery/10.webp';
import eleventhImg from '../img/gallery/11.webp';
import twelfthImg from '../img/gallery/12.webp';
import thirteenthImg from '../img/gallery/13.webp';
import fourteenthImg from '../img/gallery/14.webp';
import fifteenthImg from '../img/gallery/15.webp';
import sixteenthImg from '../img/gallery/16.webp';
import seventeenthImg from '../img/gallery/17.webp';

import firstVideoImg from '../img/gallery/1v.webp';
import secondVideoImg from '../img/gallery/2v.webp';
import thirdVideoImg from '../img/gallery/3v.webp';
import fourthVideoImg from '../img/gallery/4v.webp';
import fifthVideoImg from '../img/gallery/5v.webp';
import sixthVideoImg from '../img/gallery/6v.webp';
import seventhVideoImg from '../img/gallery/7v.webp';
import eighthVideoImg from '../img/gallery/8v.webp';
import firstVideoImg1 from '../img/gallery/1-1v.webp';
import secondVideoImg1 from '../img/gallery/2-1v.webp';
import thirdVideoImg1 from '../img/gallery/3-1v.webp';
import fourthVideoImg1 from '../img/gallery/4-1v.webp';
import fifthVideoImg1 from '../img/gallery/5-1v.webp';
import sixthVideoImg1 from '../img/gallery/6-1v.webp';
import seventhVideoImg1 from '../img/gallery/7-1v.webp';
import eighthVideoImg1 from '../img/gallery/8-1v.webp';

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
