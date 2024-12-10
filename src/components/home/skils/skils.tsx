import Image from "next/image";
import React from "react";

const Skils = () => {
  const skills = [
    {
      name: "React Js",
      logo: "https://img.icons8.com/nolan/64/react-native.png",
    },
    {
      name: "JavaScript",
      logo: "https://img.icons8.com/color/48/javascript--v1.png",
    },
    {
      name: "NextJs",
      logo: "https://img.icons8.com/nolan/64/nextjs.png",
    },
    {
      name: "Flutter",
      logo: "https://img.icons8.com/color/48/flutter.png",
    },
    {
      name: "Vue",
      logo: "https://img.icons8.com/color/48/vue-js.png",
    },
    {
      name: "TypeScript",
      logo: "https://img.icons8.com/color/48/typescript.png",
    },
    {
      name: "html",
      logo: "https://img.icons8.com/color/48/html-5--v1.png",
    },
    {
      name: "CSS",
      logo: "https://img.icons8.com/stickers/100/css3.png",
    },
    {
      name: "tailwindcss",
      logo: "https://img.icons8.com/color/48/tailwindcss.png",
    },
    {
      name: "bootstrap",
      logo: "https://img.icons8.com/color-glass/48/bootstrap.png",
    },

    {
      name: "NodeJs",
      logo: "https://img.icons8.com/fluency/48/node-js.png",
    },
    {
      name: "ExpressJs",
      logo: "https://img.icons8.com/nolan/64/express-js.png",
    },
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/nolan/64/mongo-db.png",
    },
    {
      name: "GitHub",
      logo: "https://img.icons8.com/nolan/64/github.png",
    },
    {
      name: "MySQL",
      logo: "https://img.icons8.com/color/48/mysql-logo.png",
    },
    {
      name: "Firebase",
      logo: "https://img.icons8.com/color/48/firebase.png",
    },
    {
      name: "Git",
      logo: "https://img.icons8.com/color/48/git.png",
    },

    {
      name: "Postman",
      logo: "https://img.icons8.com/dusk/64/postman-api.png",
    },
    {
      name: "ChartJs",
      logo: "https://www.chartjs.org/img/chartjs-logo.svg",
    },
    {
      name: "Java",
      logo: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
    },
    {
      name: "Dart",
      logo: "https://img.icons8.com/color/48/dart.png",
    },
    {
      name: "C",
      logo: "https://img.icons8.com/color/48/c-programming.png",
    },
    {
      name: "C++",
      logo: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png",
    },
  ];
  return (
    <div className="min-h-screen  px-5 lg:px-20">
      <h1 className="text-center text-5xl font-arimo font-bold">Skils</h1>
      <div className="flex flex-wrap gap-2 mt-5">
        {skills.map((skill, index) => (
          <div key={index} className="mx-auto">
            <div className="border-r-4 hover:border-blue-700 border-black border-b-4 border rounded-lg p-5 mt-3 max-w-32 max-h-32 min-w-32 min-h-32 flex items-center flex-col ">
              <Image height={50} width={50} src={skill.logo} alt={skill.name} />
              <h2 className="text-lg font-medium">{skill.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
