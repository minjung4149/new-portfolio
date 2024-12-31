import React from 'react';

interface SkillCardProps {
  icons: { src: string; alt: string }[];
  skillName: string;
  descriptions: string[];
  isSpecial?: boolean;
  specialDesc?: string;
  specialIcon?: { src: string; alt: string };
}

const SkillCard: React.FC<SkillCardProps> = ({
                                               icons,
                                               skillName,
                                               descriptions,
                                               isSpecial = false,
                                               specialDesc,
                                               specialIcon,
                                             }) => (
  <li className={`card ${isSpecial ? 'me' : ''}`}>
    <div className="card_contents">
      {/* Front Side */}
      <div className="side">
        <div className={icons.length > 1 ? 'icon_wrap' : ''}>
          {icons.map((icon, index) => (
            <div className="icon" key={index}>
              <img src={icon.src} alt={icon.alt}/>
            </div>
          ))}
        </div>
        <p className="skill_name">{skillName}</p>
        <div className="skill_desc">
          {isSpecial && specialDesc ? (
            <p>{specialDesc}</p>
          ) : (
            descriptions.map((desc, index) => (
              <div key={index}>
                <span>&#183;</span>
                <p>{desc}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Back Side */}
      <div className="side back">
        <div className="a_center">
          <div className="center_icon">
            <div className={icons.length > 1 ? 'icon_wrap' : ''}>
              {isSpecial && specialIcon ? (
                <div className="icon">
                  <img src={specialIcon.src} alt={specialIcon.alt}/>
                </div>
              ) : (
                icons.map((icon, index) => (
                  <div className="icon" key={index}>
                    <img src={icon.src} alt={icon.alt}/>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default SkillCard;
