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
