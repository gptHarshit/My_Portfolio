import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaAws, FaGithub, FaJs, FaDatabase, FaCloud 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, 
  SiSocketdotio, SiStripe, SiMysql, SiPostman, SiGit 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "#61DAFB", category: "Frontend" },
  { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC", category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF", category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Database" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "Database" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900", category: "DevOps" },
  { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101", category: "Backend" },
  { name: "Stripe", icon: <SiStripe />, color: "#008CDD", category: "Integration" },
  { name: "Git/GitHub", icon: <FaGithub />, color: "#FFFFFF", category: "Tools" },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Animated Border Gradient */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md"></div>
      
      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 p-5 rounded-xl border border-gray-800 group-hover:border-transparent transition-all duration-300 h-full">
        {/* Icon with animated background */}
        <div className="relative mb-4 flex justify-center">
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
            style={{ background: `radial-gradient(circle, ${skill.color}40, transparent)` }}
          ></div>
          <div 
            className="text-5xl relative z-10 transition-all duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
        </div>
        
        {/* Skill Name */}
        <p className="text-center font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </p>
        
        {/* Category Badge */}
        <div className="mt-3 flex justify-center">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 group-hover:bg-gray-700 group-hover:text-gray-300 transition-colors duration-300">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-15 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-15 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 animate-pulse-slow" style={{ animationDelay: "4s" }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs text-purple-400 font-medium">EXPERTISE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              Tech Stack
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I master to build <span className="text-purple-400">scalable</span> and 
            <span className="text-pink-400"> high-performance</span> applications
          </p>
        </motion.div>

        {/* Stats / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">12+</p>
            <p className="text-xs text-gray-500">Technologies</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-pink-400">500+</p>
            <p className="text-xs text-gray-500">LeetCode</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">2+</p>
            <p className="text-xs text-gray-500">Years Exp.</p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
        
        {/* CTA - Small */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-600">
            Always learning, always growing 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;