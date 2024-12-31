import React from 'react';

const About = () => {
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
                단순히 디자인을 넘겨받아 퍼블리싱을 하는 것이 아닌 <br/>
                여러 가지 의견을 기획자, 디자이너, 개발자와 충분히 의논하고 협의하여 최선의 방향으로 마크업이 이루어지도록 합니다.
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
                “Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows
                where you live.” - Martin Golding
              </p>
              <p className="strong">“항상 이런 생각으로 개발에 임하라. 내 코드를 유지 보수할 개발자는 싸이코패스일 거다. 그리고 아마 내가 어디 사는지 알고 싶어 하겠지.” -
                Martin
                Golding</p>
            </div>
            <span className="gradient_line left"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
