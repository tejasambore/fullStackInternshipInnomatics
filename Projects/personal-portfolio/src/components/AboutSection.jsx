import { motion } from "framer-motion";
import React from "react";
import profile from "../assets/profile_pic.jpg";

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 transition-all"
    >
      {/* Profile Image */}
      <motion.img
        src={profile} // Replace with your image path
        alt="Profile"
        className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-blue-500"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-600 text-justify dark:text-gray-300 mt-4">
          I am a passionate <span className="font-bold underline">Frontend Developer</span> with experience in creating
          dynamic, interactive, and responsive web applications. I love solving
          problems and bringing ideas to life through <span className="font-bold">clean, efficient code</span>.
        </p>
        <p className="text-lg text-gray-600 text-justify dark:text-gray-300 mt-4">
          My journey started with <span className="font-bold">HTML, CSS, JavaScript</span>, and now I build
          modern web applications using <span className="font-bold">React, Tailwind CSS, and Framer
          Motion</span>.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutSection;
