import useDarkModeToggle from "@/app/hooks/darkmode";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMoon, FaBars } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

export default function Aside({
  setSide,
}: {
  setSide: Dispatch<SetStateAction<boolean>>;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkModeToggle();

  /* 애니메이션이 즉각적으로 생기는 문제를 해결
  좋지 않은 방법으로 해결한듯.. 추후 수정할 예정 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const onClickCloseBtn = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSide(false);
    }, 300);
  };

  return (
    <aside
      id="Aside"
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
        <Link href="#home" className="hover:text-blue-500 transition-colors">
          홈
        </Link>
        <Link href="#about" className="hover:text-blue-500 transition-colors">
          소개
        </Link>
        <Link href="#skills" className="hover:text-blue-500 transition-colors">
          기술
        </Link>
        <Link
          href="#projects"
          className="hover:text-blue-500 transition-colors"
        >
          프로젝트
        </Link>
        <Link href="#contact" className="hover:text-blue-500 transition-colors">
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
  );
}
