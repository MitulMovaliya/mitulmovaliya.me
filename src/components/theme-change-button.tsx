import { IconMoon, IconSun } from "@tabler/icons-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeChangeButton() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon-sm"
      onClick={handleThemeChange}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="cursor-pointer"
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  )
}
