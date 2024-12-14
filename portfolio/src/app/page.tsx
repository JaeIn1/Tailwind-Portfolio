import Projects from "./components/projects/page";
import { Metadata } from "next";
import Introduce from "./components/introduce/page";
import Education from "./components/education/page";
import Skills from "./components/sills/page";

export const metadata: Metadata = {
  title: "JAEIN PORTFOLIO",
  description: "Next.js , Tailwind로 작성된 포트폴리오입니다.",
  openGraph: {
    title: "JAEIN PORTFOLIO",
    description: "Next.js , Tailwind로 작성된 포트폴리오입니다.",
    images: ["/tailwind.png"],
  },
};

export default function Home() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <Introduce />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
