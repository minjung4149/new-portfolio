import React from "react";
import HeadContent from "@/components/HeadContent";
// import 'react-toastify/dist/ReactToastify.css';
import '@/styles/style.scss';

export default function RootLayout({children}: { children: React.ReactNode }) {

  return (
    <html lang="ko">
    <head>
      <title>서민정 &#124; 포트폴리오</title>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="noindex"/>
      <meta name="keywords" content="portfolio,웹퍼블리셔,포트폴리오,웹퍼블리싱,웹표준,웹접근성,html,css,javascript,jquery"/>
      <meta name="description" content="5년 차 웹퍼블리셔 서민정 포트폴리오 사이트입니다."/>

      {/*Open Graph*/}
      <meta property="og:title" content="일 잘하는 웹퍼블리셔 서민정"/>
      <meta property="og:url" content="http://kirakira4149.dothome.co.kr/seo"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="http://kirakira4149.dothome.co.kr/seo/opengraph_.jpg"/>
      <meta property="og:title" content="일 잘하는 웹퍼블리셔 서민정"/>
      <meta property="og:description" content="4년차 웹퍼블리셔 포트폴리오 사이트입니다."/>
      <HeadContent/>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
