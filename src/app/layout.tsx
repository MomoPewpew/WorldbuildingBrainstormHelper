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
            <footer className="mx-auto max-w-5xl space-y-1 px-6 pb-12 pt-6 text-xs text-zinc-600 dark:text-zinc-500">
              <div>
                Made by <span className="font-medium text-zinc-800 dark:text-zinc-200">Marijn Tepas</span>.{" "}
                Website source is licensed under the{" "}
                <span className="font-medium text-zinc-800 dark:text-zinc-200">GNU GPL-3.0</span>.{" "}
                <a
                  href="https://github.com/MomoPewpew/WorldbuildingBrainstormHelper"
                  className="underline decoration-black/20 underline-offset-4 hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
                .
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
