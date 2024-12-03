import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

import { Jura, Sofia_Sans_Extra_Condensed } from 'next/font/google';

// Google fonts
const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jura',
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sofia',
});

// Local fonts
const PFBaselinePro = localFont({
  src: [
    {
      path: '../fonts/PFBaselinePro-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/PFBaselinePro-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PFBaselinePro-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pro',
});
export const metadata: Metadata = {
  title: 'Видалення Вм’ятин без Фарбування у Червонограді | Dent Center Chg',
  description:
    'Видалення вм’ятин без фарбування у Червонограді; Технологія PDR; Швидко та якісно; Витягування вмятин від граду, ДТП і т.п. без покраски,без шпаклівки та фарбування',
  keywords: [
    'видалення вм’ятин',
    'без фарбування',
    'Червоноград',
    'Dent Center Chg',
    'ремонт вм’ятин',
    'вирівнювання вм’ятин',
    'видалення граду',
    'витягування вмятин Червоноград',
    'авто без фарбування',
    'технологія PDR',
  ],
  icons: {
    icon: [
      { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
      { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/assets/site.webmanifest',
  openGraph: {
    title: 'Видалення Вм’ятин без Фарбування PDR',
    description:
      'Якісне видалення вм’ятин без фарбування у Червонограді. Відновлення авто після граду та ДТП швидко і без покраски.',
    url: `https://dent-center.com.ua/`,
    type: 'website',
    images: [
      {
        url: '/assets/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Dent Center Червоноград',
      },
    ],
  },
  alternates: {
    canonical: `https://dent-center.com.ua/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${jura.variable} ${sofiaSansExtraCondensed.variable} ${PFBaselinePro.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
