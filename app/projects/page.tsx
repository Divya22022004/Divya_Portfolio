'use client';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Dynamic Greeting App",
      tech: "MERN Stack",
      description: "A personalized greeting generator based on time and user behavior.",
      github: "https://github.com/Divya22022004/dynamic_greetings"
    },
    {
      title: "Blockchain Voting System",
      tech: "Node.js, Express.js, MongoDB, MetaMask",
      description: "Secure and transparent voting using blockchain with MetaMask authentication.",
      // github: "https://github.com/Divya22022004/Blockchain-Voting-System"
    },
    {
      title: "Diabetes Prediction",
      tech: "Python, Scikit-learn",
      description: "ML model to predict diabetes based on health parameters.",
      github: "https://github.com/Divya22022004/Diabetes-Prediction-Project"
    }
  ];

  return (
    <section className="section">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-600 dark:text-purple-400">
        🚀 Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card border-l-4 border-blue-500 hover:shadow-lg transition-transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">{project.title}</h2>
            <p className="text-sm text-gray-500 mb-1">🔧 {project.tech}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline inline-block"
              >
                View on GitHub
              </a>
            ) : (
              <p className="text-sm italic text-gray-400 dark:text-gray-500">GitHub link not available</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
