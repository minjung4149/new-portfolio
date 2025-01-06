import React from 'react';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="main_wrapper">
        <div className="about_me">
          <div className="wrapper">
            <h1>
              안녕하세요.<br/>
              <strong className="gradient">웹퍼블리셔</strong><br/>
              <strong>서민정</strong> 입니다.
            </h1>
            <span className="gradient_line"></span>
            <div className="point">
              <p className="strong">
                단순히 전달받은 디자인을 구현하는 데 그치지 않고, <br/>
                여러 가지 의견을 기획자, 디자이너, 개발자와 충분히 의논하고 협의하여 사용자 만족도를 높이는 마크업을 구현합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="about_me_sub">
          <div className="wrapper">
            <div className="symbol"></div>
            <span className="gradient_line right"></span>
            <div className="point">
              <p className="strong">
                이 포트폴리오는 React와 TypeScript를 기반으로, Next.js와 SCSS를 활용해 개발되었습니다.
              </p>
              <p className="strong">프론트엔드 기술로 효율적이고 확장 가능한 웹을 설계하고 구현했습니다.
                <br/>다양한 프로젝트 경험을 담은 포트폴리오에서 저의 역량을 확인해보세요!
              </p>
            </div>
            <span className="gradient_line left"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
