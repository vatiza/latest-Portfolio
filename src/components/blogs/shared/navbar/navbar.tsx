"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const NavbarBlog = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navLink = (
    <>
      <li>
        <Link href="/blog">Home</Link>
      </li>
      <li>
        <Link href="/about">Blog</Link>
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

export default NavbarBlog;
