import { Terminal, Cpu, Compass, GitBranch } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-(--section-card)">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
            ABOUT THE EXPLORER
          </p>
          <h2 className="headline-md">
            Building Mobile Applications and Intelligent Systems
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* KIRI: Story & Background */}
          <div className="card-retro p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4 border-b-2 border-border/20 pb-3">
                <Compass className="text-primary h-5 w-5 animate-spin-slow" />
                <h3 className="heading-primary text-xl">My Journey</h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  My digital expedition started with mobile application
                  development, crafting intuitive user interfaces and smooth
                  experiences. As my curiosity grew, my journey naturally
                  expanded into the mechanics running behind the scenes scalable
                  backend systems and data structures.
                </p>
                <p>
                  Today, I navigate at the intersection of software engineering
                  and artificial intelligence. I focus on building intelligent
                  digital ecosystems where responsive mobile apps are empowered
                  by predictive models and data-driven AI technologies.
                </p>
              </div>
            </div>

            {/* Quote / Philosophy kecil di bawah cerita */}
            <div className="mt-8 border-l-4 border-primary bg-background/50 p-4 text-mono text-xs text-foreground italic">
              &quot;Always exploring new tech stacks, writing clean code, and
              turning complex problems into elegant solutions.&quot;
            </div>
          </div>

          {/* KANAN: Explorer's Mindset / Core Attributes (Menggantikan Current Focus yg duplikat) */}
          <div className="card-retro p-8">
            <h3 className="mb-6 heading-primary text-xl border-b-2 border-border/20 pb-3">
              Explorer&apos;s Attributes
            </h3>

            <div className="space-y-5">
              {/* Attribute 1 */}
              <div className="group border-2 border-border/60 bg-background/40 p-4 transition-all hover:border-primary hover:translate-x-1">
                <div className="flex items-center gap-3 mb-1">
                  <Terminal className="text-primary h-5 w-5 shrink-0" />
                  <h4 className="font-heading font-bold text-base group-hover:text-primary transition-colors">
                    Clean & Scalable Code
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Writing maintainable architecture for mobile and backend
                  systems that can grow effortlessly over time.
                </p>
              </div>

              {/* Attribute 2 */}
              <div className="group border-2 border-border/60 bg-background/40 p-4 transition-all hover:border-primary hover:translate-x-1">
                <div className="flex items-center gap-3 mb-1">
                  <Cpu className="text-primary h-5 w-5 shrink-0" />
                  <h4 className="font-heading font-bold text-base group-hover:text-primary transition-colors">
                    AI & Machine Learning
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Exploring data-driven intelligence and predictive models to
                  understand how AI can enhance modern software applications.
                </p>
              </div>

              {/* Attribute 3 */}
              <div className="group border-2 border-border/60 bg-background/40 p-4 transition-all hover:border-primary hover:translate-x-1">
                <div className="flex items-center gap-3 mb-1">
                  <GitBranch className="text-primary h-5 w-5 shrink-0" />
                  <h4 className="font-heading font-bold text-base group-hover:text-primary transition-colors">
                    Continuous Adaptation
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground pl-8">
                  Thriving in dynamic environments using version control, agile
                  debugging, and modern development workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
