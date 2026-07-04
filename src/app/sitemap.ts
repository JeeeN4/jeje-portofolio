import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti dengan domain Vercel Anda nanti
  const baseUrl = "https://www.dijenaufal.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0, // Prioritas tertinggi karena ini halaman utama portofolio
    },
  ];
}