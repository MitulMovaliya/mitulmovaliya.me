import skillsData from "@/data/skills.json"

type SkillGroup = {
  category: string
  items: string[]
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 max-sm:py-10">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tech Stack & Tools
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {(skillsData as SkillGroup[]).map((group) => (
          <article
            key={group.category}
            className="card-lift rounded-2xl border border-border bg-card/80 p-5"
          >
            <h3 className="text-base font-semibold tracking-tight">
              {group.category}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={`${group.category}-${skill}`}
                  className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
