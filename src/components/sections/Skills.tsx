import ScrollReveal from "@/components/ui/ScrollReveal";

const skills = [
  {
    title: "Mobile Development",
    description:
      "Building responsive, modern, and high-performance cross-platform mobile applications.",
    level: "Advanced",
    tech: ["Flutter", "React Native", "Firebase", "Dart", "State Management"],
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable REST APIs, robust authentication, and relational database schemas.",
    level: "Intermediate",
    tech: ["Node.js", "Express", "PostgreSQL", "REST API", "JWT"],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Exploring predictive modeling, data processing, and modern AI tools.",
    level: "Exploring", // atau "Learning" -> Jujur dan keren!
    tech: ["Python", "Scikit-Learn", "Pandas", "OpenAI API", "LangChain"],
  },
  {
    title: "Dev Tools & Workflow",
    description:
      "Essential instruments for modern software engineering, version control, and agile coding.",
    level: "Proficient",
    tech: ["Git", "GitHub", "VS Code", "Terminal", "Postman", "API Testing"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-10 text-center md:mb-12">
            <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
              THE SKILL TREE
            </p>
            <h2 className="headline-md">Technical Mastery & Tools</h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {skills.map((skill, index) => (
            /* OPTIMASI MOBILE: delay dipercepat (index * 0.1) agar saat di-scroll cepat di HP tidak delay lambat */
            <ScrollReveal
              key={skill.title}
              delay={index * 0.1}
              className="h-full"
            >
              {/* OPTIMASI MOBILE: Ditambahkan active:-translate-y-1 dan active:border-primary untuk respons sentuhan jempol */}
              <div className="card-retro p-6 flex flex-col justify-between group transition-all duration-200 active:-translate-y-1 active:border-primary sm:hover:-translate-y-1 sm:hover:border-primary cursor-default h-full">
                <div>
                  {/* Header Kartu: Judul & Level Badge */}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-border/20 pb-3">
                    <h3 className="heading-primary text-lg group-hover:text-primary group-active:text-primary transition-colors">
                      {skill.title}
                    </h3>

                    <span className="text-mono text-xs font-bold px-2.5 py-1 bg-primary/10 border border-primary/30 text-primary">
                      [ {skill.level.toUpperCase()} ]
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/10">
                  {skill.tech.map((item) => (
                    /* OPTIMASI MOBILE: Ditambahkan active:border-primary/60 & active:bg-primary/10 */
                    <span
                      key={item}
                      className="border border-border bg-background/60 px-3 py-1 text-xs text-mono font-medium text-foreground transition-all active:border-primary/60 active:bg-primary/10 sm:group-hover:border-primary/60 sm:group-hover:bg-primary/5"
                    >
                      # {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
