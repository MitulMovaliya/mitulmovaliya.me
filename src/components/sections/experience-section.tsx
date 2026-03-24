import experienceData from "@/data/experience.json"

type ExperienceRole = {
  jobTitle: string
  jobType: string
  description: string
  keyContributions: string[]
  timeline: {
    start: string
    end: string
  }
  currentlyWorking: boolean
}

type ExperienceCompany = {
  companyName: string
  roles: ExperienceRole[]
}

function renderContributionText(contribution: string) {
  return contribution
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, index) => {
      const isBold = part.startsWith("**") && part.endsWith("**")

      if (isBold) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
      }

      return <span key={`${part}-${index}`}>{part}</span>
    })
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Timeline Of Work
          </h2>
        </div>

        <div className="relative mt-12 pl-7 sm:pl-10">
          <div className="pointer-events-none absolute top-0 left-2 h-full w-px bg-border sm:left-3" />

          {(experienceData as ExperienceCompany[]).map((company) => (
            <article
              key={company.companyName}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute top-0 -left-7 size-4 rounded-full border-2 border-background bg-primary sm:-left-9" />

              <div className="mb-5 flex items-center gap-3">
                <h3 className="text-lg font-semibold tracking-tight">
                  {company.companyName}
                </h3>
              </div>

              <div className="relative ml-0 space-y-4 sm:ml-4">
                <div className="pointer-events-none absolute top-0 -left-5 h-full w-px border-l border-dashed border-border" />

                {company.roles.map((role) => (
                  <div
                    key={`${company.companyName}-${role.jobTitle}-${role.timeline.start}`}
                    className="group relative rounded-2xl border border-border bg-card/80 p-5 transition-colors hover:bg-card"
                  >
                    <div className="absolute top-0 -left-6.5 size-3 rounded-full bg-primary ring-4 ring-background" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-semibold tracking-tight sm:text-lg">
                          {role.jobTitle}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {role.jobType}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full border border-border bg-muted/70 px-2.5 py-1 text-muted-foreground">
                          {role.timeline.start} - {role.timeline.end}
                        </span>
                        {role.currentlyWorking ? (
                          <span className="rounded-full border border-emerald-300/60 bg-emerald-500/10 px-2.5 py-1 font-medium text-emerald-600 dark:border-emerald-500/40 dark:text-emerald-400">
                            Currently Working
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {role.description}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs font-medium tracking-wide text-foreground/80 uppercase dark:text-muted-foreground">
                        Key Contribution
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                        {role.keyContributions.map((contribution) => (
                          <li key={contribution} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span>{renderContributionText(contribution)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
