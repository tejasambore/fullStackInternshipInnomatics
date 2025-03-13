import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import React from "react";

const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Innomatics Research Labs",
      duration: "Jan 2025 - March 2025",
      // description: "Built a Personal Budget Tracker with React and Firebase, implementing expense tracking features.",
    },
];

function EducationSection() {
  return (
    <section id="experience" className="mt-4 px-1 md:px-1 py-5 bg-gray-100 dark:bg-gray-900 transition-all items-start">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-left mb-8">Qualification</h2>

      <div className="relative border-l-4 border-blue-500 text-left dark:border-blue-400 ml-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="mb-10 ml-6"
          >
            <div className="flex items-center gap-4">
              <FaBriefcase className="text-blue-500 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{exp.company}</p>
            {/* <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span> */}
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;
