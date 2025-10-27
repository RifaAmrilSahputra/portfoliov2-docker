// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import profilePic from "../assets/images/profile.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#020617] text-white px-6 md:px-16"
    >
      {/* --- Animated background lights --- */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-teal-500/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[140px] animate-pulse delay-2000"></div>
      </div>

      {/* --- Left Content --- */}
      <motion.div
        className="relative z-10 flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-sm uppercase tracking-[6px] text-teal-400 font-semibold">
          Frontend Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            Rifa Amril
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          I build modern, responsive, and animated web experiences that blend
          clean design with smooth interaction.
        </p>

        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.07 }}
            className="bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-teal-400/30 transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            className="border border-teal-400 px-6 py-3 rounded-full font-semibold text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      {/* --- Right Side (Profile Image) --- */}
      <motion.div
        className="relative z-10 flex-1 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative group">
          {/* Aura glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 blur-2xl opacity-30 group-hover:opacity-60 transition duration-700"></div>

          <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] border-teal-400/60 shadow-2xl">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
