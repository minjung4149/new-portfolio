import Header from "@/components/header/Header";
import Category from "@/components/Category";
import BackToTopButton from "@/components/BackToTopButton";
import AboutSection from "@/components/about/AboutSection";
import AbilityPointSection from "@/components/abilityPoint/AbilityPointSection";
import SkillSection from "@/components/skill/SkillSection";
import AbilityBasicSection from "@/components/ability/AbilityBasicSection";
import ContactSection from "@/components/contact/ContactSection";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <AboutSection/>
        <AbilityPointSection/>
        <SkillSection/>
        <ProjectSection/>
        <AbilityBasicSection/>
        <ContactSection/>
        <BackToTopButton/>
      </main>
    </>
  );
}
