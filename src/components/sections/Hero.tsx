import Image from "next/image";
import { FileDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="card-retro p-4">
              <Image
                src="/profile.png"
                alt="Dije Naufal"
                width={320}
                height={320}
                priority
                className="h-auto w-full max-w-[320px] object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* 1. Badge RPG */}
            <div className="mb-4 inline-block border border-border bg-card px-3 py-1 text-xs font-bold tracking-widest text-primary text-mono">
              EXPLORING MOBILE, AI & ML
            </div>

            {/* 2. Nama Anda (Dibuat PALING BESAR sebagai H1 utama) */}
            <h1 className="display-lg mb-3 leading-none">
              Hi, I&apos;m <br className="hidden sm:inline" />
              <span className="text-primary underline decoration-4 underline-offset-8">
                Dije Naufal
              </span>
            </h1>

            {/* 3. Keahlian Utama (Dikecilkan menjadi H2 / Subheadline) */}
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
              Mobile App Developer{" "}
              <span className="text-secondary font-mono font-normal">&</span> AI
              Learner
            </h2>

            {/* 4. Deskripsi Singkat */}
            <p className="body-lg mb-8 max-w-xl text-muted-foreground">
              Building intelligent mobile experiences by combining mobile
              development, data-driven insights, and AI technologies.
            </p>

            {/* 5. Tombol Action (Download CV & View Projects) */}
            <div className="flex flex-wrap gap-4 text-mono text-sm">
              {/* Tombol Download CV (Primary Button) */}
              <a
                href="/cv-dije-naufal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group bg-primary text-primary-foreground border-2 border-primary px-6 py-3 font-bold uppercase tracking-wider transition-all hover:-translate-y-1 shadow-[3px_3px_0px_0px_var(--border)] flex items-center gap-2.5"
              >
                {/* 2. Gunakan ikon dari lucide-react dengan efek animasi hover yang halus */}
                <FileDown className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </a>

              {/* Tombol View Projects (Secondary Button) */}
              <a
                href="#projects"
                className="border-2 border-border bg-card px-6 py-3 font-bold uppercase tracking-wider text-foreground transition-transform hover:-translate-y-1 hover:bg-primary hover:text-white shadow-[3px_3px_0px_0px_var(--border)]"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
