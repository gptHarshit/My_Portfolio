import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_ao7ctyr", 
        "template_5o5r6nk", 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "M2YqC9LsGh4DUVud4", // Public Key
      )
      .then(() => {
        setSendStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSendStatus(null), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSendStatus("error");
        setTimeout(() => setSendStatus(null), 3000);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "gupta.harshit0699@gmail.com",
      link: "mailto:gupta.harshit0699@gmail.com",
    },
    { icon: <FaPhone />, text: "+91-7415072811", link: "tel:+917415072811" },
    { icon: <FaMapMarkerAlt />, text: "Noida/Anuppur, India", link: null },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/harshit-gupta-289748311/",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/gptHarshit",
      color: "#FFFFFF",
    },
    {
      icon: <FaCode />,
      url: "https://leetcode.com/u/codehelp3746/",
      color: "#FFA116",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
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
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                      {info.icon}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-800">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:scale-110 transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800"
            >
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

              {sendStatus === "success" && (
                <p className="mt-3 text-green-400 text-sm text-center">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {sendStatus === "error" && (
                <p className="mt-3 text-red-400 text-sm text-center">
                  ✗ Failed to send. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
