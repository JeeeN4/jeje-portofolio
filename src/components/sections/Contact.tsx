import { Mail, GitBranch, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    /* Sintaks Tailwind v4: bg-(--section-main) */
    <section id="contact" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
            FINAL OUTPOST
          </p>
          {/* 1. Perbaikan entitas kutip pada Let's */}
          <h2 className="headline-md">Let&apos;s Build Something Together</h2>
        </div>

        {/* Contact Container Bergaya Terminal Retro */}
        <div className="card-retro mx-auto max-w-3xl p-8 md:p-10 border-2 border-border shadow-[6px_6px_0px_0px_var(--border)] relative overflow-hidden">
          {/* Aksen hiasan terminal di pojok kiri atas (Opsional) */}
          {/* Status Bar Terminal - Background Hijau agar Kontras & Nyala */}
          <div className="absolute top-0 left-0 bg-primary px-3.5 py-1.5 text-mono text-[10px] font-bold text-primary-foreground uppercase tracking-widest flex items-center gap-2 border-b-2 border-r-2 border-border shadow-sm">
            {/* Titik putih berdenyut sebagai indikator aktif */}
            <span className="h-2 w-2 rounded-full bg-white animate-ping" />
            <span>STATUS: ONLINE & OPEN FOR COLLABORATION</span>
          </div>

          {/* 2. Perbaikan entitas kutip pada let's */}
          <p className="mt-4 mb-10 text-center text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mx-auto">
            Interested in mobile application development, AI integrations, or
            building something impactful together? Feel free to drop a message
            at my outpost and let&apos;s connect.
          </p>

          {/* 3. Grid Kontak dengan Interaktivitas Maksimal */}
          <div className="grid gap-5 md:grid-cols-3 text-mono font-bold text-sm">
            {/* EMAIL BUTTON */}
            <a
              href="mailto:dijenaufala@gmail.com"
              className="card-retro group flex items-center justify-between p-4 border-2 border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[5px_5px_0px_0px_var(--primary)]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 border border-border/50 bg-background group-hover:border-primary group-hover:text-primary transition-colors">
                  <Mail size={18} />
                </div>
                <span>Email</span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* LINKEDIN BUTTON */}
            <a
              href="https://linkedin.com/in/dije-naufal"
              target="_blank"
              rel="noopener noreferrer"
              className="card-retro group flex items-center justify-between p-4 border-2 border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[5px_5px_0px_0px_var(--primary)]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 border border-border/50 bg-background group-hover:border-primary group-hover:text-primary transition-colors">
                  {/* Diganti ke ikon Linkedin resmi dari lucide-react */}
                  <ExternalLink size={18} />
                </div>
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* GITHUB BUTTON */}
            <a
              href="https://github.com/JeeeN4"
              target="_blank"
              rel="noopener noreferrer"
              className="card-retro group flex items-center justify-between p-4 border-2 border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 shadow-[3px_3px_0px_0px_var(--border)] hover:shadow-[5px_5px_0px_0px_var(--primary)]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 border border-border/50 bg-background group-hover:border-primary group-hover:text-primary transition-colors">
                  <GitBranch size={18} />
                </div>
                <span>GitHub</span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </div>

          {/* Catatan kecil di bawah tombol */}
          <div className="mt-10 text-center text-mono text-xs text-muted-foreground/80 border-t border-border/20 pt-6">
            <span>⚡ Usually responds within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
