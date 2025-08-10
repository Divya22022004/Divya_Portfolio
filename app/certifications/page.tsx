'use client';

import { FaCertificate } from 'react-icons/fa';

export default function CertificationsPage() {
  const certs = [
    {
      name: "Java Programming – NPTEL (62%)",
      url: "https://drive.google.com/file/d/1W39ElvkGdcReXF4Hev94_IfQucYWXqQE/view",
      issuer: "NPTEL",
      icon: "☕"
    },
    {
      name: "Generative AI – Oracle",
      url: "https://drive.google.com/file/d/1XqhfQOWG9vMCeShJ9pNqzbmIOFLOydph/view",
      issuer: "Oracle",
      icon: "🧠"
    },
    {
      name: "CyberSecurity Fundamentals – FutureSkills Prime",
      url: "https://drive.google.com/file/d/1aMY8vb6-Zx98oR6ZHHQuf-AAuY_K51Y4/view",
      issuer: "FutureSkills Prime",
      icon: "🔐"
    },
    {
      name: "Full Stack Development – NoviTech",
      url: "https://drive.google.com/file/d/1G3EVIVwoVNITZau4oEBHFHrXYpBZnfrQ/view",
      issuer: "NoviTech",
      icon: "🌐"
    },
    {
      name: "Front End Web Developer Certification – Infosys Springboard",
      url: "https://drive.google.com/file/d/1kISGRzD3Py8epjok2xh1l_AihU-5n5O2/view",
      issuer: "Infosys Springboard",
      icon: "💻"
    },
    {
      name: "Python Foundation Certification – Infosys Springboard",
      url: "https://drive.google.com/file/d/1fpYTeALoirrdHm-Bi-_UPIxXi2Cl7H73/view",
      issuer: "Infosys Springboard",
      icon: "🐍"
    },
    {
      name: "Machine Learning Foundation Certification – Infosys Springboard",
      url: "https://drive.google.com/file/d/1oVjhaehFYQF4-bHOCX4qZoqa0SfNcjQI/view",
      issuer: "Infosys Springboard",
      icon: "🤖"
    }
  ];

  return (
    <section className="section">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-green-600 dark:text-green-400 transition duration-300">
        🎓 Certifications
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="card flex flex-col justify-between hover:shadow-lg transition-transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl">{cert.icon || <FaCertificate />}</span>
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{cert.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Issued by {cert.issuer}</p>
              </div>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline w-max mt-4"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
