import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const quotes = [
    "Code never lies, comments sometimes do. - Ron Jeffries",
    "The best way to predict the future is to implement it. - David Heinemeier Hansson",
    "Make it work, make it right, make it fast. - Kent Beck",
    "First, solve the problem. Then, write the code. - John Johnson",
    "Programming is the art of telling another human what one wants the computer to do. - Donald Knuth"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);
  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-500",
      tooltip: "LinkedIn"
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/yourusername",
      color: "hover:text-gray-300",
      tooltip: "GitHub"
    },
    { 
      icon: <FaEnvelope />, 
      href: "mailto:your.email@example.com",
      color: "hover:text-red-400",
      tooltip: "Email"
    },
    { 
      icon: <SiLeetcode />, 
      href: "https://leetcode.com/yourleetcodeprofile",
      color: "hover:text-yellow-400",
      tooltip: "LeetCode"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden border-t border-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Rotating Quotes Section */}
        <div className="max-w-3xl mx-auto mb-12 h-24 flex items-center justify-center">
          {quotes.map((quote, index) => (
            <motion.p
              key={index}
              className={`text-xl text-center text-gray-300 italic absolute px-4 ${currentQuote === index ? 'block' : 'hidden'}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentQuote === index ? 1 : 0,
                y: currentQuote === index ? 0 : 10
              }}
              transition={{ duration: 0.5 }}
            >
              "{quote}"
            </motion.p>
          ))}
        </div>

        {/* Social Links with Tooltips */}
        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group text-3xl text-gray-400 ${link.color} transition-colors duration-300`}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 rounded-full bg-gray-900 border border-gray-800 group-hover:border-transparent transition-all duration-300">
                {link.icon}
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-gray-900 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {link.tooltip}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8 max-w-md"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.p
          className="text-gray-600 text-sm text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.p>
      </div>

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/20 pointer-events-none"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 50],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            y: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            },
            opacity: {
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;