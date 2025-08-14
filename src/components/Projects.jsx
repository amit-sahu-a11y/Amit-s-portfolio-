import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
  // --- Web Projects ---
  {
    title: "E-Commerce Web App",
    desc: "Responsive shopping platform using MERN stack with payment gateway.",
    category: "Web",
  },
  {
    title: "Courier Tracking System",
    desc: "Java + Spring Boot system with real-time status updates and admin panel.",
    category: "Web",
  },
  {
    title: "Personal 3D Portfolio",
    desc: "Interactive portfolio with 3D elements, animations, and theme toggle.",
    category: "Web",
  },

  // --- Machine Learning Projects ---
  {
    title: "Early Disease Prediction",
    desc: "ML-based system forecasting diseases using environmental and health data.",
    category: "ML",
  },
  {
    title: "3D Video Classification",
    desc: "Deep learning model trained on UCF101 dataset to classify video actions.",
    category: "ML",
  },
  {
    title: "Satellite Monitoring Model",
    desc: "Hackathon-winning real-time satellite data model for environment analysis.",
    category: "ML",
  },
  {
    title: "AI-powered Drug Discovery",
    desc: "Novel deep learning algorithm for AI-powered drug discovery and development.",
    category: "ML",
  },
  {
    title: "WatchHer – Women Safety AI",
    desc: "CNN+LSTM-based real-time surveillance system detecting unsafe situations.",
    category: "ML",
  },
  {
    title: "Website Bug Detection Model",
    desc: "ML model detecting bugs in frontend, backend, and APIs with SHAP explanations.",
    category: "ML",
  },
  {
    title: "MedLang – AI Health Platform",
    desc: "AI-powered mobile platform for rural doctors with predictive analytics and NLP.",
    category: "ML",
  },

  // --- Blockchain Projects ---
  {
    title: "Medical Records on Blockchain",
    desc: "Secure storage of encrypted patient records using blockchain ledger.",
    category: "Blockchain",
  },
  {
    title: "Hack4Health DigiLocker",
    desc: "Blockchain-based DigiLocker for health records with cryptographic privacy.",
    category: "Blockchain",
  },
];

const categories = ["All", "Web", "ML", "Blockchain"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
  exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <motion.section
      id="projects"
      className="px-6 py-16 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-4xl font-bold text-center mb-10"
      >
        Projects
      </motion.h2>

      {/* Filter Tabs */}
      <motion.div
        variants={fadeUp}
        custom={1}
        className="flex justify-center mb-10 flex-wrap gap-3"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full backdrop-blur-sm transition ${
              activeCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-white/10 hover:bg-white/20 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              custom={idx + 2}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeUp}
              layout
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-gray-200">{proj.desc}</p>
              <span className="mt-2 inline-block text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                {proj.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
