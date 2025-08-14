// App.jsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cube from "./components/Cube";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import BackgroundBlobs from "./components/BackgroundBlobs";
import ThemeToggle from "./components/ThemeToggle";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <main className="scroll-smooth font-sans text-white dark:text-black bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] dark:from-white dark:via-gray-100 dark:to-white min-h-screen relative">
      <BackgroundBlobs />
      <Navbar />
      <ThemeToggle />

      {/* Hero Section with 3D Cube */}
      <section id="hero" className="h-screen w-full relative">
        <Canvas camera={{ position: [2, 2, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls enableZoom={false} />
          <Cube />
        </Canvas>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 rounded-xl">
          <Hero />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 rounded-lg mx-4 my-10 p-6">
        <Projects />
      </section>

      {/* About Section */}
      <section id="about" className="backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 rounded-lg mx-4 my-10 p-6">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="backdrop-blur-lg bg-white/10 dark:bg-black/10 border border-white/20 rounded-lg mx-4 my-10 p-6">
        <Contact />
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
