import React from "react";

interface AbilityItemProps {
  title: string;
  details: string;
  gradient: "left" | "right";
  isExpanded: boolean;
}

const AbilityItem: React.FC<AbilityItemProps> = ({
                                                   title,
                                                   details,
                                                   gradient,
                                                   isExpanded,
                                                 }) => {
  return (
    <li className={isExpanded ? "on" : ""}>
      <div className="tt_line f_b_c">
        <p className="tt">{title}</p>
        <div className="arrow">
          <img
            src={`/images/arrow_${isExpanded ? "up" : "down"}.svg`}
            alt="토글 버튼"
          />
        </div>
      </div>
      <div
        className="details"
        dangerouslySetInnerHTML={{
          __html: `<p>${details.replace(/\n/g, "<br/>")}</p>`, // p 태그를 포함시켜 스타일 적용 가능
        }}
      ></div>

      <span className={`gradient_line ${gradient}`}></span>
    </li>
  );
};

export default AbilityItem;
