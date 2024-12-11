import hero from "@/app/assets/hero.png";
import TypingAnimation from "@/components/ui/typing-animation";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div className="lg:min-h-screen px-5 lg:px-20 " id="about">
      <h1 className="text-center mt-20 lg:mt-0 font-arimo font-bold my-2 text-5xl">
        About Me
      </h1>
      <TypingAnimation
        className="font-playrite text-sm mt-3 lg:mt-0"
        text="Building user-friendly interfaces with passion, creativity, and clean code."
      />
      <div className="flex items-center justify-between ">
        <div className="">
          <p className="lg:w-2/3 font-serif ">
            I am a passionate Full Stack Developer, recently graduated in
            Informatics/Computer Science from Bangladesh University of Business
            and Technology. Feel free to explore my portfolio to see the diverse
            projects I&apos;ve completed. If you&apos;re interested in my work
            and would like me to bring your project to life, don&apos;t hesitate
            to reach out to me!
          </p>
          <div className="flex gap-3 items-center mt-3">
            <button className="group   relative  inline-flex h-9 items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6 font-bold dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]">
              Resume
            </button>
            <Link
              href="https://github.com/vatiza"
              target="_blank"
              className="group font-bold  relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6  dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]"
            >
              Github <Github className="flex ms-1" size={16} />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-80 lg:h-80">
          <Image height={300} width={300} src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
