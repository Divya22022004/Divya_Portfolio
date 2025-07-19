'use client';
import Hero from "../components/Hero";
//import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-sky-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white font-sans">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Hero />
        
      </motion.div>
    </main>
  );
}
