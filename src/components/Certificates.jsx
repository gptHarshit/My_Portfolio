import React from "react";
import { motion } from "framer-motion";
import { FaAws, FaDatabase, FaNodeJs, FaReact, FaCloud } from "react-icons/fa";
import { SiOracle } from "react-icons/si";

const certificates = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuedBy: "Amazon Web Services",
    date: "March 8, 2025",
    icon: <FaAws />,
    color: "#FF9900",
    link: "https://drive.google.com/file/d/1JzK9rmzJ4Nbff3vVcqjZ4hs36e5l3wtG/view?usp=sharing",
    desc: "Fundamentals of AWS Cloud, core services, pricing, and security",
  },
  {
    name: "Oracle Database Programming with SQL",
    issuedBy: "Oracle Academy",
    date: "December 27, 2024",
    icon: <SiOracle />,
    color: "#F80000",
    link: "https://drive.google.com/file/d/1aQmgO7uBfNe1dxQxUpHGPAIf3Zneoz10/view?usp=sharing",
    desc: "SQL fundamentals, database design, and query optimization",
  },
  {
    name: "Namaste React",
    issuedBy: "NamasteDev.com",
    date: "2025",
    icon: <FaReact />,
    color: "#61DAFB",
    link: "https://drive.google.com/file/d/1qiVadDcWnYG4B5qBswmx9dAzTCCri9zg/view?usp=sharing",
    desc: "Modern React with hooks, state management, and performance optimization",
  },
  {
    name: "Namaste Node.js",
    issuedBy: "NamasteDev.com",
    date: "2025",
    icon: <FaNodeJs />,
    color: "#339933",
    link: "https://drive.google.com/file/d/1bdjXG89BBNyvsMR_4fGUl389vIrXdlGu/view?usp=sharing",
    desc: "Backend development with Node.js, Express, and MongoDB",
  },
  {
    name: "The SQL Programming Essentials",
    issuedBy: "Udemy",
    date: "March 26, 2025",
    icon: <FaDatabase />,
    color: "#A435F0",
    link: "https://drive.google.com/file/d/1erRVktvk7fOcPuX3jFT7lCB2fBwlrBMb/view?usp=sharing",
    desc: "Advanced SQL queries, joins, subqueries, and database design",
  },
  {
    name: "ICRTICC 2025 - Research Paper",
    issuedBy: "Galgotias College of Engg. & Tech.",
    date: "February 20-21, 2025",
    icon: <FaCloud />,
    color: "#10B981",
    link: "https://drive.google.com/file/d/1Iy6LTsvBU5Fp1yMquSDKcjdy3kBuAYIo/view",
    desc: "Paper Presentation on Cloud Predictive Formation Issues",
  },
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="block group"
    >
      <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
        <div className="flex items-start gap-4">
          <div
            className="p-3 rounded-lg text-2xl transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
          >
            {cert.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
              {cert.name}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{cert.issuedBy}</p>
            <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {cert.desc}
            </p>
            <span className="inline-block mt-3 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
              View Certificate →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-10"></div>
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
            Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
