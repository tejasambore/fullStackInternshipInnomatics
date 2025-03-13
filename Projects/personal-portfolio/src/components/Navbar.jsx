import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-10 shadow-md shadow-amber-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tejas Ambore</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
          <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
      </button>
      </div>
    </nav>
  );
}

export default Navbar;
