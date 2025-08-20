'use client';

import dynamic from 'next/dynamic';

// 클라이언트에서만 BackToTopButton 불러오기
const BackToTopButton = dynamic(() => import('@/components/BackToTopButton'), {
  ssr: false,
});

export default function ClientOnlyBackToTop() {
  return <BackToTopButton/>;
}
