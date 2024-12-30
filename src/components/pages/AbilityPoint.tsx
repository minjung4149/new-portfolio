import React from 'react';
import Category from "@/components/Category";

const AbilityPoint = () => {
  return (
    <section id="ability_point">
      <Category title="핵심역량"/>
      <div className="container">
        <div className="contents">
          <ul className="active">
            <li className="animation">
              <div className="icon">
                <img src="/images/ability_communication.png" alt="커뮤니케이션 능력"/>
              </div>
              <p className="desc">
                협업 작업에서 빛을 발휘할 <br/>
                커뮤니케이션 능력
              </p>
            </li>
            <li className="animation">
              <div className="also">
                <img src="/images/arrow.png" alt="능력 추가"/>
              </div>
            </li>
            <li className="animation">
              <div className="icon">
                <img src="/images/ability_graphic.png" alt="그래픽소프트웨어 활용 능력"/>
              </div>
              <p className="desc">
                Photoshop, Figma <br/>
                그래픽소프트웨어 활용 능력
              </p>
            </li>
            <li className="animation">
              <div className="also">
                <img src="/images/arrow.png" alt="능력 추가"/>
              </div>
            </li>
            <li className="animation">
              <div className="icon">
                <img src="/images/ability_coding.png" alt="코딩 구현 능력"/>
              </div>
              <p className="desc">
                UI&#47;UX를 바탕으로 한 <br/>
                코딩 구현 능력
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AbilityPoint;
