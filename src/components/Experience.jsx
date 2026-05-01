import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaTasks, FaRocket } from "react-icons/fa";

const Experience = () => {
  const achievements = [
    "Built 20+ production React pages including attendance tracking, fee analytics, enrollment workflows, result reports, and payment initiation, with mobile and desktop responsive views.",
    "Engineered complex data flows across student insights, homework, notices, and calendar modules using async REST APIs, structured payloads, and shimmer loading for perceived performance.",
    "Implemented role-based UI architecture with admin controls, student validators, and dynamic config-driven rendering using Context API and a modular component system.",
    "Delivered real-world features end-to-end — integrating 25+ REST APIs with caching strategies that reduced redundant calls by ~50%, improving load performance significantly."
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and what I've built along the way
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 border-b border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <FaBuilding className="text-3xl text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Frontend Developer Intern</h3>
                    <p className="text-purple-400 font-medium">BrainGrades</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaCalendarAlt />
                  <span>Feb 2026 - Present</span>
                  <span className="mx-2">•</span>
                  <span>Noida, UP (Hybrid)</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaRocket className="text-purple-400" />
                <h4 className="text-lg font-semibold">Key Achievements</h4>
              </div>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;