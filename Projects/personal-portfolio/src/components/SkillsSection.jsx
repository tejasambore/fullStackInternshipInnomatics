import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaGithub, FaServer,  } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, proficiency: "90%" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, proficiency: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, proficiency: "80%" },
  { name: "React", icon: <FaReact className="text-blue-400" />, proficiency: "75%" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, proficiency: "70%" },
  { name: "Databases", icon: <FaDatabase className="text-purple-500" />, proficiency: "65%" },
  { name: "Git", icon: <FaGit className="text-purple-500" />, proficiency: "72%" },
  { name: "GitHub", icon: <FaGithub className="text-purple-500" />, proficiency: "72%" },
  { name: "Express.js", icon: <FaServer className="text-purple-500" />, proficiency: "72%" },
];

function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen mt-2 md:px-20 py-12 bg-gray-100 dark:bg-gray-900 transition-all">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">My Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm shadow-blue-100 hover:shadow-blue-400 hover:shadow-md hover:scale-105 transition-all"
          >
            <div className="text-4xl">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">{skill.name}</h3>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full mt-4 relative">
              <motion.div
                className="h-3 bg-blue-500 rounded-full absolute top-0 left-0"
                style={{ width: skill.proficiency }}
                initial={{ width: "0%" }}
                animate={{ width: skill.proficiency }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{skill.proficiency}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
