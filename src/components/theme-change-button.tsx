import { IconMoon, IconSun } from "@tabler/icons-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeChangeButton() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
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
      {resolvedTheme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  )
}
