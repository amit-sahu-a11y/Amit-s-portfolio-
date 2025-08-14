import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zw1r0a8",
        "template_btmglea",
        form.current,
        "65eo1bVwv9iC61BvN"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 5000); // auto-hide after 5 sec
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-white dark:text-black">Contact Me</h2>

        {/* Contact Info */}
        <div className="mb-8 space-y-4 text-left text-gray-200 dark:text-gray-700">
          <p><strong>📧 Email:</strong> 
            <a href="mailto:sahuamit4783@gmail.com" className="text-blue-400 underline hover:text-blue-300 ml-2">
              sahuamit4783@gmail.com
            </a>
          </p>
          <p><strong>📞 Phone:</strong> 
            <a href="tel:+917067690942" className="text-blue-400 underline hover:text-blue-300 ml-2">
              +91 7067690942
            </a>
          </p>
          <p><strong>💻 GitHub:</strong> 
            <a href="https://github.com/amit-sahu-a11y" className="text-blue-400 underline hover:text-blue-300 ml-2" target="_blank" rel="noreferrer">
              amit-sahu-a11y
            </a>
          </p>
          <p><strong>🔗 LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/amit-sahu-40a3b8291/" className="text-blue-400 underline hover:text-blue-300 ml-2" target="_blank" rel="noreferrer">
              Amit Sahu
            </a>
          </p>
        </div>

        {/* Email Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-white/5 dark:bg-black/5 text-white dark:text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-white/5 dark:bg-black/5 text-white dark:text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-md bg-white/5 dark:bg-black/5 text-white dark:text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            Send Message
          </button>
        </form>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 mt-4 font-medium"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}

        {/* Resume Download */}
        {/* <a
          href="/Resume_Amit_Sahu.pdf" // <-- Put file inside "public" folder and rename
          className="inline-block mt-8 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 text-white dark:text-black px-6 py-2 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition shadow-md"
          download
        >
          Download Resume
        </a> */}
      </div>
    </motion.section>
  );
}
