import { ThemeChangeButton } from "@/components/theme-change-button"

type NavbarProps = {
  isScrolled: boolean
}

export function Navbar({ isScrolled }: NavbarProps) {
  return (
    <header
      className={`h-80px fixed top-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-transparent-gradient border-b border-border bg-white/80 backdrop-blur-2xl dark:bg-inherit"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <div className="text-lg font-semibold tracking-tight">
          MitulMovaliya
        </div>

        <nav className="flex items-center gap-8 text-sm font-medium text-foreground/75 dark:text-foreground/70">
          <a
            href="#home"
            className="transition-colors hover:text-primary dark:hover:text-foreground"
          >
            Home
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-primary dark:hover:text-foreground"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="transition-colors hover:text-primary dark:hover:text-foreground"
          >
            Skills
          </a>
          <a
            href="#project"
            className="transition-colors hover:text-primary dark:hover:text-foreground"
          >
            Project
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-primary dark:hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <ThemeChangeButton />
      </div>
    </header>
  )
}
