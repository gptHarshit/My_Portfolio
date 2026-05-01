// import React from "react";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaCode,
//   FaEnvelope,
//   FaFileDownload,
// } from "react-icons/fa";

// const socialLinks = [
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/harshit-gupta-289748311/",
//     icon: <FaLinkedin />,
//     color: "text-blue-500",
//   },
//   {
//     name: "GitHub",
//     url: "https://github.com/gptHarshit",
//     icon: <FaGithub />,
//     color: "text-gray-200",
//   },
//   {
//     name: "LeetCode",
//     url: "https://leetcode.com/u/codehelp3746/",
//     icon: <FaCode />,
//     color: "text-yellow-400",
//   },
//   {
//     name: "Email",
//     url: "mailto:gupta.harshit0699@gmail.com",
//     icon: <FaEnvelope />,
//     color: "text-red-400",
//   },
// ];

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
//     >
//       {/* Background glow - subtle */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
//         <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-20"></div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-4 sm:px-8 py-12 sm:py-16 relative z-10 gap-8 lg:gap-16">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center lg:text-left lg:w-1/2 space-y-4 sm:space-y-5"
//         >
//           {/* Name */}
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
//             Harshit{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
//               Gupta
//             </span>
//           </h1>

//           <div className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-300 h-10 sm:h-12">
//             <Typewriter
//               options={{
//                 strings: [
//                   "React Frontend Developer",
//                   "Full-Stack Developer",
//                   "500+ LeetCode Problems",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 deleteSpeed: 30,
//                 delay: 50,
//                 cursor: "|",
//               }}
//             />
//           </div>
//           <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
//             I build scalable web applications with clean, efficient code.
//             Specialized in React, Node.js, and modern web technologies.
//             Currently interning at{" "}
//             <span className="text-purple-400">BrainGrades</span>.
//           </p>

//           {/* Stats - Mobile mein chota */}
//           <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-2">
//             <div className="text-center">
//               <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">
//                 500+
//               </p>
//               <p className="text-[10px] sm:text-xs text-gray-500">LeetCode</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-400">
//                 5+
//               </p>
//               <p className="text-[10px] sm:text-xs text-gray-500">Projects</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
//                 2
//               </p>
//               <p className="text-[10px] sm:text-xs text-gray-500">
//                 Internships
//               </p>
//             </div>
//           </div>

//           {/* Buttons - Mobile mein chota padding aur font */}
//           <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
//             <a
//               href="https://drive.google.com/uc?export=download&id=1areUtG8Z0odwELY0UfJtahpXmA8BGdn0"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
//             >
//               <FaFileDownload className="text-sm sm:text-base" />
//               <span>Download Resume</span>
//             </a>
//             <a
//               href="#contact"
//               className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm sm:text-base"
//             >
//               Contact Me
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Side - Profile Image (SIMPLE CIRCLE - No glow spread) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="lg:w-1/2 flex justify-center"
//         >
//           <div className="relative">
//             {/* Simple Circle Image - No outer glow, No spread */}
//             <div className="relative w-52 h-52 sm:w-48 sm:h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gray-700 shadow-md bg-gray-900">
//               <img
//                 src="https://i.ibb.co/zWmZ6ggm/img.jpg"
//                 alt="Harshit Gupta"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Social Icons - Desktop Right Sidebar */}
//       <motion.div
//         className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50"
//         initial={{ x: 50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//       >
//         {socialLinks.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-110"
//           >
//             <span className={`text-xl ${link.color} transition-transform`}>
//               {link.icon}
//             </span>
//           </a>
//         ))}
//       </motion.div>

//       {/* Social Icons - Mobile Bottom Bar */}
//       <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-5 bg-gray-900/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg z-50 border border-gray-800">
//         {socialLinks.map((link, index) => (
//           <a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 flex items-center justify-center"
//           >
//             <span className={`text-xl ${link.color}`}>{link.icon}</span>
//           </a>
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//       >
//         <span className="text-xs text-gray-500">Scroll Down</span>
//         <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center p-1">
//           <motion.div
//             animate={{ y: [0, 6, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="w-1 h-1.5 bg-purple-400 rounded-full"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harshit-gupta-289748311/",
    icon: <FaLinkedin />,
    color: "text-blue-500",
  },
  {
    name: "GitHub",
    url: "https://github.com/gptHarshit",
    icon: <FaGithub />,
    color: "text-gray-200",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/codehelp3746/",
    icon: <FaCode />,
    color: "text-yellow-400",
  },
  {
    name: "Email",
    url: "mailto:gupta.harshit0699@gmail.com",
    icon: <FaEnvelope />,
    color: "text-red-400",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background glow - subtle */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-4 sm:px-8 py-12 sm:py-16 relative z-10 gap-8 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:w-1/2 space-y-4 sm:space-y-5"
        >
          {/* Name - No gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Harshit{" "}
            <span className="text-purple-400">
              Gupta
            </span>
          </h1>

          <div className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-300 h-10 sm:h-12">
            <Typewriter
              options={{
                strings: [
                  "React Frontend Developer",
                  "Full-Stack Developer",
                  "500+ LeetCode Problems",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
                cursor: "|",
              }}
            />
          </div>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            I build scalable web applications with clean, efficient code.
            Specialized in React, Node.js, and modern web technologies.
            Currently interning at{" "}
            <span className="text-purple-400">BrainGrades</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start pt-2">
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400">
                500+
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">LeetCode</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-400">
                5+
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">
                2
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Internships
              </p>
            </div>
          </div>

          {/* Buttons - No gradient */}
          <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1areUtG8Z0odwELY0UfJtahpXmA8BGdn0"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
            >
              <FaFileDownload className="text-sm sm:text-base" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="relative w-52 h-52 sm:w-48 sm:h-48 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-gray-700 shadow-md bg-gray-900">
              <img
                src="https://i.ibb.co/zWmZ6ggm/img.jpg"
                alt="Harshit Gupta"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons - Desktop Right Sidebar */}
      <motion.div
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-50"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-11 h-11 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 hover:scale-110"
          >
            <span className={`text-xl ${link.color} group-hover:text-white transition-colors`}>
              {link.icon}
            </span>
          </a>
        ))}
      </motion.div>

      {/* Social Icons - Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-5 bg-gray-900/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg z-50 border border-gray-800">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center"
          >
            <span className={`text-xl ${link.color}`}>{link.icon}</span>
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-xs text-gray-500">Scroll Down</span>
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 bg-purple-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;