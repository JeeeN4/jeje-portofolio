"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // Untuk efek berurutan (stagger)
}

export default function ScrollReveal({
  children,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Mulai dari transparan dan sedikit di bawah
      whileInView={{ opacity: 1, y: 0 }} // Muncul dan naik ke posisi asli saat terlihat layar
      viewport={{ once: true, margin: "-100px" }} // Animasi jalan sekali saja saat masuk layar
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
