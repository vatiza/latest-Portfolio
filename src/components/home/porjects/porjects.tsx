import TypingAnimation from "@/components/ui/typing-animation";
import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen px-5 lg:px-20" id="porjects">
      <h1 className="text-center text-5xl font-bold font-arimo mt-7">
        My Projects
      </h1>
      <TypingAnimation
        className="font-playrite text-sm"
        text="Some Projects that i’ve done with a year experiences"
      />
      <div className="border border-black hover:border-blue-700 border-r-4 border-b-4 rounded-md h-48 w-80 text-center p-11">
        <h1 className="text-3xl font-bold">view project Img</h1>
      </div>
    </div>
  );
};

export default Projects;
