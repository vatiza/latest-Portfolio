import hero from "@/app/assets/hero.png";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div className="lg:min-h-screen px-5 lg:px-20 " id="about">
      <h1 className="text-center mt-20 lg:mt-0 font-arimo font-bold my-2 text-5xl">
        About Me
      </h1>
      <div className="flex items-center justify-between ">
        <div className="">
          <p className="lg:w-2/3 font-serif ">
            I am a passionate Front-end developer currently in my third year of
            studying Informatics/Computer Science at Bangladesh University of
            Buisness and Technohology. Feel free to explore my portfolio to see
            the diverse projects I&apos;ve completed. If you&apos;re interested
            in my work and would like me to bring your project to life,
            don&apos;t hesitate to reach out to me!
          </p>
          <button className="group  mt-4 relative  inline-flex h-9 items-center justify-center overflow-hidden rounded-md   bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]">
            Resume
          </button>
        </div>
        <div className="hidden lg:block lg:w-80 lg:h-80">
          <Image height={300} width={300} src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
