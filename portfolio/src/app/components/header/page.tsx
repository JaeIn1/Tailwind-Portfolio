"use client";

import Link from "next/link";
import { FaMoon, FaBars } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import useDarkModeToggle from "@/app/hooks/darkmode";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkModeToggle();
  const [side, setSide] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const toggleSide = () => {
    setIsVisible((prev) => !prev);
    setSide((prev) => !prev);
  };

  const onClickCloseBtn = () => {
    setIsVisible((prev) => !prev);
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

      {side && (
        <aside
          className={`block md:hidden fixed right-0 inset-y-0 w-64 bg-white dark:text-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-20 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="p-2 m-4 text-gray-700 dark:text-white"
            onClick={onClickCloseBtn}
          >
            <IoClose className="text-2xl" />
          </button>
          <nav className="flex flex-col space-y-4 mt-10 px-6">
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
          </nav>
          <div className="flex justify-center">
            <button
              onClick={toggleDarkMode}
              className="my-10 p-2 w-10/12 h-10 rounded-full flex justify-center items-center bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            >
              {isDarkMode ? (
                <IoSunny className="text-2xl text-yellow-400" />
              ) : (
                <FaMoon className="text-2xl text-gray-500" />
              )}
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
