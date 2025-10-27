// src/components/AboutSection.jsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#0b1220] text-white overflow-hidden"
    >
      {/* --- Background efek blur neon --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] top-20 left-1/3"></div>
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] bottom-10 right-1/4"></div>
      </div>

      {/* --- Content --- */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
          Tentang Saya
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
          Saya adalah seorang pengembang dengan ketertarikan besar pada teknologi{" "}
          <span className="text-teal-400 font-semibold">web</span> dan{" "}
          <span className="text-teal-400 font-semibold">mobile</span>.  
          Saya suka menciptakan solusi digital yang tidak hanya berfungsi dengan baik,
          tetapi juga memberikan pengalaman yang menyenangkan dan estetik bagi pengguna.
          Saat ini saya fokus mengembangkan aplikasi menggunakan{" "}
          <span className="text-cyan-400 font-semibold">React</span>,{" "}
          <span className="text-cyan-400 font-semibold">Flutter</span>, dan{" "}
          <span className="text-cyan-400 font-semibold">Express.js</span>.
        </p>

        {/* --- Skill highlight kecil --- */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["React", "Flutter", "Express.js", "Tailwind", "Node.js"].map(
            (skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 border border-teal-400/40 text-teal-300 rounded-full text-sm md:text-base bg-white/5 backdrop-blur-sm hover:bg-teal-500/10 transition-all"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
