import rafsan from "@/app/assets/porjectsImg/rafsantoursandtravel.png";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="lg:min-h-screen px-5 lg:px-20" id="projects">
      <h1 className="text-center text-5xl font-bold font-arimo mt-7">
        Projects
      </h1>
      <TypingAnimation
        className="font-playrite text-sm mt-3 lg:mt-0"
        text="Some Projects that i’ve done with a year experiences"
      />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative group mt-4 border border-black hover:border-blue-700 border-r-4 border-b-4 rounded-md lg:h-48 lg:w-80 overflow-hidden">
          <div className="overflow-hidden  h-56 lg:h-auto">
            <Image
              height={500}
              width={500}
              src={rafsan}
              alt="rafsan tours and travels"
              className="transform scale-100 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className=" text-white mb-5  font-bold  translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              Rafsan Tourist & Travel BD
            </h1>
            <Link
              href="https://rafsan-tourist-travels-bd.web.app/"
              target="_blank"
            >
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>

        {/* -----porjcet 2----- */}
        <div className="relative group mt-4 border border-black hover:border-blue-700 border-r-4 border-b-4 rounded-md lg:h-48 lg:w-80 overflow-hidden">
          <div className="overflow-hidden  h-56 lg:h-auto">
            <Image
              height={500}
              width={500}
              src={rafsan}
              alt="rafsan tours and travels"
              className="transform scale-100 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className=" text-white mb-5  font-bold  translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              Rafsan Tourist & Travel BD
            </h1>
            <Link
              href="https://rafsan-tourist-travels-bd.web.app/"
              target="_blank"
            >
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
