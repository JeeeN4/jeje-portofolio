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
      className="card-retro group relative flex h-9 w-9 items-center justify-center border-2 border-border bg-card text-foreground shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200 active:-translate-y-0.5 active:bg-primary active:text-primary-foreground sm:hover:-translate-y-0.5 sm:hover:bg-primary sm:hover:text-primary-foreground sm:hover:border-primary cursor-pointer"
    >
      <Sun className="h-4 w-4 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 text-primary group-hover:text-primary-foreground" />
    </button>
  );
}
