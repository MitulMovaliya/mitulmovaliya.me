import { useEffect, useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"

import { ThemeChangeButton } from "@/components/theme-change-button"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
]

type NavbarProps = {
  isScrolled: boolean
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`h-80px fixed top-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-transparent-gradient border-b border-border bg-white/80 backdrop-blur-2xl dark:bg-inherit"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          MitulMovaliya
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/75 md:flex dark:text-foreground/70">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary dark:hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeChangeButton />
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((previousValue) => !previousValue)}
          >
            {isMenuOpen ? <IconX /> : <IconMenu2 />}
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-nav"
          className="mx-6 mt-3 rounded-xl border border-border bg-background/95 p-3 text-sm shadow-lg backdrop-blur md:hidden"
        >
          <ul className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 text-foreground/85 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-2 border-t border-border pt-2">
            <div className="flex items-center justify-between rounded-lg px-3 py-2">
              <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Theme
              </span>
              <ThemeChangeButton />
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
