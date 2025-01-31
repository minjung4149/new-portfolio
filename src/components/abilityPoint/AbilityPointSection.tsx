'use client';
import React, { useEffect } from "react";
import Category from "@/components/Category";
import AbilityItem from "@/components/abilityPoint/AbilityItem";

const abilities = [
  {
    imageSrc: '/images/ability_communication.png',
    altText: '커뮤니케이션 능력',
    description: '협업 작업에서 빛을 발휘할 <br/>커뮤니케이션 능력',
  },
  {
    imageSrc: '/images/ability_graphic.png',
    altText: '그래픽소프트웨어 활용 능력',
    description: 'Photoshop, Figma <br/>그래픽소프트웨어 활용 능력',
  },
  {
    imageSrc: '/images/ability_coding.png',
    altText: '코딩 구현 능력',
    description: 'UI/UX를 바탕으로 한 <br/>코딩 구현 능력',
  },
];

const AbilityPointSection = () => {

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const abilityPointElement = document.getElementById("ability_point");
      const abilityPointOST = abilityPointElement?.offsetTop || 0;
      const abilityPointUl = abilityPointElement?.querySelector("ul");

      if (abilityPointOST - 700 < currentScroll && abilityPointUl) {
        abilityPointUl.classList.add("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="ability_point">
      <Category title="핵심역량"/>

      <div className="container">
        <div className="contents">
          <ul>
            {abilities.map((ability, index) => (
              <React.Fragment key={index}>
                <AbilityItem
                  imageSrc={ability.imageSrc}
                  altText={ability.altText}
                  description={ability.description}
                />
                {index < abilities.length - 1 && (
                  <li className="animation">
                    <div className="also">
                      <img src="/images/arrow.png" alt="능력 추가"/>
                    </div>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AbilityPointSection;
