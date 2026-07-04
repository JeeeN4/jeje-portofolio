import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.dijenaufal.dev";

  return {
    rules: {
      userAgent: "*", // Mengizinkan semua robot crawler (Googlebot, Bingbot, dll)
      allow: "/",     // Mengizinkan penelusuran ke seluruh halaman web
      disallow: [],   // Tidak ada halaman yang disembunyikan
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Menunjuk ke lokasi sitemap yang kita buat di Pilar 2
    host: baseUrl,
  };
}