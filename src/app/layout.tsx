import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
// --> 1. IMPORT VERCEL ANALYTICS DI SINI <--
import { Analytics } from "@vercel/analytics/react";

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
  // 1. Ganti dengan domain Vercel/kustom Anda nanti (wajib agar gambar OpenGraph terbaca!)
  metadataBase: new URL("https://www.dijenaufal.dev"),

  title: {
    default: "Dije Naufal | Mobile App Developer & AI Learner",
    template: "%s | Dije Naufal",
  },
  description:
    "Portfolio of Dije Naufal, an Information Systems student specializing in Mobile Development, Machine Learning, AI Integration, and Backend Systems.",
  keywords: [
    "Dije Naufal",
    "Mobile App Developer",
    "Flutter Developer",
    "React Native Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "Backend Developer",
    "Software Engineer Indonesia",
    "FitSense",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Dije Naufal", url: "https://github.com/JeeeN4" }],
  creator: "Dije Naufal",
  publisher: "Dije Naufal",

  // 2. OpenGraph (Tampilan saat link portofolio dishare di WhatsApp, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_ID", // atau "en_US" jika ingin menargetkan Indonesia
    url: "https://www.dijenaufal.dev",
    title: "Dije Naufal | Mobile App Developer & AI Learner",
    description:
      "Explore the digital wayfarer portfolio of Dije Naufal. Building intelligent mobile experiences, IoT platforms (FitSense), and scalable systems.",
    siteName: "Dije Naufal Portfolio",
    // Gambar preview akan otomatis diambil dari file opengraph-image.png di folder app (Pilar 4)
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dije Naufal Portfolio",
      },
    ],
  },

  // 3. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Dije Naufal | Mobile App Developer & AI Learner",
    description:
      "Building intelligent mobile experiences by combining mobile development, data-driven insights, and AI technologies.",
    images: ["/opengraph-image.png"],
  },

  // 4. Mencegah indeks pada halaman error atau penyesuaian robot crawler
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

        {/* --> 2. PASANG RADAR ANALYTICS DI SINI <-- */}
        <Analytics />
      </body>
    </html>
  );
}
