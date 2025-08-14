import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">About Me</h2>

        <div className="grid md:grid-cols-2 gap-10 text-white">
          {/* 🧠 Left: Summary + Contact Info */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              I’m <strong>Amit Sahu</strong>, a detail-oriented Machine Learning Engineer and Full-Stack Developer.
              Skilled in Python, TensorFlow, PyTorch, Scikit-learn, and cloud deployment (AWS, GCP, Azure).
              I design and deploy scalable AI/ML applications, automate data pipelines, and integrate
              backend services with modern web frameworks.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <strong>📍 Location:</strong> Gwalior, MP, India
              </p>
              <p>
                <strong>✉️ Email:</strong>{" "}
                <a href="mailto:sahuamit4783@gmail.com" className="text-blue-400 underline">
                  sahuamit4783@gmail.com
                </a>
              </p>
              <p>
                <strong>📞 Phone:</strong>{" "}
                <a href="tel:+917067690942" className="text-blue-400 underline">
                  +91 7067690942
                </a>
              </p>
              <p>
                <strong>💻 GitHub:</strong>{" "}
                <a
                  href="https://github.com/amit-sahu-a11y"
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  amit-sahu-a11y
                </a>
              </p>
              <p>
                <strong>🔗 LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/amit-sahu-40a3b8291/"
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amit Sahu
                </a>
              </p>
            </div>

            {/* Awards */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-2">Awards & Certifications</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Top 15 Finalist – IIC Hackathon (2024)</li>
                <li>ISRO IIRS Certification: AI/ML for Geodata Analysis (2024)</li>
                <li>Certified ML Intern – Tecnovacore Pvt. Ltd. (2025)</li>
                <li>Certified ML Trainee – ITM University (2024)</li>
              </ul>
            </div>
          </div>

          {/* 🚀 Right: Skills + Experience */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Technical Skills</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Languages: Python, C, SQL</li>
                <li>ML/DL: TensorFlow, PyTorch, Scikit-learn, OpenCV, Seaborn</li>
                <li>frameworks: Selenium, Flask, FastAPI, Streamlit</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>Cloud: AWS, Azure, GCP</li>
                <li>Tools: Git, Docker, Jupyter, Google Colab</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Experience</h3>
              <p className="text-gray-300 text-sm">
                <strong>Machine Learning Intern — Tecnovacore Pvt. Ltd. (Apr 2025 - Jul 2025)</strong><br />
                Improved ML model accuracy by 15% via hyperparameter tuning, built REST APIs with FastAPI,
                optimized ETL workflows with Pandas/NumPy, and deployed services in Docker with backend integration.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Education</h3>
              <p className="text-gray-300 text-sm">
                <strong>B.Tech in Computer Science (AI & ML)</strong><br />
                ITM University, Gwalior (2022 – 2026, CGPA: 7.6/10)
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
