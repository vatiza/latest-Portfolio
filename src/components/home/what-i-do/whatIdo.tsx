import js from "@/app/assets/JS.png";
import react from "@/app/assets/react.png";
import TypingAnimation from "@/components/ui/typing-animation";
import Image from "next/image";
const WhatIDo = () => {
    return (
        <div className="relative">
          <Image
            priority
            src={react}
            className="w-44 absolute right-0"
            height={200}
            width={100}
            alt="reactjs"
          />
          <Image
            src={js}
            priority
            className="w-44 absolute bottom-11 left-0"
            alt="js"
            height={200}
            width={100}
          />
    
          <div className="min-h-screen px-5 lg:px-20">
            <h1 className="text-center text-5xl font-bold">What I Do</h1>
            <TypingAnimation
              className="font-playrite text-sm"
              text="as a fullstack"
            />
            <div className="flex justify-evenly  mt-5">
              <div className="border border-black hover:border-blue-700 border-r-4 border-b-4 rounded-md h-48 w-80 text-center p-11">
                <h1 className="text-3xl font-bold">Front-End Developer</h1>
                <p>Build Interactive UI with Next.JS</p>
              </div>
              <div className="border border-black hover:border-blue-700 border-r-4 border-b-4 rounded-md h-48 w-80 text-center p-16">
                <h1 className="text-3xl font-bold">REST API</h1>
              </div>
              <div className="border border-black hover:border-blue-700 border-r-4 border-b-4 rounded-md h-48 w-80 text-center p-11">
                <h1 className="text-3xl font-bold">Back-End Development</h1>
                <p>Dynamic App with Express.JS and SQL</p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default WhatIDo;