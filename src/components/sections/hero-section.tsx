import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  type Icon as IconType,
  IconMail,
  IconSend,
} from "@tabler/icons-react"
import socialLinks from "@/data/social-links.json"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type SocialId = "github" | "linkedin" | "email"

type SocialLink = {
  id: SocialId
  label: string
  href: string
  external?: boolean
}

const SOCIAL_ICONS: Record<SocialId, IconType> = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  email: IconMail,
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-circle-bg relative isolate flex min-h-svh w-full items-center overflow-hidden pt-32 pb-12"
    >
      <div className="hero-circle hero-circle-one pointer-events-none absolute -top-24 -right-24 size-112 rounded-full" />
      <div className="hero-circle hero-circle-two pointer-events-none absolute -bottom-32 -left-20 size-88 rounded-full" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-background/30 to-background" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium tracking-wide text-foreground/80 uppercase dark:bg-muted/60 dark:text-muted-foreground">
            <span className="mt-0.5 mr-2 size-2 rounded-full bg-emerald-500" />
            Available for new opportunities
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Mitul Movaliya
          </h1>
          <h2 className="mt-3 text-xl font-medium text-foreground/90 sm:text-2xl dark:text-muted-foreground">
            Full Stack Developer
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base dark:text-muted-foreground">
            I build clean, scalable web applications with thoughtful user
            experiences, modern frontend architecture, and reliable backend
            systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              download
            >
              <IconDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <IconSend />
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {(socialLinks as SocialLink[]).map((social) => {
              const SocialIcon = SOCIAL_ICONS[social.id]

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noreferrer" : undefined}
                  aria-label={social.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon-sm" })
                  )}
                >
                  <SocialIcon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
