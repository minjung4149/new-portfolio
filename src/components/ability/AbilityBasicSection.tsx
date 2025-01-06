import React from 'react';
import Category from "@/components/Category";
import AbilityList from "@/components/ability/AbilityList";

const AbilityBasicSection = () => {
  return (
    <section id="ability_basic">
      <Category title="업무수행역량"/>
      <div className="ability_basic_wrapper">
        <div className="container">
          <AbilityList/>
        </div>
      </div>
    </section>
  );
}

export default AbilityBasicSection;
