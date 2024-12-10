import hero from "@/app/assets/hero.png";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="min-h-screen px-5 lg:px-20 mt-8" id="hero">
      <div className="flex items-center">
        <div>
          <h1 className="text-8xl font-playrite font-bold">Hi</h1>

          <h1 className="mt-4 ms-14 text-5xl font-bold font-josefin">
            I am Rakib
          </h1>
          <GradualSpacing
            className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
            text="Full Stack Developer"
          />
          <p className="w-2/3 text-xl">
            focus in harnessing the power of Next.js with Express.js and REST
            API to craft dynamic web applications. creating seamless user
            experiences that bring ideas to life.
          </p>
          <button className="group mt-3 relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]">
            Contact me
          </button>
        </div>
        <div className="w-96 h-96">
          <Image priority src={hero} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
