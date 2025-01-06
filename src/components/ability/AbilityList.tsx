'use client';
import React, {useEffect, useState} from "react";
import AbilityItem from "./AbilityItem";

interface Ability {
  title: string;
  details: string;
  gradient: "left" | "right";
  isExpanded: boolean;
}

const AbilityList: React.FC = () => {
  const [abilities, setAbilities] = useState<Ability[]>([]);

  // JSON 데이터를 가져오는 함수
  const fetchAbilityData = async () => {
    try {
      const response = await fetch("/data/ability.json");
      if (!response.ok) {
        throw new Error("데이터를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      setAbilities(data);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchAbilityData();
  }, []);

  // 아코디언 토글 함수
  const handleToggle = (index: number) => {
    // 이전 상태의 abilities 배열을 기반으로 새로운 상태를 생성
    setAbilities((prevAbilities) =>
      prevAbilities.map((ability, i) => ({
        ...ability, // 기존 ability의 나머지 속성은 유지
        isExpanded: i === index ? !ability.isExpanded : false,
        /**
         * - 클릭된 항목의 경우, 현재 상태를 반전시킴 (true -> false, false -> true).
         * - 클릭되지 않은 항목의 경우, isExpanded를 false로 설정하여 닫힘 상태 유지.
         */
      }))
    );
  };

  return (
    <ul>
      {abilities.map((item, index) => (
        <AbilityItem
          key={index}
          title={item.title}
          details={item.details.replace(/\n/g, "<br/>")}
          gradient={item.gradient}
          isExpanded={item.isExpanded}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
};

export default AbilityList;
