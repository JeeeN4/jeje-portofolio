import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";

import "./globals.css";
// 1. Import ThemeProvider yang sudah dibuat (sesuaikan path jika berbeda)
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Dije Naufal",
    template: "%s | Dije Naufal",
  },
  description:
    "Data Analyst & Software Developer building data-driven and IoT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* 2. Tambahkan suppressHydrationWarning di sini agar aman dari error mismatch Next.js */
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {/* 3. Bungkus seluruh isi aplikasi dengan ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Jika Anda memasang Navbar dan Footer secara global di layout, taruh di sini:
              <Navbar /> 
          */}
          <main className="grow">{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
