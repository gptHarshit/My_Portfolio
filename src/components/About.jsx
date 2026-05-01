import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiUsers, FiHeart, FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
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
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-gray-800"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              I build React interfaces that don't just look good, they actually work at scale.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Currently interning at <span className="text-purple-400 font-medium">BrainGrades</span>, where I'm building a full-stack School ERP dashboard 
              from the ground up — handling everything from complex form workflows and controlled 
              components to async REST API integration with caching and shimmer loading states.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              My projects reflect the same thinking. <span className="text-pink-400 font-medium">DevSphere</span>, a developer networking platform, 
              taught me how real-time communication breaks in production and how to fix it — 
              Socket.io, JWT auth, AWS EC2 deployment, NGINX, PM2. My <span className="text-pink-400 font-medium">LMS project</span> pushed me 
              into Redux Toolkit, RTK Query, Stripe webhooks, and role-based access control.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              What I'm good at: <span className="text-purple-300">React.js, component architecture, REST API integration, 
              state management with Redux, Tailwind CSS</span>, and writing frontend code that backend 
              developers don't have to apologize for. I'm comfortable going full-stack when needed — 
              Node.js, Express, MongoDB, MySQL — but the frontend is where I do my sharpest work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <FiCode className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LeetCode</p>
                  <p className="text-lg font-semibold text-white">500+ Problems</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <FiUsers className="text-pink-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-lg font-semibold text-white">500+ Connections</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <FiAward className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Certifications</p>
                  <p className="text-lg font-semibold text-white">5+ Professional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;