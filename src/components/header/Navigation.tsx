"use client";
import React, {useEffect, useState} from 'react';

interface NavigationProps {
  closeMenu?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({closeMenu}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ["About", "Skill", "Project", "Contact"];
  const sectionIds = ['about', 'skill', 'project', 'contact'];

  // 클릭 시 스크롤 이동
  const handleScroll = (id: string, index: number) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 76; // 헤더 높이 보정
      window.scrollTo({top, behavior: 'smooth'});
      setActiveIndex(index); // 클릭한 메뉴를 active 처리
      if (closeMenu) closeMenu();
    }
  };

  // Intersection Observer로 스크롤 감지
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index); // 스크롤로 해당 섹션 보이면 activeIndex 갱신
            }
          });
        },
        {
          root: null,
          threshold: 0.3,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "on" : ""}
            onClick={() => handleScroll(sectionIds[index], index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;