// src/App.jsx
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <div className="bg-gray-950 text-white scroll-smooth font-inter">
      {/* ===== Navbar ===== */}
      <header className="fixed w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <h1 className="text-2xl font-bold tracking-tight">
            Rifa <span className="text-teal-400">Amril</span>
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-teal-400 transition-all duration-300 hover:scale-110"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-gray-900/90 backdrop-blur-md border-t border-gray-800 shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-screen py-6" : "max-h-0 py-0"
          }`}
        >
          <nav className="flex flex-col items-center space-y-6 text-lg font-semibold">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-400 transition-all duration-300 hover:scale-110"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Main Section ===== */}
      <main className="pt-24">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}

export default App;
