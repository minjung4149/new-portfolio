import Header from "@/components/header/Header";
import Category from "@/components/Category";
import BackToTopButton from "@/components/BackToTopButton";
import About from "@/components/section/About";
import AbilityPoint from "@/components/section/AbilityPoint";
import Skill from "@/components/section/Skill";
import AbilityBasic from "@/components/section/AbilityBasic";
import Contact from "@/components/section/Contact";
import Project from "@/components/section/Project";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <About/>
        <AbilityPoint/>
        <Skill/>
        <Project/>
        <AbilityBasic/>
        <Contact/>
        <BackToTopButton/>
      </main>
    </>
  );
}
