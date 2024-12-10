import AboutMe from "@/components/home/about-me/aboutMe";
import Contact from "@/components/home/contact/contact";
import Footer from "@/components/home/footer/footer";
import HeroSection from "@/components/home/hero-section/heroSection";
import Projects from "@/components/home/porjects/porjects";
import Skills from "@/components/home/skills/skills";
import WhatIDo from "@/components/home/what-i-do/whatIdo";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <WhatIDo />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
