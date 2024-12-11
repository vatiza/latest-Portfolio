"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navLink = (
    <>
      <li>
        <Link
          to="hero"
          smooth={true}
          offset={-300}
          duration={500}
          spy={true}
          activeClass="bg-blue-700 text-white rounded-md px-3 py-1"
          className="cursor-pointer px-3 py-1"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass="bg-blue-700 text-white rounded-md px-3 py-1"
          className="cursor-pointer px-3 py-1"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="service"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass="bg-blue-700 text-white rounded-md px-3 py-1"
          className="cursor-pointer px-3 py-1"
        >
          Service
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass="bg-blue-700 text-white rounded-md px-3 py-1"
          className="cursor-pointer px-3 py-1"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass="bg-blue-700 text-white rounded-md px-3 py-1"
          className="cursor-pointer px-3 py-1"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          offset={-100}
          duration={500}
          spy={true}
          activeClass="bg-blue-700 text-white rounded-md px-3 py-1"
          className="cursor-pointer px-3 py-1"
        >
          Contact
        </Link>
      </li>
    </>
  );

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky bg-[#F9F5F2] py-2 top-0 z-10">
      <div className="px-5 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src="https://i.postimg.cc/25ZSSSGg/logo.jpg"
                alt="rakib"
              />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-playrite font-bold">Rakibur Rahman</h1>
          </div>
          <div className="hidden lg:flex list-none gap-3 font-arimo text-xl cursor-pointer">
            {navLink}
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="hidden group cursor-pointer relative lg:inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381] bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 dark:[box-shadow:5px_5px_rgb(76_100_255)] [box-shadow:5px_5px_rgb(38_51_129)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(38_51_129)] dark:active:[box-shadow:0px_0px_rgb(76_100_255)]"
          >
            Contact me
          </Link>
          <div className="lg:hidden">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? (
                <XMarkIcon className="h-6" />
              ) : (
                <Bars3BottomRightIcon className="h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`fixed z-40 top-0 left-0 h-full w-3/4 bg-black bg-opacity-80 text-white overflow-hidden flex flex-col gap-12 origin-left duration-700 transform ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col list-none mt-10 gap-1 font-raleway tracking-wider">
            {navLink}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
