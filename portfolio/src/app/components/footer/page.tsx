import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-700 py-6 dark:text-white transition duration-300">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <p> {`${year} 이재인. All rights reserved.`}</p>
        <div className="flex items-center justify-center gap-5 mt-5">
          <Link href="https://velog.io/@ysy06053/posts" target="_blank">
            <SiVelog className="text-3xl text-green-300 cursor-pointer" />
          </Link>
          <Link href="https://github.com/JaeIn1" target="_blank">
            <FaGithub className="text-3xl text-gray-700 dark:text-black cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
