'use client';

import { FaAward } from "react-icons/fa";

export default function AchievementsPage() {
  const achievements = [
    {
      title: "160-Day of Code",
      description: "Completed a 160-day GeeksforGeeks Code.",
      proof: "https://drive.google.com/file/d/135Wk6Gr-YG9OROSR9XbQ6f-sGcRNMNZI/view",
      icon: "🏆"
    },
    {
      title: "Zoho Creator Training",
      description: "Finished Zoho Creator Low-Code Platform training for university students.",
      proof: "https://drive.google.com/file/d/1gK9EPVXutulcRMEjUzrbLshdjTt4C5Hi/view",
      icon: "🧑‍💻"
    },
    {
      title: "Workshop: Web Development at ZORPHIX’25",
      description: "Participated in a national-level workshop on Web Development at Chennai Institute of Technology (Feb 2025).",
      proof: "https://drive.google.com/file/d/10q005T7of3K2IXLWJTEFvXoIZigcydR7/view?usp=drive_link",
      
      icon: "🌐"
    },
    {
      title: "Workshop: Version Control using Git & GitHub",
      description: "Attended a workshop on Git & GitHub as part of Zorphix (Mar 2023).",
      proof: "https://drive.google.com/file/d/1P-unEqcIqwI0d5zPtgENBb3qndDRgg6D/view?usp=drive_link",
      icon: "🛠️"
    }
  ];

  return (
    <section className="section">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-600 dark:text-yellow-400">
        🥇 Achievements & Workshops
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {achievements.map((ach, index) => (
          <div key={index} className="card hover:shadow-xl transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{ach.icon || <FaAward />}</span>
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">{ach.title}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{ach.description}</p>

            {ach.proof && (
              <a
                href={ach.proof}
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline mt-4 inline-block"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
