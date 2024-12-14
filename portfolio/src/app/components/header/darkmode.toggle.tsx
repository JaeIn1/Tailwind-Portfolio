"use client";

import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import useDarkModeToggle from "@/app/hooks/darkmode";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeToggle();

  return (
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
  );
}
