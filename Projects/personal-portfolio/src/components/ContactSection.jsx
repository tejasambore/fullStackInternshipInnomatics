import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        formData,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <section id="contact" className="min-h-screen mt-6 px-6 md:px-20 py-12 bg-gray-100 dark:bg-gray-900 transition-all">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">Contact Me</h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
          {isSent && <p className="text-green-500">Message sent successfully!</p>}
        </motion.form>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/tejasambore" target="_blank" className="text-gray-900 dark:text-white text-3xl hover:text-slate-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tejasambore" target="_blank" className="text-gray-900 dark:text-white text-3xl hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:tejasambore03@example.com" className="text-gray-900 dark:text-white text-3xl hover:text-red-600 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
