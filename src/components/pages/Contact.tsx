import React from 'react';

const Contact = () => {
  return (
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

          <button className="orange">이력서 바로가기</button>
          <button className="white">깃허브 바로가기</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
