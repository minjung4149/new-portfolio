export default function Home() {
  return (
    <>
      <header>
        <div className="header_wrapper">
          <h2><a href="http://kirakira4149.dothome.co.kr/seo">Seo Min Jung</a></h2>
          <div className="gnb_bar">
            <nav>
              <ul>
                <li className="on">About</li>
                <li>Skill</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </nav>
            {/*<button className="orange" onClick="window.open('http://kirakira4149.dothome.co.kr/resume_minjung.pdf')">이력서*/}
            {/*  바로가기*/}
            {/*</button>*/}
          </div>

          <div className="mobile_menu">
            <a href="#" className="menu effect">
              <span></span>
            </a>
          </div>
          <div className="mobile_nav">
            <ul>
              <li className="on">
                <a href="#introduce">About</a>
              </li>
              <li><a href="#skill">skill</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
            <div className="btn_area">
              {/*<button className="orange"*/}
              {/*        onClick="window.open('http://kirakira4149.dothome.co.kr/resume_minjung.pdf')">이력서*/}
              {/*  바로가기*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="introduce">
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
                    where you live.” - Martin Golding</p>
                  <p className="strong">“항상 이런 생각으로 개발에 임하라. 내 코드를 유지 보수할 개발자는 싸이코패스일 거다. 그리고 아마 내가 어디 사는지 알고 싶어 하겠지.” -
                    Martin
                    Golding</p>
                </div>
                <span className="gradient_line left"></span>
              </div>
            </div>
          </div>
        </section>


        <section id="ability_point">
          <div className="category_bar">
            <div className="container">
              <h2>핵심역량</h2>
            </div>
          </div>
          <div className="container">
            <div className="contents">
              <ul>
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


        <section id="skill">
          <div className="container">
            <div className="skill_wrapper">
              <div className="skill_txt">
                <h2>
                  Skill <br/>
                  보유기술 &#47; <br/>
                  활용능력
                </h2>
                <p className="strong point">
                  HTML 태그를 알맞게 사용하여 콘텐츠를 의미 있는 태그로 구조화합니다.<br/>
                  각종 라이브러리를 유연하게 활용하여 완성도를 높이고,
                  협업 툴 활용으로 체계적이고 유연하게 프로젝트를 완성합니다.
                </p>
              </div>
              <ul className="card_wrpper">
                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/skill/icon_html.png" alt="HTML"/>
                      </div>
                      <p className="skill_name">HTML</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>웹 표준, 웹 접근성, 웹 호환성을 고려한 코딩</p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>
                            시맨틱 태그를 사용하여 콘텐츠를 의미 있는 태그로
                            구조화, 의미 있는 마크업
                          </p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>meta 태그를 이용한 오픈그래프 작성</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/skill/icon_html.png" alt="HTML"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>


                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon_wrap">
                        <div className="icon">
                          <img src="/images/skill/icon_css.png" alt="css"/>
                        </div>
                        <div className="icon">
                          <img src="/images/skill/icon_sass.png" alt="scss"/>
                        </div>
                      </div>
                      <p className="skill_name">CSS / SASS(SCSS)</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>애니메이션을 활용한 인터랙션 구현</p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>미디어쿼리를 사용한 적응형, 반응형 웹페이지 제작</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon_wrap">
                            <div className="icon">
                              <img src="/images/skill/icon_css.png" alt="css"/>
                            </div>
                            <div className="icon">
                              <img src="/images/skill/icon_sass.png" alt="scss"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>


                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/skill/icon_jquery.png" alt="jquery"/>
                      </div>
                      <p className="skill_name">Jquery</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>
                            click event, scroll event, slider, toggleClass, value
                            값 가져오기 등, 웹 퍼블리싱에 필요한 전반적인 jquery
                            활용
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/skill/icon_jquery.png" alt="jquery"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>

                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/skill/icon_js.png" alt="javascript"/>
                      </div>
                      <p className="skill_name">Javascript</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>
                            선택자, this, If문, for문 등 javascript에서 자주
                            쓰이는 기본적인 문법 활용
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/skill/icon_js.png" alt="javascript"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>

                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/skill/icon_react.png" alt="react"/>
                      </div>
                      <p className="skill_name">React</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>
                            컴포넌트 분리, Router, useState, useEffect, useRef
                            등의 기초적인 지식 보유 및 활용
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/skill/icon_react.png" alt="react"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>

                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon_wrap">
                        <div className="icon">
                          <img src="/images/skill/icon_photoshop.png" alt="photoshop"/>
                        </div>
                        <div className="icon">
                          <img src="/images/skill/icon_figma.png" alt="figma"/>
                        </div>
                      </div>
                      <p className="skill_name">Photoshop / Figma</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>편집 툴을 이용한 심플한 페이지 디자인</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon_wrap">
                            <div className="icon">
                              <img src="/images/skill/icon_photoshop.png" alt="photoshop"/>
                            </div>
                            <div className="icon">
                              <img src="/images/skill/icon_figma.png" alt="figma"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>

                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon_wrap">
                        <div className="icon">
                          <img src="/images/skill/icon_github.png" alt="github"/>
                        </div>
                        <div className="icon">
                          <img src="/images/skill/icon_jira.png" alt="jira"/>
                        </div>
                      </div>
                      <p className="skill_name">GitHub / Jira</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>형상관리 툴을 이용한 버전관리</p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>프로젝트 관리</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon_wrap">
                            <div className="icon">
                              <img src="/images/skill/icon_github.png" alt="github"/>
                            </div>
                            <div className="icon">
                              <img src="/images/skill/icon_jira.png" alt="jira"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>


                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/skill/icon_chartjs.png" alt="chart.js"/>
                      </div>
                      <p className="skill_name">Chart.js</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>커스터마이징 한 디자인으로 차트 구현</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/skill/icon_chartjs.png" alt="chart.js"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>


                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/skill/icon_navermap.png" alt="naver map"/>
                      </div>
                      <p className="skill_name">네이버 지도 API</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>행정구역 GeoJSON 데이터 레이어 표시</p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>열지도 시각화</p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>마커 커스터마이징</p>
                        </div>
                        <div>
                          <span>&#183;</span>
                          <p>클릭이벤트</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/skill/icon_navermap.png" alt="naver map"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>


                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon_wrap">
                        <div className="icon">
                          <img src="/images/skill/icon_s_black.png" alt="slick"/>
                        </div>
                        <div className="icon">
                          <img src="/images/skill/icon_s_black.png" alt="swiper"/>
                        </div>
                      </div>
                      <p className="skill_name">slick / swiper 라이브러리</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>커스터마이징 한 디자인으로 슬라이더 구현</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon_wrap">
                            <div className="icon">
                              <img src="/images/skill/icon_s_black.png" alt="slick"/>
                            </div>
                            <div className="icon">
                              <img src="/images/skill/icon_s_black.png" alt="swiper"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>


                <li className="card">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon_wrap">
                        <div className="icon">
                          <img src="/images/skill/icon_r_black.png" alt="robots"/>
                        </div>
                        <div className="icon">
                          <img src="/images/skill/icon_sitemap.png" alt="sitemap"/>
                        </div>
                      </div>
                      <p className="skill_name">Robots.txt / Sitemap.xml</p>
                      <div className="skill_desc">
                        <div>
                          <span>&#183;</span>
                          <p>Robots.txt,Sitemap.xml 제작 및 제출</p>
                        </div>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon_wrap">
                            <div className="icon">
                              <img src="/images/skill/icon_r_black.png" alt="robots"/>
                            </div>
                            <div className="icon">
                              <img src="/images/skill/icon_sitemap.png" alt="sitemap"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>

                <li className="card me">
                  <div className="card_contents">
                    <div className="side">
                      <div className="icon">
                        <img src="/images/my_emoji.png" alt="계속 공부 중인 서민정 퍼블리셔"/>
                      </div>
                      <p className="skill_name">
                        계속해서 늘려나갈 <br/>
                        예정입니다.
                      </p>
                      <div className="skill_desc">
                        <p>배움은 계속됩니다.</p>
                      </div>
                    </div>

                    <div className="side back">
                      <div className="a_center">
                        <div className="center_icon">
                          <div className="icon">
                            <img src="/images/my_emoji_back.png" alt="robots"/>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>

              </ul>
            </div>
          </div>
        </section>


        <section className="preview" id="work">
          <div className="category_bar">
            <div className="container">
              <h2>Work</h2>
            </div>
          </div>
          <div className="work_wrapper common">
            <div className="div split">
              <div className="project">
                <div className="img_wrap">
                  <img src="/images/work/solution01.png" alt="자사 솔루션"/>
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
                  <img src="/images/work/solution02.png" alt="자사 솔루션"/>
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
                  <img src="/images/work/solution01_h.png" alt="자사 솔루션 홈페이지"/>
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
              <div className=" project">
                <div className="img_wrap">
                  <img src="/images/work/solution02_h.png" alt="자사 소루션 홈페이지"/>
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
              <div className=" project">
                <div className="img_wrap">
                  <img src="/images/work/report.png" alt="chart 리포트"/>
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
              <div className=" project">
                <div className="img_wrap">
                  <img src="/images/work/reservation.png" alt="회의실 예약 시스템"/>
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
                  <img src="/images/work/map.png" alt="map"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="http://kirakira4149.dothome.co.kr/map-population/home.html" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>map-지도 API</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="work,portfolio 보기, 클릭시 새창열림"/>
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
                  <img src="/images/work/list.png" alt="게시판"/>
                </div>
                <div className="project_desc">
                  <div className="gradient_bg"></div>
                  <a href="#" className="txt" target="_blank">
                    <div className="tt_line f_b_c">
                      <h3>게시판&#40;준비 중&#41;</h3>
                      <div className="onclick_icon">
                        <img src="/images/onclick.svg" alt="work,portfolio 보기, 클릭시 새창열림"/>
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
                <img src="/images/work/chart.png" alt="chart"/>
              </div>
              <div className="project_desc">
                <div className="gradient_bg"></div>
                <a href="http://kirakira4149.dothome.co.kr/chart/index.html" className="txt" target="_blank">
                  <div className="tt_line f_b_c">
                    <h3>chart 모음</h3>
                    <div className="onclick_icon">
                      <img src="/images/onclick.svg" alt="work,portfolio 보기, 클릭시 새창열림"/>
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


        <section id="ability_basic">
          <div className="category_bar">
            <div className="container">
              <h2>역량</h2>
            </div>
          </div>
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


        <section id="contact">
          <div className="container">
            <div className="contact_img">
              <img src="/images/contact.png" alt="이력서 바로가기, 깃허브 바로가기"/>
            </div>
            <h3>
              thank you for <br/>
              watching :&#41;
            </h3>
            <div className="btn_area">
              {/*<button className="orange"*/}
              {/*        onClick="window.open('http://kirakira4149.dothome.co.kr/resume_minjung.pdf')">이력서*/}
              {/*  바로가기*/}
              {/*</button>*/}
              {/*<button className="white" onClick="window.open('https://github.com/minjung4149')">*/}
              {/*  깃허브 바로가기*/}
              {/*</button>*/}
            </div>
          </div>
        </section>

        <div id="back-to-top">
          <div id="lottie-pop"></div>
        </div>
      </main>
    </>
  );
}
