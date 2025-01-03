"use client";
import React, {useState, useRef} from "react";
import HeaderTitle from "@/components/header/HeaderTitle";
import Navigation from "@/components/header/Navigation";
import Button from "@/components/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const mobileNav = mobileNavRef.current;

    if (!mobileNav) return;

    if (isMenuOpen) {
      // 닫기 애니메이션 (slideUp)
      mobileNav.style.maxHeight = "100vh";
      requestAnimationFrame(() => {
        mobileNav.style.display = "none";
        mobileNav.style.maxHeight = "0";
      });
    } else {
      // 열기 애니메이션 (slideDown)
      mobileNav.style.maxHeight = "0";
      requestAnimationFrame(() => {
        mobileNav.style.display = "block";
        mobileNav.style.maxHeight = "100vh";
      });

    }

    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    const mobileNav = mobileNavRef.current;
    if (mobileNav) {
      mobileNav.style.display = "none";
    }
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header_wrapper">
        <HeaderTitle/>
        <div className="gnb_bar">
          <Navigation/>
          <Button
            className="orange"
            label="이력서 바로가기"
            onClick={() =>
              window.open("http://kirakira4149.dothome.co.kr/resume_minjung.pdf",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>

        {/*모바일*/}
        <div className={`mobile_menu ${isMenuOpen ? "on" : ""}`} onClick={toggleMenu}>
          <a href="#" className={`menu effect ${isMenuOpen ? "on" : ""}`}>
            <span></span>
          </a>
        </div>

        {/*모바일 메뉴*/}
        <div
          ref={mobileNavRef}
          className={`mobile_nav`}
        >
          <Navigation closeMenu={closeMenu}/>
          <div className="btn_area">
            <Button
              className="orange"
              label="이력서 바로가기"
              onClick={() =>
                window.open("http://kirakira4149.dothome.co.kr/resume_minjung.pdf", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
