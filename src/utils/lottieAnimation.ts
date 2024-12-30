import bodymovin from "lottie-web";

export const initLottieAnimation = (containerId: string) => {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }

  // 로티 애니메이션 초기화
  bodymovin.loadAnimation({
    container, // 필수, 애니메이션을 렌더링할 DOM 요소
    renderer: "svg", // 필수
    loop: true, // 반복 재생
    autoplay: true, // 자동 재생
    // animationData: animationData, // 애니메이션 데이터 로드
  });
};
