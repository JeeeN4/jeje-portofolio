import { GraduationCap, Award, Briefcase, Flame } from "lucide-react";

const journey = [
  {
    period: "2023 - Present",
    title: "Information Systems Student (KDD Track)",
    category: "ACADEMIC",
    icon: GraduationCap,
    isActive: true, // <-- Penanda aktivitas yang masih berjalan
    description:
      "Pursuing an Information Systems degree with a specialization in Knowledge Discovery in Databases (KDD), focusing on data mining, machine learning, and intelligent systems.",
  },
  {
    period: "Jul 2025 - Nov 2025",
    title: "Machine Learning Cohort - Dicoding Batch 8",
    category: "BOOTCAMP / SCHOLARSHIP",
    icon: Award,
    isActive: false,
    description:
      "Selected as a Machine Learning cohort in Dicoding Batch 8, participating in an intensive 5-month learning program covering machine learning fundamentals, data processing, model evaluation, and AI application development.",
  },
  {
    period: "Feb 2026 - Jun 2026",
    title: "Mobile Developer Intern - Ascendemy",
    category: "PROFESSIONAL INTERNSHIP",
    icon: Briefcase,
    isActive: false,
    description:
      "Contributed to the development of FitSense, an IoT-based fitness monitoring platform involving mobile application development, backend integration, and realtime data communication.",
  },
  {
    period: "Jul 2026 - Present",
    title: "Extended Internship - FitSense Development",
    category: "PROFESSIONAL EXPEDITION",
    icon: Flame, // Ikon api untuk menunjukkan proyek yang sedang hangat/intensif
    isActive: true,
    description:
      "Continuing the development of FitSense by enhancing mobile application features, realtime monitoring, session management, and preparing future machine learning integration.",
  },
];

export default function Experience() {
  return (
    /* Menggunakan sintaks Tailwind v4: bg-(--section-main) */
    <section id="experience" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
            ADVENTURE LOG
          </p>
          <h2 className="headline-md">My Journey So Far</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-3xl">
          {/* Garis Vertikal Utama */}
          <div className="absolute left-6 top-2 h-[calc(100%-2rem)] w-0.5 bg-border/60" />

          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative mb-12 pl-16 transition-all hover:translate-x-1"
              >
                {/* Kotak Node / Checkpoint Icon */}
                <div
                  className={`absolute left-3 top-1.5 flex h-7 w-7 items-center justify-center border-2 transition-colors ${
                    item.isActive
                      ? "border-primary bg-primary text-white shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                      : "border-border bg-card text-muted-foreground group-hover:border-primary group-hover:text-primary"
                  }`}
                >
                  <Icon size={14} />
                </div>

                {/* Content Box */}
                <div className="card-retro p-6 border-2 border-border/80 bg-card/60 transition-colors group-hover:border-primary/50">
                  {/* Header: Periode, Kategori, & Badge Active */}
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-border/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-mono text-xs font-bold text-primary tracking-wider">
                        {item.period}
                      </span>
                      <span className="text-mono text-[10px] bg-background px-2 py-0.5 border border-border/40 text-muted-foreground">
                        [ {item.category} ]
                      </span>
                    </div>

                    {/* Badge ACTIVE QUEST jika masih berlangsung */}
                    {item.isActive && (
                      <span className="flex items-center gap-1.5 text-mono text-[10px] font-bold text-primary bg-primary/10 border border-primary/30 px-2 py-0.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  {/* Judul Pengalaman */}
                  <h3 className="heading-primary mt-1 text-lg md:text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
