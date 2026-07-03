import { Copyright } from "lucide-react";
export default function Footer() {
  return (
    /* 1. Typo border-borde diperbaiki menjadi border-border */
    <footer className="border-t-2 border-border bg-(--section-main)">
      <div className="container-custom py-8">
        <div className="flex flex-col gap-6 text-center text-sm md:flex-row md:items-center md:justify-between">
          {/* Brand - Ditambahkan efek hover kecil agar interaktif */}
          <div className="font-heading font-bold text-primary tracking-wider hover:opacity-80 transition-opacity cursor-default">
            JEJE_DEV
          </div>

          {/* Copyright - Menggunakan Ikon SVG agar sejajar sempurna di tengah! */}
          <div className="flex items-center justify-center gap-2 text-mono text-xs md:text-sm text-muted-foreground">
            {/* Menggunakan h-3.5 w-3.5 atau h-4 w-4 agar proporsional dengan tinggi teks */}
            <Copyright className="h-3.5 w-3.5 md:h-4 md:w-4 shrink-0 text-primary/80" />
            <span className="tracking-widest font-medium">
              2026 • DIJE NAUFAL • ALL RIGHTS RESERVED
            </span>
          </div>

          {/* Links - Ditambahkan transition-colors & noopener untuk keamanan */}
          <div className="flex justify-center gap-6 text-mono text-xs md:text-sm">
            <a
              href="https://github.com/JeeeN4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline font-medium"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/dije-naufal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline font-medium"
            >
              LinkedIn
            </a>

            <a
              href="mailto:dijenaufala@gmail.com"
              className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
