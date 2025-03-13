import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

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
    <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
      {darkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-gray-600" />}
    </button>
  );
};

export default DarkModeToggle;
