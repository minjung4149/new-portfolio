"use client";
// import React, {useEffect} from "react";
// import {initLottieAnimation} from "@/utils/lottieAnimation";

const BackToTopButton = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const backToTopButton = document.getElementById("back-to-top");
  //     if (!backToTopButton) return;
  //
  //     if (window.scrollY > 500) {
  //       backToTopButton.classList.add("visible");
  //     } else {
  //       backToTopButton.classList.remove("visible");
  //     }
  //   };
  //
  //   const handleClick = (e: MouseEvent) => {
  //     e.preventDefault();
  //     window.scrollTo({top: 0, behavior: "smooth"});
  //   };
  //
  //   initLottieAnimation("lottie-pop");
  //
  //   window.addEventListener("scroll", handleScroll);
  //
  //   const backToTopButton = document.getElementById("back-to-top");
  //   backToTopButton?.addEventListener("click", handleClick);
  //
  //   // 컴포넌트 언마운트 시 이벤트 핸들러를 제거하여 메모리 누수를 방지
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     backToTopButton?.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <div id="back-to-top" className="back-to-top">
      <div id="lottie-pop"></div>
    </div>
  );
};

export default BackToTopButton;
