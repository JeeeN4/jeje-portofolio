"use client";

import { Menu, X, Compass } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // --- FUNGSI PINTAR UNTUK MENGATUR SCROLL ---
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault(); // 1. Mencegah perilaku lompatan mendadak bawaan browser

    // 2. Cari elemen tujuan (misal: <section id="about">)
    const element = document.querySelector(targetId);
    if (!element) return;

    // 3. Jika menu mobile sedang terbuka, kita tunggu 300ms sampai animasi tutup menu selesai.
    // Jika di desktop (menu tertutup), langsung scroll tanpa jeda (0ms)!
    const delay = isOpen ? 300 : 0;
    setIsOpen(false); // Tutup menu HP

    setTimeout(() => {
      // 4. Hitung posisi scroll dengan kompensasi tinggi sticky navbar (sekitar 70px)
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      // 5. Eksekusi guliran layar yang mulus!
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, delay);
  };
  // ---------------------------------------------

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-(--section-main)/95 backdrop-blur-sm">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo dengan Compass Besar Beranimasi */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="heading-primary flex items-center gap-2.5 text-lg text-primary transition-opacity hover:opacity-80 group cursor-pointer"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -5, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 360,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            className="flex items-center justify-center shrink-0"
          >
            <Compass className="h-7 w-7 text-primary stroke-[2.2]" />
          </motion.div>

          <span className="tracking-wider pt-0.5">JEJE_DEV</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)} // <-- Pasang fungsi handleScroll di sini
              className="text-sm font-medium text-foreground transition-colors hover:text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden border-2 border-border bg-card p-2 text-foreground transition-all active:-translate-y-0.5 active:bg-primary active:text-white cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu dengan Animasi Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t-2 border-border bg-(--section-main) md:hidden overflow-hidden shadow-[0_8px_0_0_rgba(0,0,0,0.05)]"
          >
            <nav className="container-custom flex flex-col py-4 text-mono">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)} // <-- Pasang fungsi handleScroll di mobile menu juga
                  className="border-b border-border/20 py-3 text-sm font-medium transition-all active:text-primary active:translate-x-1 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
