export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 py-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {currentYear} Mitul Movaliya</p>
        <p className="text-center sm:text-right">
          <span className="sm:hidden">Built with React + TypeScript</span>
          <span className="hidden sm:inline">
            Built with React, TypeScript, and Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  )
}
