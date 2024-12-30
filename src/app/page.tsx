import Header from "@/components/header/Header";
import Category from "@/components/Category";
import BackToTopButton from "@/components/BackToTopButton";
import About from "@/components/pages/About";
import AbilityPoint from "@/components/pages/AbilityPoint";
import Skill from "@/components/pages/Skill";
import AbilityBasic from "@/components/pages/AbilityBasic";
import Contact from "@/components/pages/Contact";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <About/>
        <AbilityPoint/>
        <Skill/>
        <section className="preview" id="project">
          <Category title="Project"/>
          <div className="work_wrapper common">
            <div className="div split">
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/solution01.png" alt="자사 솔루션"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="http://kirakira4149.dothome.co.kr/demo/dashboard_main.html" className="txt" target="_blank"
                     rel="noopener noreferrer">
                    <div className="tt_line f_b_c">
                      <h3>자사 솔루션A</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="자사 솔루션"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 100% <br/>
                      REST API 및 DB Table을 자동으로 만들어주는 솔루션 페이지입니다. <br/>
                      라이브러리를 활용하여 selectbox에 style을 주었고, Jquery를 사용하여 클릭 이벤트 처리를 하였습니다.
                    </p>
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/solution02.png" alt="자사 솔루션"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="https://space.indavit.com" className="txt" target="_blank" rel="noopener noreferrer">
                    <div className="tt_line f_b_c">
                      <h3>자사 솔루션B</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="자사 솔루션"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 80% <br/>
                      마케팅 시각화 보고서를 자동으로 만들어주는 솔루션 페이지입니다. <br/>
                      React 환경에서 퍼블리싱을 하여 프로젝트의 작업 시간을 줄였으며,
                      SCSS를 사용하여 STYLE 유지 보수가 용이하게 하였습니다.
                    </p>
                  </a>
                </div>
              </div>
            </div>


            <div className="div split">
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/solution01_h.png" alt="자사 솔루션 홈페이지"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="http://kirakira4149.dothome.co.kr/homepage/index.php" className="txt" target="_blank"
                     rel="noopener noreferrer">
                    <div className="tt_line f_b_c">
                      <h3>자사 솔루션A 홈페이지</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="자사 솔루션 홈페이지"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 100% <br/>
                      CSS 애니메이션, slick slider 라이브러리를 이용한 반응형 자사 솔루션 소개 페이지입니다. <br/>
                      CSS 애니메이션을 사용한 작은 요소의 디테일한 움직임들이 특징입니다.
                    </p>
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/solution02_h.png" alt="자사 소루션 홈페이지"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="https://indavit.com/" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>자사 솔루션B 홈페이지</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="자사 소루션 홈페이지"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 90% <br/>
                      React Framework를 이용한 반응형 자사 솔루션 소개 페이지입니다. <br/>
                      useState hook ,classNames 라이브러리를 사용하여 탭 처리를 구현하였습니다.
                    </p>
                  </a>
                </div>
              </div>
            </div>


            <div className="div split">
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/report.png" alt="chart 리포트"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="http://kirakira4149.dothome.co.kr/report/data_report.html" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>Chart-리포트</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="chart 리포트"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 100% <br/>
                      데이터를 시각화한 리포트 형식의 페이지입니다.<br/>
                      chart.js를 이용하여 Bar, Donut 차트 구현, 모바일에서도 볼 수 있도록 반응형으로 제작하였습니다.
                    </p>
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/reservation.png" alt="회의실 예약 시스템"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="http://kirakira4149.dothome.co.kr/cau/index.html" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>회의실 예약 시스템</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="회의실 예약 시스템"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 100% <br/>
                      회의실 예약 시스템 UX/UI 화면을 모던으로 제작한 페이지입니다. <br/>
                      JqueryUI datepicker로 캘린더를 불러와 커스터마이징하였습니다.
                    </p>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="preview" id="portfolio">
          {/*<div className="category_bar">*/}
          {/*    <div className="container">*/}
          {/*      <h2>Portfolio</h2>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          <div className="portfolio_wrapper common">
            <div className="div split">
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/map.png" alt="map"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="http://kirakira4149.dothome.co.kr/map-population/home.html" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>map-지도 API</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="project 보기, 클릭시 새창열림"/>
                      </div>
                    </div>
                    <p className="desc">
                      퍼블리싱 작업 기여도 100% <br/>
                      네이버 지도 API를 사용하여 지도를 노출시키고 데이터를 활용하여 시각화 처리를 합니다.<br/>
                      마커에 디자인을 입히고, 클릭 이벤트를 통해 모달이 나오도록 합니다.
                    </p>
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/project/list.png" alt="게시판"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="#" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>게시판&#40;준비 중&#41;</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="project 보기, 클릭시 새창열림"/>
                      </div>
                    </div>
                    <p className="desc">
                      React Framework<br/>
                      React Dynamic Routing + REST Api를 사용하여 게시판을 구현하였습니다.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="div project">
              <div className="img_wrap">
                <img src="/images/project/chart.png" alt="chart"/>
              </div>
              <div className="project_desc">
                <div className="gradient_bg"></div>
                <a href="http://kirakira4149.dothome.co.kr/chart/index.html" className="txt" target="_blank">
                  <div className="tt_line f_b_c">
                    <h3>chart 모음</h3>
                    <div className="onclick_icon">
                      <img src="/images/onclick.svg" alt="project 보기, 클릭시 새창열림"/>
                    </div>
                  </div>
                  <p className="desc">
                    퍼블리싱 작업 기여도 100% <br/>
                    Chart.js, D3.js, ApexCharts.js 등 라이브러리를 사용하여 차트를 구현합니다. <br/>
                    옵션 값을 수정하여 Chart의 디자인을 원하는 대로 변경합니다.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <AbilityBasic/>
        <Contact/>

        <BackToTopButton/>
      </main>
    </>
  );
}
