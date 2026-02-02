import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import ThisWebsite from "@/components/sections/ThisWebsite";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* EXPERIENCE */}
      <Experience />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* ABOUT THIS PORTFOLIO */}
      <div className="mx-auto my-20 h-px w-full max-w-5xl bg-white/10 px-6" />
      <ThisWebsite />

      {/* CONTACT */}
      <Contact />

      <footer className="mx-auto mt-10 w-full max-w-5xl px-6 pb-12 text-xs text-white/50">
        © {new Date().getFullYear()} Tomás Cardozo · Built with React · Vite ·
        Tailwind CSS
      </footer>
    </div>
  );
}
