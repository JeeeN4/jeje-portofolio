import Image from "next/image";
import { Map, Layers, Activity } from "lucide-react";

export default function Projects() {
  return (
    /* Sintaks Tailwind v4: bg-(--section-card) */
    <section id="projects" className="section-padding bg-(--section-card)">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
            FEATURED QUEST
          </p>
          <h2 className="headline-md">Current Main Expedition</h2>
        </div>

        {/* Project Card */}
        <div className="card-retro overflow-hidden border-2 border-border shadow-[6px_6px_0px_0px_var(--border)]">
          <div className="grid lg:grid-cols-2">
            {/* KIRI: Image Preview */}
            <div className="group relative flex min-h-80 w-full items-center justify-center overflow-hidden border-b-2 border-border bg-card/50 lg:min-h-full lg:border-r-2 lg:border-b-0">
              <Image
                src="/projects/fitsense.png"
                alt="FitSense Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Preview Badge Ala Terminal */}
              <div className="absolute bottom-4 left-4 z-10 border border-border bg-background/90 backdrop-blur-xs px-3 py-1.5 text-[11px] font-bold text-mono tracking-wider text-muted-foreground shadow-sm">
                [ PREVIEW • COMING SOON ]
              </div>
            </div>

            {/* KANAN: Project Content */}
            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                {/* Status Bar */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border/20 pb-4">
                  <span className="text-mono text-xs font-bold text-primary tracking-wider flex items-center gap-1.5">
                    <Activity className="h-4 w-4 animate-pulse" />
                    IOT • MOBILE • HEALTH
                  </span>

                  {/* Active Badge dengan Pulsing Dot */}
                  <div className="flex items-center gap-2 border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-bold text-mono text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                    IN PROGRESS
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="heading-primary mb-4 text-3xl md:text-4xl">
                  FitSense
                </h3>

                {/* Description */}
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  Realtime fitness monitoring platform utilizing MQTT
                  communication, PostgreSQL storage, BLE wearable devices, and
                  interactive analytics dashboards for precision health
                  tracking.
                </p>

                {/* Tech Stack Badges (Konsisten dengan Skill Tree) */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {[
                    "Flutter",
                    "PostgreSQL",
                    "MQTT",
                    "Node.js",
                    "REST API",
                    "BLE",
                    "Realtime Data",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="border border-border bg-background/60 px-3 py-1 text-xs text-mono font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/5"
                    >
                      # {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons Bergaya Arcade Retro */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/20 text-mono text-xs md:text-sm font-bold">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-primary text-primary-foreground border-2 border-primary px-5 py-3 uppercase tracking-wider transition-transform hover:-translate-y-1 shadow-[3px_3px_0px_0px_var(--border)]"
                >
                  <Map className="h-4 w-4" />
                  <span>Roadmap</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 border-2 border-border bg-card px-5 py-3 uppercase tracking-wider text-foreground transition-transform hover:-translate-y-1 hover:bg-primary hover:text-white shadow-[3px_3px_0px_0px_var(--border)]"
                >
                  <Layers className="h-4 w-4" />
                  <span>Architecture</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
