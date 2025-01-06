'use client';
import React, {useEffect, useState} from 'react';
import SkillCard from "@/components/skill/SkillCard";
import {fetchData} from '@/utils/api';

interface SkillProps {
  icons: { src: string; alt: string }[];
  skillName: string;
  descriptions: string[];
  isSpecial?: boolean;
  specialDesc?: string;
  specialIcon?: { src: string; alt: string };
}

const SkillSection: React.FC = () => {
  const [skills, setSkills] = useState<SkillProps[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchData<SkillProps[]>('/data/skills.json');
        setSkills(data);
      } catch (error) {
        console.error('Error loading skills:', error);
      }
    };

    loadSkills();
  }, []);

  return (
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
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icons={skill.icons}
                skillName={skill.skillName}
                descriptions={skill.descriptions}
                isSpecial={skill.isSpecial}
                specialDesc={skill.specialDesc}
                specialIcon={skill.specialIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
