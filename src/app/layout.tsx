import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Worldbuilding Ideas",
  description: "A simple Anchor + Hook randomizer for worldbuilding prompts."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-dvh">
            <header className="sticky top-0 z-20 relative">
              <div className="pointer-events-none absolute inset-0 -z-10 border-b border-black/10 bg-white/70 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-950/65" />

              <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:focus-visible:ring-white/20"
                  aria-label="Go to home"
                >
                  <div className="h-8 w-8 rounded-xl border border-black/10 bg-gradient-to-br from-fuchsia-500/35 via-white to-teal-400/25 shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08)] dark:border-white/10 dark:from-fuchsia-500/40 dark:via-zinc-900 dark:to-teal-400/30 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10)]" />
                  <div className="text-sm font-semibold tracking-wide text-zinc-950 dark:text-zinc-50">
                    Worldbuilding Ideas
                  </div>
                </Link>

                <ThemeToggle />
              </div>
            </header>
            <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
