'use client';
import Image from "next/image";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Infomatronics Project Services",
      duration: "Jun 2024",
      description:
        "Built frontend interfaces and integrated REST APIs using React and Node.js. Worked in a team to build scalable features and deploy code efficiently.",
      logo: "/infomatronics.jpeg",
      link: "https://drive.google.com/file/d/1LAO9dibxKJWLSP-kzTBEe2m54PsKkMNY/view?usp=sharing",
    },
    {
      title: "Zoho Creator Trainee (via Campus Program)",
      company: "Zoho",
      duration: "Aug 2024",
      description:
        "App development using Zoho Creator’s low-code platform. Completed university trainee program with hands-on app building experience.",
      logo: "/zoho.jpg",
      link: "https://drive.google.com/file/d/1gK9EPVXutulcRMEjUzrbLshdjTt4C5Hi/view?usp=drive_link",
    },
  ];

  return (
    <section className="section">
      <h1 className="text-4xl font-bold mb-6 text-center">💼 Experience</h1>

      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card hover:shadow-lg border-l-4 border-blue-600 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              {exp.logo && (
                <div className="w-14 h-14 rounded-md overflow-hidden border shadow-sm">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <h2 className="text-xl font-semibold">{exp.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {exp.company} · <span>{exp.duration}</span>
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block button-outline"
              >
                📄 View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
