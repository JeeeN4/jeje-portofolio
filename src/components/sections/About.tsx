import { Terminal, Cpu, Compass, GitBranch } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-padding bg-(--section-card)">
      <div className="container-custom">
        {/* BLOK 1: Section Header */}
        <ScrollReveal>
          <div className="mb-10 text-center md:mb-12 md:text-left">
            <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
              ABOUT THE EXPLORER
            </p>
            <h2 className="headline-md">
              Building Mobile Applications and Intelligent Systems
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start">
          {/* BLOK 2: KIRI - Story & Background */}
          <ScrollReveal delay={0.2} className="h-full">
            {/* OPTIMASI MOBILE: p-6 di HP, sm:p-8 di Tablet/PC agar teks tidak terjepit */}
            <div className="card-retro p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-4 border-b-2 border-border/20 pb-3">
                  <Compass className="text-primary h-5 w-5 animate-spin-slow shrink-0" />
                  <h3 className="heading-primary text-xl">My Journey</h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    My digital expedition started with mobile application
                    development, crafting intuitive user interfaces and smooth
                    experiences. As my curiosity grew, my journey naturally
                    expanded into the mechanics running behind the
                    scenes—scalable backend systems and data structures.
                  </p>
                  <p>
                    Today, I navigate at the intersection of software
                    engineering and artificial intelligence. I focus on building
                    intelligent digital ecosystems where responsive mobile apps
                    are empowered by predictive models and data-driven AI
                    technologies.
                  </p>
                </div>
              </div>

              {/* Quote kecil di bawah */}
              <div className="mt-8 border-l-4 border-primary bg-background/50 p-3 sm:p-4 text-mono text-xs text-foreground italic">
                &quot;Always exploring new tech stacks, writing clean code, and
                turning complex problems into elegant solutions.&quot;
              </div>
            </div>
          </ScrollReveal>

          {/* BLOK 3: KANAN - Explorer's Attributes */}
          <ScrollReveal delay={0.4} className="h-full">
            <div className="card-retro p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="mb-6 heading-primary text-xl border-b-2 border-border/20 pb-3">
                  Explorer&apos;s Attributes
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  {/* Attribute 1 - OPTIMASI MOBILE: Ditambahkan active:border-primary & active:translate-x-1 untuk respons sentuhan jari */}
                  <div className="group border-2 border-border/60 bg-background/40 p-4 transition-all hover:border-primary active:border-primary sm:hover:translate-x-1 active:translate-x-1 cursor-default">
                    <div className="flex items-center gap-3 mb-1">
                      <Terminal className="text-primary h-5 w-5 shrink-0" />
                      <h4 className="font-heading font-bold text-base group-hover:text-primary group-active:text-primary transition-colors">
                        Clean & Scalable Code
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">
                      Writing maintainable architecture for mobile and backend
                      systems that can grow effortlessly over time.
                    </p>
                  </div>

                  {/* Attribute 2 */}
                  <div className="group border-2 border-border/60 bg-background/40 p-4 transition-all hover:border-primary active:border-primary sm:hover:translate-x-1 active:translate-x-1 cursor-default">
                    <div className="flex items-center gap-3 mb-1">
                      <Cpu className="text-primary h-5 w-5 shrink-0" />
                      <h4 className="font-heading font-bold text-base group-hover:text-primary group-active:text-primary transition-colors">
                        AI & Machine Learning
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">
                      Exploring data-driven intelligence and predictive models
                      to understand how AI can enhance modern software
                      applications.
                    </p>
                  </div>

                  {/* Attribute 3 */}
                  <div className="group border-2 border-border/60 bg-background/40 p-4 transition-all hover:border-primary active:border-primary sm:hover:translate-x-1 active:translate-x-1 cursor-default">
                    <div className="flex items-center gap-3 mb-1">
                      <GitBranch className="text-primary h-5 w-5 shrink-0" />
                      <h4 className="font-heading font-bold text-base group-hover:text-primary group-active:text-primary transition-colors">
                        Continuous Adaptation
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground pl-8">
                      Thriving in dynamic environments using version control,
                      agile debugging, and modern development workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
