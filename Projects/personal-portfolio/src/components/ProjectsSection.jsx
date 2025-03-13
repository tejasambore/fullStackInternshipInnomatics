import { motion } from "framer-motion";
import React from "react";
import todo from '../assets/project/todo-app.png';
import memoryMatchGame from '../assets/project/memory-match-game.png';
import shoppingCart from '../assets/project/shopping-cart.png';

const projects = [
  {
    title: "Todo List Application",
    description: "A modern, interactive, and user-friendly Todo List Application designed to streamline task management with an intuitive UI and seamless functionality.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/tejasambore/todo-list",
    live: "https://budget-tracker-app.vercel.app",
    image: todo,
  },
  {
    title: "Memory Match Game",
    description: "This is a simple memory match game built using HTML, CSS, and JavaScript. The game consists of a grid of cards with different images on them.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/yourusername/interview-scheduler",
    live: "https://interview-scheduler.vercel.app",
    image: memoryMatchGame,
  },
  {
    title: "Portfolio Website",
    description: "building a fully functional Shopping cart Web Application using HTML, CSS, and JavaScript. The project aimed to implement ensuring a smooth user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
    image: shoppingCart,
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen mt-2 px-6 md:px-20 py-12 bg-gray-100 dark:bg-slate-900 transition-all">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">My Projects</h2>
    
    {/* <img src={todo} alt="" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-sm shadow-blue-100 hover:shadow-md hover:shadow-blue-300 transition-all"
          >
            
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

            <div className="absolute inset-0 bg-cyan-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center p-6">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div className="flex gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm text-gray-100 bg-gray-800 px-2 py-1 rounded hover:bg-blue-300 hover:text-black transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-2">
                <a href={project.live} target="_blank" className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                  Live Demo
                </a>
                <a href={project.link} target="_blank" className="px-3 py-1 bg-amber-200 text-sm text-black rounded hover:bg-amber-300 transition">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
