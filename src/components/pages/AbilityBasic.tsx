import React from 'react';
import Category from "@/components/Category";

const AbilityBasic = () => {
  return (
    <section id="ability_basic">
      <Category title="업무수행역량"/>
      <div className="ability_basic_wrapper">
        <div className="container">
          <ul>
            <li className="on">
              <div className="tt_line f_b_c">
                <p className="tt">문제해결능력</p>
                <div className="arrow">
                  <img src="/images/arrow_up.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  문제가 발생한 경우, 먼저 검색을 통해 스스로 문제를 해결하려 합니다. <br/>
                  검색 후에도 해결이 되지 않거나 프로젝트 시간 상의 여유 없는 경우,
                  시간을 지체할 수 없기 때문에
                  상사에게 문제를 보고 후 도움을 받는 방법으로 문제를 유연하게 해결합니다.
                </p>
              </div>
              <span className="gradient_line left"></span>
            </li>
            <li>
              <div className="tt_line f_b_c">
                <p className="tt">일정관리능력</p>
                <div className="arrow">
                  <img src="/images/arrow_down.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  개발 진행과정에서 작업의 중요도, 협업 우선도, 작업의 이슈 발생 가능성 등 여러 요소들을 파악하여 우선순위를 선정해 스케줄을 작성합니다.<br/>
                  스케줄을 맞추지 못해 자신의 팀, 더 나아가 타 팀에게 피해를 주지 않으려 작성한 스케줄에 맞춰 오차 없이 작업을 완료하려고 합니다.
                </p>
              </div>
              <span className="gradient_line right"></span>
            </li>
            <li>
              <div className="tt_line f_b_c">
                <p className="tt">커뮤니케이션능력</p>
                <div className="arrow">
                  <img src="/images/arrow_down.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  상대방이 알기 쉽도록 관련 문서, 이미지와 함께 전달하며 구두로 한 번 더 요청을 함으로써 전달 누락이 발생하지 않도록 합니다. <br/>
                  상대방에게 의견 및 업무 요청할 때는 말하고 싶은 요점을 먼저 말함으로써 명확하게 의사를 전달합니다.

                </p>
              </div>
              <span className="gradient_line left"></span>
            </li>
            <li>
              <div className="tt_line f_b_c">
                <p className="tt">근태사항</p>
                <div className="arrow">
                  <img src="/images/arrow_down.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  회사 생활을 하며 지각, 무단결근을 단 한 번도 한 적이 없습니다. <br/>
                  규칙적인 운동을 통해 체력 및 컨디션을 잘 조절하여 업무에 좋은 결과를 낼 수 있도록 항상 노력합니다.
                </p>
              </div>
              <span className="gradient_line right"></span>
            </li>
            <li>
              <div className="tt_line f_b_c">
                <p className="tt">협업심</p>
                <div className="arrow">
                  <img src="/images/arrow_down.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  퍼블리싱을 하며 느낀 기획이나 디자인 문제에 대해 타팀과 의견을 공유하며 프로젝트 개선에 기여하려 합니다. <br/>
                  또한 상대가 모르는 것이 생기면 경계와 배척 없이 적극적으로 알려주며 업무 내용을 공유합니다.
                </p>
              </div>
              <span className="gradient_line left"></span>
            </li>
            <li>
              <div className="tt_line f_b_c">
                <p className="tt">책임감</p>
                <div className="arrow">
                  <img src="/images/arrow_down.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  기본에 충실하고 퀄리티 있는 코드를 짜기 위해 많은 고민을 합니다. <br/>
                  때문에 나의 작업물에 자신감과 책임감이 있습니다. <br/>
                  퀄리티 있는 결과물이 자사의 사업, 클라이언트의 사업에 좋은 결과로 이어졌으면 합니다.

                </p>
              </div>
              <span className="gradient_line right"></span>
            </li>
            <li>
              <div className="tt_line f_b_c">
                <p className="tt">자기계발</p>
                <div className="arrow">
                  <img src="/images/arrow_down.svg" alt="토글 버튼"/>
                </div>
              </div>
              <div className="details">
                <p>
                  온라인 강의를 통해 자바스크립트, 프레임워크 강의를 들으며 프론트앤드 개발 과정을 조금씩 배워가고 있으며<br/>
                  정보처리기사 자격증에 도전 중입니다.
                </p>
              </div>
              <span className="gradient_line left"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AbilityBasic;
