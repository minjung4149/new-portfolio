"use client";
import React from 'react';
import Button from "@/components/Button";

const ContactSection = () => {
  const buttons = [
    {
      className: "orange",
      label: "이력서 바로가기",
      url: "http://kirakira4149.dothome.co.kr/resume_minjung.pdf",
    },
    // {
    //   className: "white",
    //   label: "깃허브 바로가기",
    //   url: "https://github.com/minjung4149",
    // },
  ];

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
          {buttons.map((button, index) => (
            <Button
              key={index}
              className={button.className}
              label={button.label}
              onClick={() =>
                window.open(button.url, "_blank", "noopener,noreferrer")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
