"use client";

import { Menu, X, Compass } from "lucide-react";
import { useState } from "react";

// The Big 5: 5 Pilar Utama Navigasi
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-(--section-main)/95 backdrop-blur-sm">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo dengan Tambahan Ikon Compass */}
        <a
          href="#home"
          className="heading-primary flex items-center gap-2 text-lg text-primary transition-opacity hover:opacity-80"
        >
          {/* Ikon Compass bergaya retro dengan sedikit animasi putar saat dihover */}
          <Compass className="h-5 w-5 animate-pulse text-primary" />
          <span>JEJE_DEV</span>
        </a>

        {/* Desktop Menu - Jarak dikembalikan ke gap-8 agar lebih lega */}
        <nav className="hidden md:flex items-center gap-8 text-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary underline-offset-4 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button - Efek Retro Box */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden border-2 border-border bg-card p-2 text-foreground transition-colors hover:bg-primary hover:text-white"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t-2 border-border bg-(--section-main) md:hidden shadow-[0_8px_0_0_rgba(0,0,0,0.05)]">
          <nav className="container-custom flex flex-col py-4 text-mono">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b border-border/20 py-3 text-sm font-medium transition-colors hover:text-primary hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
