import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Objectives from "@/components/sections/Objectives";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ACT 1: THE EXPLORER (Perkenalan Diri) */}
      <Hero />
      <About />

      {/* ACT 2: THE ARSENAL (Keahlian & Senjata) */}
      <Objectives />
      <Skills />

      {/* ACT 3: THE PROOF (Pembuktian & Track Record) */}
      <Projects />
      <Experience />
      <Achievements />

      {/* ACT 4: THE CALL (Ajak Kerja Sama) */}
      <Contact />

      <Footer />
    </>
  );
}
