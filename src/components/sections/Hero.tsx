"use client"; // <-- Wajib ada di baris paling atas untuk framer-motion

import Image from "next/image";
import { FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react"; // <-- 1. Import useState untuk interaktivitas layar sentuh (mobile)
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Hero() {
  // State untuk menyimpan apakah foto sedang di-tap/klik di layar ponsel
  const [isPixelMode, setIsPixelMode] = useState(false);

  return (
    <section id="home" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* GELOMBANG 1: Left - Profile Image (Muncul instan / Delay 0) */}
          <ScrollReveal delay={0}>
            <div className="flex justify-center lg:justify-start">
              {/* --- ANIMASI FLOATING & HYBRID (HOVER + TOUCH/CLICK) PIXEL EFFECT --- */}
              <motion.div
                animate={{
                  y: [0, -8, 0], // Naik 8px lalu turun lagi
                }}
                whileHover={{
                  scale: 1.02, // Zoom sedikit saat mouse di atas foto
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.3,
                  },
                }}
                /* 2. Tambahkan onClick untuk memicu mode pixel saat foto disentuh/di-tap di HP */
                onClick={() => setIsPixelMode(!isPixelMode)}
                /* Gunakan conditional class atau group agar bereaksi baik oleh mouse (hover) maupun jari (isPixelMode) */
                className={`card-retro group relative p-4 cursor-pointer shadow-[6px_6px_0px_0px_var(--border)] transition-all duration-300 ${
                  isPixelMode
                    ? "shadow-[8px_8px_0px_0px_var(--primary)]"
                    : "hover:shadow-[8px_8px_0px_0px_var(--primary)]"
                }`}
              >
                {/* Kontainer Gambar */}
                <div className="relative aspect-square w-full max-w-[320px] overflow-hidden bg-background">
                  {/* 1. GAMBAR PIXEL (Di Belakang) */}
                  <Image
                    src="/profile-dije-pixel.png" // <-- Masukkan nama file pixel art Anda di sini!
                    alt="Dije Naufal Pixel Mode"
                    width={320}
                    height={320}
                    loading="eager"
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
                      isPixelMode ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />

                  {/* 2. LAPISAN EFEK MONITOR CRT/SCANLINE (Muncul saat di-hover ATAU saat di-tap di HP) */}
                  <div
                    className={`pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] transition-opacity duration-300 ${
                      isPixelMode
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* 3. GAMBAR ASLI (Di Depan - Memudar saat di-hover ATAU di-tap di HP) */}
                  <Image
                    src="/profile-dije.png"
                    alt="Dije Naufal"
                    width={320}
                    height={320}
                    priority
                    className={`relative z-20 h-auto w-full max-w-[320px] object-cover transition-all duration-500 ease-out ${
                      isPixelMode
                        ? "scale-95 opacity-0"
                        : "group-hover:scale-95 group-hover:opacity-0"
                    }`}
                  />
                </div>

                {/* Badge Status Tambahan Ala Game Arcade di Pojok Foto */}
                <div
                  className={`absolute -bottom-3 right-4 z-30 border-2 border-border px-2.5 py-0.5 text-[10px] font-bold text-mono tracking-widest shadow-[2px_2px_0px_0px_var(--border)] transition-colors ${
                    isPixelMode
                      ? "bg-primary text-white"
                      : "bg-card text-primary group-hover:bg-primary group-hover:text-white"
                  }`}
                >
                  <span
                    className={isPixelMode ? "hidden" : "group-hover:hidden"}
                  >
                    LVL. 21
                  </span>
                  <span
                    className={
                      isPixelMode ? "inline" : "hidden group-hover:inline"
                    }
                  >
                    PIXEL MODE
                  </span>
                </div>
              </motion.div>
              {/* --------------------------------------------------------------- */}
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <div>
            {/* GELOMBANG 2: Badge, Nama, dan Keahlian (Delay 0.2 detik) */}
            <ScrollReveal delay={0.2}>
              <div>
                {/* 1. Badge RPG */}
                <div className="mb-4 inline-block border border-border bg-card px-3 py-1 text-xs font-bold tracking-widest text-primary text-mono">
                  EXPLORING MOBILE, AI & ML
                </div>

                {/* 2. Nama Anda (H1 utama) */}
                <h1 className="display-lg mb-3 leading-none">
                  Hi, I&apos;m <br className="hidden sm:inline" />
                  <span className="text-primary underline decoration-4 underline-offset-8">
                    Dije Naufal
                  </span>
                </h1>

                {/* 3. Keahlian Utama (H2 / Subheadline) */}
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                  Mobile App Developer{" "}
                  <span className="text-secondary font-mono font-normal">
                    &
                  </span>{" "}
                  AI Learner
                </h2>
              </div>
            </ScrollReveal>

            {/* GELOMBANG 3: Deskripsi & Tombol Action (Delay 0.4 detik) */}
            <ScrollReveal delay={0.4}>
              <div>
                {/* 4. Deskripsi Singkat */}
                <p className="body-lg mb-8 max-w-xl text-muted-foreground">
                  Building intelligent mobile experiences by combining mobile
                  development, data-driven insights, and AI technologies.
                </p>

                {/* 5. Tombol Action (Download CV & View Projects) */}
                <div className="flex flex-wrap gap-4 text-mono text-sm font-bold">
                  {/* Tombol Download CV (Primary Button) */}
                  <a
                    href="/cv-dije-naufal.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="group bg-primary text-primary-foreground border-2 border-primary px-6 py-3 uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[5px_5px_0px_0px_var(--primary)] flex items-center gap-2.5"
                  >
                    <FileDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                    <span>Download CV</span>
                  </a>

                  {/* Tombol View Projects (Secondary Button) */}
                  <a
                    href="#projects"
                    className="border-2 border-border bg-card px-6 py-3 uppercase tracking-wider text-foreground transition-all hover:-translate-y-1 hover:bg-primary hover:text-white hover:border-primary shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[5px_5px_0px_0px_var(--primary)]"
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
