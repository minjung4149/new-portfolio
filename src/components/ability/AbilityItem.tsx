import React, {useRef, useState, useEffect} from "react";
import Image from "next/image";

interface AbilityItemProps {
  title: string;
  details: string;
  gradient: "left" | "right";
  isExpanded: boolean;
  onToggle: () => void;
}

const AbilityItem: React.FC<AbilityItemProps> = ({
                                                   title,
                                                   details,
                                                   gradient,
                                                   isExpanded,
                                                   onToggle,
                                                 }) => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  // 애니메이션 효과를 위해 높이 계산
  useEffect(() => {
    if (isExpanded) {
      setHeight(detailsRef.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <li className={isExpanded ? "on" : ""}>
      <div className="tt_line f_b_c" onClick={onToggle}>
        <p className="tt">{title}</p>
        <div className="arrow">
          <Image
            src={`/images/arrow_${isExpanded ? "up" : "down"}.svg`}
            alt="토글 버튼"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div
        ref={detailsRef}
        className="details"
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
        dangerouslySetInnerHTML={{
          __html: `<p>${details.replace(/\n/g, "<br/>")}</p>`,
        }}
      ></div>
      <span className={`gradient_line ${gradient}`}></span>
    </li>
  );
};

export default AbilityItem;
