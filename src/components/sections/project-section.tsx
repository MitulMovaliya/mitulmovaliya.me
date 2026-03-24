import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"

import projectsData from "@/data/projects.json"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Project = {
  title: string
  description: string
  coverImage: string
  githubLink: string
  liveLink: string
  techStack: string[]
}

export function ProjectSection() {
  return (
    <section id="project" className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Showcase Projects
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {(projectsData as Project[]).map((project) => (
          <article
            key={project.title}
            className="card-lift overflow-hidden rounded-2xl border border-border bg-card/80"
          >
            <div className="h-56 w-full overflow-hidden bg-muted/40 sm:h-72">
              <img
                src={project.coverImage}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open ${project.title} source code on GitHub`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" })
                  )}
                >
                  <IconBrandGithub />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open live demo for ${project.title}`}
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" })
                  )}
                >
                  <IconExternalLink />
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
