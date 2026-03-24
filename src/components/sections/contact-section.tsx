import { useState } from "react"
import {
  IconBrandGithub,
  IconBrandLinkedin,
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

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    }

    setSubmitError("")
    setIsSubmitted(false)
    setIsSubmitting(true)

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        throw new Error("Missing Web3Forms access key")
      }
      //UPDATE SUBJECT TO INCLUDE NAME
      payload.subject = `portfolio: ${payload.subject} - from ${payload.name}`

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: payload.name,
          ...payload,
          botcheck: "",
        }),
      })

      const result = (await response.json()) as { success?: boolean }

      if (!response.ok || !result.success) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      form.reset()
    } catch {
      setSubmitError("Unable to send right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s Build Something Great
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Share your idea, role, or collaboration details and I&apos;ll get back
          to you soon.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="card-lift rounded-2xl border border-border bg-card/80 p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium">Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                autoComplete="name"
                minLength={2}
                className="h-10 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-ring"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
                className="h-10 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-ring"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2 text-sm">
            <span className="font-medium">Subject</span>
            <input
              type="text"
              name="subject"
              required
              placeholder="Project idea / job opportunity"
              minLength={3}
              className="h-10 rounded-lg border border-input bg-background px-3 text-sm transition-colors outline-none focus:border-ring"
            />
          </label>

          <label className="mt-4 flex flex-col gap-2 text-sm">
            <span className="font-medium">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project requirements..."
              minLength={20}
              className="min-h-34 resize-y rounded-lg border border-input bg-background px-3 py-2 text-sm transition-colors outline-none focus:border-ring"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "mt-5 w-full sm:w-auto"
            )}
          >
            <IconSend />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {isSubmitted ? (
            <p
              role="status"
              aria-live="polite"
              className="mt-3 text-sm text-emerald-600 dark:text-emerald-400"
            >
              Message sent successfully.
            </p>
          ) : null}

          {submitError ? (
            <p role="alert" className="mt-3 text-sm text-destructive">
              {submitError}
            </p>
          ) : null}
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card/80 p-6">
            <h3 className="text-base font-semibold tracking-tight">
              Social Profiles
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach out on your preferred platform.
            </p>

            <div className="mt-4 grid gap-2">
              {(socialLinks as SocialLink[]).map((social) => {
                const SocialIcon = SOCIAL_ICONS[social.id]

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer noopener" : undefined}
                    aria-label={`Open ${social.label}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "justify-start"
                    )}
                  >
                    <SocialIcon />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/80 p-6">
            <h3 className="text-base font-semibold tracking-tight">
              Availability
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Open to full-time roles, freelance projects, and technical
              consulting.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
