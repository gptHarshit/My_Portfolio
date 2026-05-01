import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "DevSphere",
    description: "Developer networking platform with real-time chat, profile discovery, and connection requests. Inspired by DevTinder, fully deployed on AWS with live domain devsphere.club.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS EC2", "Tailwind CSS"],
    github: "https://github.com/gptHarshit/DevSphere_Frontend_2",
    demo: "https://devsphere.club",
    color: "#8B5CF6",
    featured: true
  },
  {
    title: "LMS Platform",
    description: "Full-featured Learning Management System enabling instructors to create courses and students to enroll, track progress, and complete lessons with Stripe payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    github: "https://github.com/gptHarshit/LMS_project",
    demo: "#",
    color: "#EC4899",
    featured: true
  },
  {
    title: "NetflixGPT",
    description: "AI-powered movie recommendation platform using OpenAI APIs. Features personalized suggestions, Redux state management, and TMDB integration.",
    tech: ["React", "Redux Toolkit", "Firebase", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/gptHarshit/Netflix-GPT",
    demo: "#",
    color: "#F59E0B",
    featured: false
  },
  {
    title: "Airline Booking Backend",
    description: "Robust backend system for airline booking with full CRUD operations, Sequelize ORM, Winston logging, and clean architecture (Router → Controller → Service → Repository).",
    tech: ["Node.js", "Express", "MySQL", "Sequelize", "Winston", "JWT"],
    github: "https://github.com/gptHarshit/Airline_Booking_Backend",
    demo: "#",
    color: "#06B6D4",
    featured: false
  },
  {
    title: "School ERP Dashboard",
    description: "Full-stack ERP dashboard with enrollment, attendance, insights, events, and fees modules. Built 20+ production pages with 50% API call reduction via caching.",
    tech: ["React", "Context API", "REST APIs", "Tailwind CSS", "Shadcn/ui"],
    github: "#",
    demo: "#",
    color: "#10B981",
    featured: false
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 70%)`
        }}
      />

      <div className="p-6 md:p-8 relative z-10">
        {/* Title & Links */}
        <div className="flex justify-between items-start mb-4">
          <h3 
            className="text-2xl md:text-3xl font-bold transition-colors duration-300"
            style={{ color: isHovered ? project.color : "white" }}
          >
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-xl text-gray-400 hover:text-white" />
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <FaExternalLinkAlt className="text-xl text-gray-400 hover:text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-500/20 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-xs text-purple-400">Featured Project</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-20"></div>
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
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world projects I've built, from full-stack applications to backend systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;




