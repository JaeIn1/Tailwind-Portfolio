import { Project } from "@/app/types/project";
import { NextResponse } from "next/server";

export async function GET() {
  const projects: Project[] = [
    {
      id: 1,
      title: "검색어 기반 AI 종목 추천 서비스",
      skills: ["React", "Redux", "Express", "PostgreSQL"],
      image: "/cheatSOL.png",
      url: "https://github.com/CheatSOL",
    },
    {
      id: 2,
      title: "모임투자 서비스",
      skills: ["React", "Redux", "Spring boot", "MySQL"],
      image: "/amagyeton.png",
      url: "https://github.com/PDA-ARMAGYETDON",
    },
    {
      id: 3,
      title: "이커머스 플랫폼 서비스",
      skills: ["React", "Spring boot", "MySQL"],
      image: "/eggplant.jpg",
      url: "https://github.com/JaeIn1/frontend-portfolio",
    },
    {
      id: 4,
      title: "회의실 예약 서비스",
      skills: ["React", "Node.js", "Express", "PostgreSQL"],
      image: "/ourMeeting.png",
      url: "https://github.com/self-directed-project",
    },
  ];

  return NextResponse.json(projects);
}
