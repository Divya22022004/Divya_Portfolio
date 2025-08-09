'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left gap-8 min-h-screen">
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
          Hello, I’m Divya R 👋
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          I'm a <span className="font-semibold">MERN Stack Developer</span> and
          <span className="font-semibold"> Machine Learning Enthusiast</span> passionate about building efficient, user-friendly applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="/contact"
            className="button-primary animate-bounce"
          >
            Let’s Connect
          </a>
          <a
            href="https://drive.google.com/file/d/196X2QBZEAslz47aLvx3cJejmNcAcOFBp/view?usp=sharing" // Make sure the resume is in public/resume.pdf
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline"
          >
            📄 View Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-blue-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Divya R"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}
