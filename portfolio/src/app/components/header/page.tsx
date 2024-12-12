"use client";

import Link from "next/link";
import { FaMoon, FaBars } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";
import Aside from "../aside/page";
import useDarkModeToggle from "@/app/hooks/darkmode";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkModeToggle();
  const [side, setSide] = useState<boolean>(false);

  const toggleSide = () => {
    setSide((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg dark:text-white transition duration-300">
        <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">JAEIN</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              프론트엔드 개발자
            </p>
          </div>

          <div className="hidden md:flex items-center gap-x-6">
            <Link
              href="#home"
              className="hover:text-blue-500 transition-colors"
            >
              홈
            </Link>
            <Link
              href="#about"
              className="hover:text-blue-500 transition-colors"
            >
              소개
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-500 transition-colors"
            >
              기술
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              프로젝트
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              연락처
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 w-10 h-10 rounded-full flex justify-center items-center bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              {isDarkMode ? (
                <IoSunny className="text-2xl text-yellow-400" />
              ) : (
                <FaMoon className="text-2xl text-gray-500" />
              )}
            </button>
          </div>
          <button
            className="md:hidden p-2 text-gray-700 dark:text-white"
            onClick={toggleSide}
          >
            <FaBars className="text-2xl" />
          </button>
        </nav>
      </header>
      {side && <Aside setSide={setSide} />}
    </>
  );
}
