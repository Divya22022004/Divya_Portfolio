'use client';

import { FaCode, FaTools, FaLaptopCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-purple-600 dark:text-purple-400 transition duration-300">
        👩‍💻 About Me
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 leading-relaxed text-center transition duration-300">
        I'm Divya R, a passionate Full Stack Developer and Machine Learning Enthusiast.
        I love building modern web applications, solving problems, and constantly learning new technologies.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {/* Programming Languages */}
        <div className="card text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-3 text-pink-500 dark:text-pink-400 transition-all duration-300"><FaCode /></div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Programming Languages</h2>
          <p className="text-gray-600 dark:text-gray-300">Java, Python</p>
        </div>

        {/* Tools & Technologies */}
        <div className="card text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-3 text-blue-500 dark:text-blue-300 transition-all duration-300"><FaTools /></div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Tools & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Git, GitHub, VS Code, Figma, Canva, Google Colab
          </p>
        </div>

        {/* Web Development */}
        <div className="card text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-3 text-green-500 dark:text-green-300 transition-all duration-300"><FaLaptopCode /></div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Web Development</h2>
          <p className="text-gray-600 dark:text-gray-300">
            HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Next.js
          </p>
        </div>

        {/* Machine Learning */}
        <div className="card text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-4xl mb-3 text-yellow-500 dark:text-yellow-400 transition-all duration-300">🤖</div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">Machine Learning</h2>
          <p className="text-gray-600 dark:text-gray-300">
            NumPy, Pandas, Matplotlib, Scikit-Learn, Jupyter Notebook
          </p>
        </div>
      </div>
    </section>
  );
}
