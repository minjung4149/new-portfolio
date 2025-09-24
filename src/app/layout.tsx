import '@/styles/style.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '서민정 | 포트폴리오',
  description: '5년 차 웹퍼블리셔 서민정의 포트폴리오 사이트입니다. 웹 표준과 최신 기술을 준수하며, 반응형 디자인을 통해 구현된 다양한 프로젝트를 만나보세요.',
  keywords: '웹퍼블리셔 포트폴리오, 웹 퍼블리싱, 웹 표준, 웹 접근성, HTML, CSS, JavaScript, React, 프론트엔드 개발, 반응형 웹 디자인, 크로스 브라우징, UI/UX 디자인',
  robots: 'noindex',
  openGraph: {
    title: '일 잘하는 웹퍼블리셔 서민정',
    description: '5년 차 웹퍼블리셔 서민정의 포트폴리오 사이트입니다. 웹 표준과 최신 기술을 준수하며, 반응형 디자인을 통해 구현된 다양한 프로젝트를 만나보세요.',
    url: 'http://kirakira4149.dothome.co.kr/seo',
    type: 'website',
    images: [
      {
        url: 'http://kirakira4149.dothome.co.kr/seo/opengraph_.jpg',
        alt: '서민정 포트폴리오',
      },
    ],
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}