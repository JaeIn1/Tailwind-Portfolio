export default function Education() {
  return (
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
  );
}
