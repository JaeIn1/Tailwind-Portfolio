import Image from "next/image";
import Link from "next/link";
import data from "@/app/mocks/project.json";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {data.map((project) => (
        <article
          key={project.id}
          className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="relative w-full h-48">
            <Image
              className="object-cover"
              src={project.image}
              alt={project.title}
              layout="fill"
            />
          </div>
          <div className="p-6 dark:bg-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {project.title}
            </h3>
            <div className="space-x-2 mb-4">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-start space-x-2">
              <Link
                href={project.url}
                target="_blank"
                className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
              >
                GitHub
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
