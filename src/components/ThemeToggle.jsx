import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // return (
  //   // <button
  //   //   onClick={toggleTheme}
  //   //   className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full shadow-md backdrop-blur-md border border-white/20 transition
  //   //              bg-white/10 text-white hover:bg-white/20 dark:bg-black/10 dark:text-black dark:hover:bg-black/20"
  //   // >
  //   //   {theme === "Light" ?  "🌙 Dark Mode" : "🌞 Light Mode" }
  //   // </button>
  // );
}
