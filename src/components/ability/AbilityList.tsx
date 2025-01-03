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
    setAbilities((prevAbilities) =>
      prevAbilities.map((ability, i) => ({
        ...ability,
        isExpanded: i === index ? !ability.isExpanded : false,
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
