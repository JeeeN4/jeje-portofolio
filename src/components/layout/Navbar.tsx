"use client";

import { Menu, X, Compass } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle"; // <-- 1. Import komponen ThemeToggle di sini!

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
    e.preventDefault();

    const element = document.querySelector(targetId);
    if (!element) return;

    const delay = isOpen ? 300 : 0;
    setIsOpen(false);

    setTimeout(() => {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, delay);
  };
  // ---------------------------------------------

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-(--section-main)/95 backdrop-blur-sm transition-colors duration-300">
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

        {/* 2. Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-mono">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary underline-offset-4 hover:underline cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Posisi ThemeToggle untuk Desktop (di kanan menu) */}
          <div className="pl-2 border-l-2 border-border/40">
            <ThemeToggle />
          </div>
        </div>

        {/* 3. Mobile Buttons: Theme Toggle & Hamburger Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Posisi ThemeToggle untuk HP (di sebelah tombol menu) */}
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="border-2 border-border bg-card p-2 text-foreground transition-all active:-translate-y-0.5 active:bg-primary active:text-primary-foreground cursor-pointer shadow-[2px_2px_0px_0px_var(--border)]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dengan Animasi Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t-2 border-border bg-section-main md:hidden overflow-hidden shadow-[0_8px_0_0_rgba(0,0,0,0.05)]"
          >
            <nav className="container-custom flex flex-col py-4 text-mono">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
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
