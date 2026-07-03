import { Smartphone, Server, Bot, Brain } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const objectives = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building intuitive and performant cross-platform applications.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable APIs and data-driven applications.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Exploring predictive models and intelligent systems.",
  },
  {
    icon: Bot,
    title: "AI Engineering",
    description: "Learning modern AI tools and practical applications.",
  },
];

export default function Objectives() {
  return (
    <section id="objectives" className="section-padding bg-(--section-alt)">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center md:mb-12">
            <p className="text-mono text-primary mb-2 font-bold tracking-widest">
              QUEST OBJECTIVES
            </p>
            <h2 className="headline-md">Current Areas of Focus</h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {objectives.map((item, index) => {
            const Icon = item.icon;

            return (
              /* OPTIMASI MOBILE: Delay dipercepat (index * 0.1) agar saat di-scroll di HP tidak lambat */
              <ScrollReveal
                key={item.title}
                delay={index * 0.1}
                className="h-full"
              >
                <div className="card-retro group flex flex-col justify-between p-6 cursor-default h-full transition-all duration-200 active:-translate-y-1 sm:hover:-translate-y-1">
                  <div>
                    {/* OPTIMASI MOBILE: Ditambahkan group-active: untuk merespons ketukan jempol di HP */}
                    <div className="mb-5 w-fit border-2 border-border bg-card p-3 text-primary shadow-[2px_2px_0px_0px_var(--border)] transition-all group-hover:-translate-y-1 group-active:-translate-y-1 group-hover:bg-primary group-active:bg-primary group-hover:text-white group-active:text-white">
                      <Icon size={26} />
                    </div>

                    <h3 className="heading-primary mb-3 text-lg transition-colors group-hover:text-primary group-active:text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
