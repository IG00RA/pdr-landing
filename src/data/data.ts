import firstImg from '../img/gallery/1.webp';
import secondImg from '../img/gallery/2.webp';
import thirdImg from '../img/gallery/3.webp';
import fourthImg from '../img/gallery/4.webp';
import fifthImg from '../img/gallery/5.webp';
import sixthImg from '../img/gallery/6.webp';
import seventhImg from '../img/gallery/7.webp';
import eighthImg from '../img/gallery/8.webp';
import nineImg from '../img/gallery/9.webp';
import tenthImg from '../img/gallery/11.webp';
import eleventhImg from '../img/gallery/12.webp';
import twelfthImg from '../img/gallery/13.webp';
import thirteenthImg from '../img/gallery/14.webp';

interface Feature {
  title: string;
  icon: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    title: 'ГАРАНТІЯ ЯКОСТІ',
    icon: 'icon-trace',
    description: `Ми хочемо, щоб ви були впевнені в якості нашої роботи, тому
                оплата здійснюється лише після проведення всіх робіт. Тільки так
                ви зможете переконатися, що все виконано належним чином`,
  },
  {
    title: 'ЯКІСТЬ РОБІТ',
    icon: 'icon-star',
    description: `Наша місія – індивідуальний підхід до кожного клієнта, наша мета
                – якісно виконана робота. Для нас важливим є результат і
                задоволений клієнт. Робота на швидкість – це не про нас!`,
  },
  {
    title: 'БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ',
    icon: 'icon-chat',
    description: `Виникли питання? Вам саме сюди! Дзвоніть, і наші фахівці з
                радістю підкажуть як повернути вашому автомобілю неперевершений
                зовнішній вигляд і блиск.`,
  },
];

export const servicesData: string[] = [
  "видалення вм'ятин на автомобільних деталях без потреби в повторному фарбуванні;",
  'ремонт дрібних пошкоджень елементів кузова, не вимагаючи додаткового фарбування;',
  'усунення деформацій елемента зі збереженням оригінального лакофарбового покриття;',
];

export const advantagesData: string[] = [
  'збереження оригінального лакофарбового покриття. Часто можна побачити автомобілі з різницею в кольорах окремих частин, через неправильний підбір фарби;',
  'оригінальне покриття автомобіля більш довговічне, оскільки заводське фарбування відбувається із дотриманням усіх технологічних вимог;',
  'процес фарбування займає значно більше часу, а через невелику кількість кваліфікованих майстрів, очікування може становити до кількох тижнів;',
  'рихтування без фарбування за допомогою PDR коштує менше, ніж повне відновлення та фарбування деталі. У важкодоступних місцях вартість може наближатися до ціни фарбування, але все одно буде вигіднішою;',
  'авто зберігає статус "нефарбоване", що позитивно впливає на його вартість і прискорює продаж у майбутньому.',
];

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
].map(image => image.src);
