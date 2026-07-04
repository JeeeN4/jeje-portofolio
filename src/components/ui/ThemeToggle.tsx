"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Fungsi kosong untuk memenuhi syarat subscribe pada useSyncExternalStore
const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Cara modern React untuk mendeteksi client vs server tanpa useEffect/useState
  // Client snapshot: true | Server (SSR) snapshot: false
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  // Selama di server (SSR) atau sebelum ter-mount di client, tampilkan placeholder kosong
  if (!mounted) {
    return (
      <div className="h-9 w-9 border-2 border-border bg-card shadow-[2px_2px_0px_0px_var(--border)]" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="card-retro group relative flex h-9 w-9 items-center justify-center border-2 border-border bg-card text-foreground shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200 active:-translate-y-0.5 active:text-primary sm:hover:-translate-y-0.5 sm:hover:text-primary sm:hover:border-primary sm:hover:shadow-[2px_2px_0px_0px_var(--primary)] cursor-pointer"
    >
      {/* 1. IKON MATAHARI (Tampil di Light Mode, Gaib total di Dark Mode) */}
      <Sun className="h-4 w-4 transition-transform duration-300 ease-out sm:group-hover:rotate-45 sm:group-hover:scale-110 block dark:hidden" />

      {/* 2. IKON BULAN (Gaib di Light Mode, Tampil total di Dark Mode) */}
      <Moon className="h-4 w-4 transition-transform duration-300 ease-out sm:group-hover:-rotate-12 sm:group-hover:scale-110 hidden dark:block" />
    </button>
  );
}
