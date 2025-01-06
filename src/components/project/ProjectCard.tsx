import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  link: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({imageSrc, imageAlt, link, title, description}) => {
  return (
    <>
      <div className="img_wrap">
        <img src={imageSrc} alt={imageAlt}/>
      </div>
      <div className="project_desc">
        <div className="gradient_bg"></div>
        <a href={link} className="txt" target="_blank" rel="noopener noreferrer">
          <div className="tt_line f_b_c">
            <h3>{title}</h3>
            <div className="onclick_icon">
              <img src="/images/onclick.svg" alt={title}/>
            </div>
          </div>
          <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: description.replace(/\n/g, "<br/>"), // \n을 <br>로 변환
            }}
          ></p>
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
