import { Mail, GitBranch, ExternalLink, ArrowUpRight, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-10 text-center md:mb-12">
            <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
              FINAL OUTPOST
            </p>
            <h2 className="headline-md">Let&apos;s Build Something Together</h2>
          </div>
        </ScrollReveal>

        {/* Contact Container */}
        <ScrollReveal delay={0.2}>
          {/* OPTIMASI MOBILE: p-6 di HP, sm:p-8 di Tablet, md:p-10 di PC */}
          <div className="card-retro mx-auto max-w-3xl p-6 sm:p-8 md:p-10 border-2 border-border shadow-[6px_6px_0px_0px_var(--border)] relative overflow-hidden cursor-default">
            {/* Status Bar Terminal */}
            <div className="absolute top-0 left-0 bg-primary px-3 py-1 sm:px-3.5 sm:py-1.5 text-mono text-[9px] sm:text-[10px] font-bold text-primary-foreground uppercase tracking-widest flex items-center gap-2 border-b-2 border-r-2 border-border shadow-sm">
              <span className="h-2 w-2 rounded-full bg-white animate-ping" />
              <span>STATUS: ONLINE & OPEN FOR COLLABORATION</span>
            </div>

            <p className="mt-6 sm:mt-4 mb-8 sm:mb-10 text-center text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl mx-auto">
              Interested in mobile application development, AI integrations, or
              building something impactful together? Feel free to drop a message
              at my outpost and let&apos;s connect.
            </p>

            {/* Grid Kontak */}
            <div className="grid gap-4 sm:gap-5 md:grid-cols-3 text-mono font-bold text-sm">
              {/* EMAIL BUTTON - OPTIMASI MOBILE: Tambahkan active:-translate-y-1 & active:border-primary */}
              <a
                href="mailto:dijenaufala@gmail.com"
                className="card-retro group flex items-center justify-between p-4 border-2 border-border bg-card transition-all duration-200 active:-translate-y-1 active:border-primary active:bg-primary/10 sm:hover:-translate-y-1 sm:hover:border-primary sm:hover:bg-primary/5 shadow-[3px_3px_0px_0px_var(--border)] active:shadow-[5px_5px_0px_0px_var(--primary)] sm:hover:shadow-[5px_5px_0px_0px_var(--primary)]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-border/50 bg-background group-hover:border-primary group-active:border-primary group-hover:text-primary group-active:text-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>Email</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-active:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>

              {/* LINKEDIN BUTTON */}
              <a
                href="https://linkedin.com/in/dije-naufal"
                target="_blank"
                rel="noopener noreferrer"
                className="card-retro group flex items-center justify-between p-4 border-2 border-border bg-card transition-all duration-200 active:-translate-y-1 active:border-primary active:bg-primary/10 sm:hover:-translate-y-1 sm:hover:border-primary sm:hover:bg-primary/5 shadow-[3px_3px_0px_0px_var(--border)] active:shadow-[5px_5px_0px_0px_var(--primary)] sm:hover:shadow-[5px_5px_0px_0px_var(--primary)]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-border/50 bg-background group-hover:border-primary group-active:border-primary group-hover:text-primary group-active:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </div>
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-active:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>

              {/* GITHUB BUTTON */}
              <a
                href="https://github.com/JeeeN4"
                target="_blank"
                rel="noopener noreferrer"
                className="card-retro group flex items-center justify-between p-4 border-2 border-border bg-card transition-all duration-200 active:-translate-y-1 active:border-primary active:bg-primary/10 sm:hover:-translate-y-1 sm:hover:border-primary sm:hover:bg-primary/5 shadow-[3px_3px_0px_0px_var(--border)] active:shadow-[5px_5px_0px_0px_var(--primary)] sm:hover:shadow-[5px_5px_0px_0px_var(--primary)]"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-border/50 bg-background group-hover:border-primary group-active:border-primary group-hover:text-primary group-active:text-primary transition-colors">
                    <GitBranch size={18} />
                  </div>
                  <span>GitHub</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-active:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            </div>

            {/* Catatan kecil dengan ikon Zap */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-1.5 text-mono text-xs text-muted-foreground/80 border-t border-border/20 pt-6 text-center">
              <Zap
                size={14}
                className="text-primary fill-primary/20 animate-pulse shrink-0"
              />
              <span>Usually responds within 24 hours</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
