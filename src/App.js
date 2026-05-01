// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Certificates from "./components/Certificates";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div className="bg-gray-900 text-white">
//       <Navbar />
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Certificates />
//       {/* <Contact /> */}
//       <Footer />
//     </div>
//   );
// };

// export default App;



import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Harshit Gupta | React Developer";
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;