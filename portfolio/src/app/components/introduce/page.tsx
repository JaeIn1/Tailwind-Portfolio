import Image from "next/image";

export default function Introduce() {
  return (
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
  );
}
