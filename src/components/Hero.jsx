import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left px-6 py-12 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl shadow-xl max-w-5xl mx-auto"
    >
      {/* 🖼 Profile Image */}
      <motion.div
        variants={fadeInUp}
        custom={1}
        className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg ring-4 ring-white/30"
      >
        <img
          src="public\IMG20241005173251.jpg"   // Place image in public folder
          alt="Amit Sahu"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* 👋 Intro Text */}
      <div>
        <motion.h1
          variants={fadeInUp}
          custom={2}
          className="text-4xl md:text-6xl font-bold text-white dark:text-black"
        >
          Hi, I'm Amit Sahu
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          custom={3}
          className="mt-3 text-xl text-gray-200 dark:text-gray-700"
        >
          B.Tech (AI & ML) @ ITM University | AI & ML Engineer | Python Developer
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={3}
          className="mt-2 text-base text-gray-300 dark:text-gray-600"
        >
          Specializing in Deep Learning, Computer Vision & Blockchain-powered solutions.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          custom={4}
          className="mt-2 text-base text-gray-300 dark:text-gray-600"
        >
          Building intelligent applications with real-world impact.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeInUp}
          custom={5}
          className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
        >
          <a
            href="https://www.linkedin.com/in/amit-sahu-40a3b8291/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/amit-sahu-a11y"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            GitHub
          </a>
          <a
            href="/Resume_Amit_Sahu.pdf"  // Make sure PDF is in public folder
            download
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
