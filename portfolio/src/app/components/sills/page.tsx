import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="mb-16 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">기술</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <RiHtml5Fill className="fa-brands fa-html5 text-4xl text-red-500 mb-1"></RiHtml5Fill>
          <h3 className="text-lg font-semibold">HTML5</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <IoLogoCss3 className="fa-brands fa-css3-alt text-4xl text-blue-500 mb-1"></IoLogoCss3>
          <h3 className="text-lg font-semibold">CSS3</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <IoLogoJavascript className="fa-brands fa-js text-4xl text-yellow-400 mb-1"></IoLogoJavascript>
          <h3 className="text-lg font-semibold">JavaScript</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <FaReact className="fa-brands fa-react text-4xl text-blue-400 mb-1"></FaReact>
          <h3 className="text-lg font-semibold">React</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <SiNextdotjs className="fa-brands fa-vuejs text-4xl text-black mb-1"></SiNextdotjs>
          <h3 className="text-lg font-semibold">Next.js</h3>
        </div>
        <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
          <FaNode className="fa-brands fa-node text-4xl text-green-500 mb-1"></FaNode>
          <h3 className="text-lg font-semibold">Node.js</h3>
        </div>
      </div>
    </section>
  );
}
