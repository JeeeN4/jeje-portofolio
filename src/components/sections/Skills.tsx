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
    /* Menggunakan sintaks Tailwind v4: bg-(--section-main) */
    <section id="skills" className="section-padding bg-(--section-main)">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-mono text-primary mb-2 font-bold tracking-widest uppercase">
            THE SKILL TREE
          </p>
          <h2 className="headline-md">Technical Mastery & Tools</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="card-retro p-6 flex flex-col justify-between group transition-all hover:-translate-y-1 cursor-default"
            >
              <div>
                {/* Header Kartu: Judul & Level Badge */}
                <div className="mb-3 flex items-center justify-between border-b border-border/20 pb-3">
                  <h3 className="heading-primary text-lg group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>

                  {/* Badge Status bertema Retro RPG */}
                  <span className="text-mono text-xs font-bold px-2.5 py-1 bg-primary/10 border border-primary/30 text-primary">
                    [ {skill.level.toUpperCase()} ]
                  </span>
                </div>

                {/* Deskripsi */}
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tech Stack Badges (Retro Tags) - Sekarang menjadi fokus utama di bawah kartu */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/10">
                {skill.tech.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-background/60 px-3 py-1 text-xs text-mono font-medium text-foreground transition-all group-hover:border-primary/60 group-hover:bg-primary/5"
                  >
                    # {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
