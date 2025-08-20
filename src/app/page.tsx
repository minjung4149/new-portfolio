import Header from "@/components/header/Header";
import AboutSection from "@/components/about/AboutSection";
import AbilityPointSection from "@/components/abilityPoint/AbilityPointSection";
import SkillSection from "@/components/skill/SkillSection";
import AbilityBasicSection from "@/components/ability/AbilityBasicSection";
import ContactSection from "@/components/contact/ContactSection";
import ProjectSection from "@/components/project/ProjectSection";
import ClientOnlyBackToTop from "@/components/ClientOnlyBackToTop";

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
        <ClientOnlyBackToTop/>
      </main>
    </>
  );
}
