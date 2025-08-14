import React from "react";

export default function Navbar() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/10 text-white shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="text-xl font-bold cursor-pointer hover:text-blue-300 transition"
          onClick={() => scrollTo("hero")}
        >
          Amit Sahu
        </h1>
        <ul className="flex space-x-6 text-sm font-medium">
          {["about", "projects", "contact"].map((id) => (
            <li
              key={id}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
