'use client';
import React, {useEffect} from "react";
import Category from "@/components/Category";
import AbilityItem from "@/components/abilityPoint/AbilityItem";

const abilities = [
  {
    imageSrc: '/images/ability_communication.png',
    altText: '커뮤니케이션 능력',
    description: '협업 과정에서 빛을 발휘할 <br/>커뮤니케이션 능력',
  },
  {
    imageSrc: '/images/ability_graphic.png',
    altText: '디자인 협업과 구현 능력',
    description: 'Figma를 활용한 디자인 협업 및 <br/>디자인 시스템 기반의 UI 구현 능력',
  },
  {
    imageSrc: '/images/ability_coding.png',
    altText: '프론트엔드 개발 능력',
    description: 'React, TypeScript, SCSS를 활용한 <br/>프론트엔드 개발 능력',
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
