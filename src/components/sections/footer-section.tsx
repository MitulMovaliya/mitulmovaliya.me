export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {currentYear} Mitul Movaliya</p>
        <p>Made with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
