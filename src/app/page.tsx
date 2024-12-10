import AboutMe from "@/components/home/about-me/aboutMe";
import HeroSection from "@/components/home/hero-section/heroSection";
import Projects from "@/components/home/porjects/porjects";
import Skils from "@/components/home/skils/skils";
import WhatIDo from "@/components/home/what-i-do/whatIdo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <WhatIDo />
      <Skils />
      <Projects />
    </div>
  );
}
