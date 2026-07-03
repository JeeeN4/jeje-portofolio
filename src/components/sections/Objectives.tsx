import { Smartphone, Server, Bot, Brain } from "lucide-react";

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
    /* Menggunakan sintaks resmi Tailwind v4: bg-(--section-alt) */
    <section id="objectives" className="section-padding bg-(--section-alt)">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest">
            QUEST OBJECTIVES
          </p>
          <h2 className="headline-md">Current Areas of Focus</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {objectives.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="card-retro group flex flex-col p-6 cursor-default"
              >
                {/* Kotak Ikon Retro: Ditambahkan w-fit agar kotaknya pas seukuran ikon saja */}
                <div className="mb-5 w-fit border-2 border-border bg-card p-3 text-primary shadow-[2px_2px_0px_0px_var(--border)] transition-all group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="heading-primary mb-3 text-lg transition-colors group-hover:text-primary">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
