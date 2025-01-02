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
  const [abilities, setAbilities] = useState<Ability[]>([]); // JSON 데이터를 저장할 상태

  // JSON 데이터를 가져오는 함수
  const fetchAbilityData = async () => {
    try {
      const response = await fetch("/data/ability.json"); // public 폴더에서 JSON 파일 가져오기
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
    fetchAbilityData(); // 컴포넌트가 렌더링될 때 데이터 가져오기
  }, []);

  return (
    <ul>
      {abilities.map((item, index) => (
        <AbilityItem
          key={index}
          title={item.title}
          details={item.details.replace(/\n/g, "<br/>")}
          gradient={item.gradient}
          isExpanded={item.isExpanded}
        />
      ))}
    </ul>
  );
};

export default AbilityList;
