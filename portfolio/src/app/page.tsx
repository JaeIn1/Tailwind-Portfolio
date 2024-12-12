import Image from "next/image";
import { RiHtml5Fill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Link from "next/link";
import Projects from "./components/projects/page";

export default function Home() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <section
        id="home"
        className="flex flex-col md:flex-row justify-between items-center mb-12"
      >
        <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
          <Image
            className="w-56 h-56 rounded-full border-2 object-cover"
            src="/profile.jpg"
            width={100}
            height={100}
            alt="avatar"
          />
        </div>
        <div className="text-center md:text-right ">
          <h1 className="text-4xl font-bold mb-2 dark:text-white">이재인</h1>
          <p className="text-xl mb-4 dark:text-white">고객을 위한 개발자</p>
          <p className="text-gray-600 dark:text-gray-400">
            사용자가 믿을 수 있는 서비스를 개발하고 싶은 신입 개발자입니다.
            <br />
            확장 가능한 웹 애플리케이션 구축에 전문성을 갖추고 있으며, 최신
            JavaScript 프레임워크와 클라우드 기술에 대한 전문 지식을 보유하고
            있습니다. 항상 새로운 도전과 학습을 즐깁니v다.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              👨‍🎓 교육 및 활동
            </h3>
            <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
              <li>👉 2024 알고리즘 스터디 ~</li>
              <li>👉 2024 신한투자증권 프로디지털아카데미 수료</li>
              <li>👉 2022 대학 동아리(MOUSE) 웹 개발 활동</li>
            </ul>
          </article>
          <article className="bg-gray-100 dark:bg-gray-700 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              🧑‍💻 자격증
            </h3>
            <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
              <li>👉 2024 SQLD</li>
              <li>👉 2023 정보처리기사</li>
              <li>👉 2021 한글파워포인트 A등급</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className="mb-16 dark:text-white">
        <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
        <Projects />
      </section>
    </main>
  );
}
