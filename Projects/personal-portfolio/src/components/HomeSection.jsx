import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import profile from "../assets/profile_pic.jpg";
// import EducationSection from "./EducationSectio";
import resume from '../assets/resume/Tejas_Ambore_Resume.pdf'

function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gray-100 dark:bg-gray-900 transition-all">
      <motion.img
              src={profile} // Replace with your image path
              alt="Profile"
              className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-md border-2  border-blue-500 shadow-blue-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.25 }}
            />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mt-3"
      >
        Hey, I'm <span className="text-blue-500">Tejas Ambore</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-0.5 w-2xs shadow-sm shadow-blue-200 bg-blue-400  dark:text-white mt-3 transition-all"
      ></motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300 mt-4"
      >
        Frontend & Full-Stack Developer | Passionate about building modern web apps
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-md text-gray-700 dark:text-gray-300 mt-4 text-justify w-200"
      >
        Results-oriented React.js Developer with strong expertise in JavaScript, Redux, and modern front-end architectures. Proficient in building reusable components, optimizing UI performance, and integrating RESTful APIs. Skilled in state management, front-end build pipelines, and modern authorization mechanisms (JWT). Passionate about writing highquality, maintainable code and collaborating in Agile environments
      </motion.p>

      <motion.a
        href={resume} // Replace with the actual path to your resume
        download="tejasResume.pdf"
        className="mt-6 px-6 py-3 bg-blue-500 text-white flex items-center gap-2 rounded-lg hover:shadow-sm hover:shadow-cyan-100 hover:bg-blue-600  transition-all"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .75, delay: 0.4 }}
      >
        <FaDownload />
        Download Resume
      </motion.a>
{/* 
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 2 }}
        transition={{ duration: 1 }}
        className="items-center justify-center flex flex-col mt-6"
      >
      <EducationSection />
      </motion.div> */}
    </section>
  );
}

export default HomeSection;
