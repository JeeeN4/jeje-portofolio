"use client"; // <-- Wajib ada untuk fungsi window.scrollTo

import { Copyright, ArrowUp, Compass } from "lucide-react";

export default function Footer() {
  // Fungsi untuk scroll mulus ke paling atas web
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t-2 border-border bg-(--section-main) text-mono">
      <div className="container-custom py-10 sm:py-12">
        {/* Kontainer Utama: Flex-col di HP, 3-Kolom Simetris di Desktop */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
          {/* 1. KIRI (Desktop) / ATAS (HP): Brand Info */}
          <div className="flex items-center gap-2 font-heading font-bold text-lg text-primary tracking-wider hover:opacity-80 transition-opacity cursor-default order-1">
            <Compass className="h-5 w-5 animate-spin-slow shrink-0" />
            <span>JEJE_DEV</span>
          </div>

          {/* 2. TENGAH (Selalu di Tengah): Copyright & Built With */}
          <div className="flex flex-col items-center justify-center text-center gap-1.5 order-4 md:order-2">
            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Copyright className="h-3.5 w-3.5 shrink-0 text-primary/80" />
              <span className="tracking-widest font-medium">
                2026 • DIJE NAUFAL • ALL RIGHTS RESERVED
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground/60 tracking-widest">
              [ BUILT WITH NEXT.JS & TAILWIND CSS V4 ]
            </p>
          </div>

          {/* 3. KANAN (Desktop) / TENGAH (HP): Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium order-2 md:order-3">
            <a
              href="https://github.com/JeeeN4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dije-naufal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:dijenaufala@gmail.com"
              className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Email
            </a>
          </div>

          {/* 4. TOMBOL BACK TO TOP (KHUSUS MOBILE - md:hidden) */}
          <div className="w-full flex justify-center md:hidden order-3 pt-2">
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="card-retro group flex items-center justify-center gap-2 border-2 border-border bg-card px-6 py-3 text-xs font-bold transition-all duration-200 active:-translate-y-0.5 active:bg-primary active:text-white shadow-[3px_3px_0px_0px_var(--border)] active:shadow-[1px_1px_0px_0px_var(--border)] cursor-pointer w-full max-w-xs"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="h-4 w-4 shrink-0 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
