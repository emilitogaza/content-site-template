import { ArrowRight, BookOpen, Clock, FileText, Layers, Sparkle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { getAllChapters, getSidebarSections } from "@/lib/content";

// ── Landing copy ──────────────────────────────────────────────────────────
// Rebranding a new site? Rewrite the strings below (and swap the glyph import
// above for the site's Lucide icon) together with the SITE_* constants in
// app/layout.tsx. See docs/theming.md §6.
const WORDMARK = "Docs Starter";
const HERO_EYEBROW = "A free mini-course";
const HERO_TAGLINE =
  "Short chapters, zero fluff. Start at the top, follow the pager, and come out the other side knowing the thing.";
const CTA_LABEL = "Start reading";
const FOOTER_NOTE = "Built from the Docs Starter template — one Markdown file per page.";

export default function Home() {
  const chapters = getAllChapters();
  const sections = getSidebarSections();
  const first = chapters[0];

  // Honest little stats for the hero — derived from the content itself.
  const words = chapters.reduce((n, c) => n + c.content.split(/\s+/).length, 0);
  const minutes = Math.max(1, Math.round(words / 200));

  // The marquee needs to be wider than any viewport to loop seamlessly, so
  // repeat the chapter titles until there are comfortably enough of them.
  const titles = chapters.map((c) => c.title);
  const marqueeItems = Array.from(
    { length: Math.max(2, Math.ceil(12 / titles.length)) },
    () => titles
  ).flat();

  const stats = [
    { icon: FileText, label: `${chapters.length} chapters` },
    { icon: Clock, label: `~${minutes} min read` },
    { icon: Layers, label: `${sections.length} sections` },
  ];

  let chapterNumber = 0;

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      {/* Decorative backdrop: a soft brand glow + an oversized wordmark glyph.
          Pure accent-token colours, so it re-themes with the ramp. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <BookOpen
          className="absolute -right-24 top-24 size-96 rotate-12 text-brand/[0.07]"
          strokeWidth={1}
        />
      </div>

      {/* Minimal header — the course shell (sidebar, tray) starts on the
          chapter pages; the landing page only needs the wordmark + theme. */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <span className="flex items-center gap-2 text-base font-semibold text-brand-ink">
          <BookOpen className="size-5 text-brand" />
          {WORDMARK}
        </span>
        <ThemeToggle />
      </header>

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-16 text-center md:px-10 md:pt-24">
        <p
          className="animate-fade-up rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand-ink"
          style={{ animationDelay: "0ms" }}
        >
          {HERO_EYEBROW}
        </p>
        <h1
          className="animate-fade-up mt-6 max-w-3xl text-balance text-5xl font-[520] font-stretch-120% leading-[1.05] tracking-tight text-brand-ink md:text-7xl"
          style={{ animationDelay: "90ms" }}
        >
          Learn it <span className="text-brand">one page</span> at a time.
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-balance text-lg text-ink/75"
          style={{ animationDelay: "180ms" }}
        >
          {HERO_TAGLINE}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "270ms" }}
        >
          <Button asChild size="lg">
            <Link href={`/${first.slug}`}>
              {CTA_LABEL}
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#chapters">Browse the chapters</Link>
          </Button>
        </div>

        <ul
          className="animate-fade-up mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          style={{ animationDelay: "360ms" }}
        >
          {stats.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm text-ink/60">
              <Icon className="size-4 text-brand" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      {/* Marquee of chapter titles — a slow, playful conveyor belt. */}
      <div className="relative border-y border-border/60 py-4">
        <div className="flex w-max animate-marquee-x-fast motion-reduce:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 items-center"
            >
              {marqueeItems.map((title, i) => (
                <li
                  // biome-ignore lint/suspicious/noArrayIndexKey: static repeated list
                  key={`${title}-${i}`}
                  className="flex items-center whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-ink/40"
                >
                  <Sparkle className="mx-6 size-3.5 text-brand/60" />
                  {title}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Chapter overview */}
      <section
        id="chapters"
        className="mx-auto w-full max-w-6xl scroll-mt-10 px-6 py-20 md:px-10"
      >
        <h2 className="text-3xl font-[530] font-stretch-120% tracking-tight text-brand-ink md:text-4xl">
          What&apos;s inside
        </h2>

        <div className="mt-10 flex flex-col gap-12">
          {sections.map((group) => (
            <div key={group.section}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink/50">
                {group.section}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.chapters.map((chapter) => {
                  chapterNumber += 1;
                  return (
                    <Link
                      key={chapter.slug}
                      href={`/${chapter.slug}`}
                      className="group flex items-start gap-4 rounded-4 bg-fill-raised p-5 transition-colors hover:bg-brand/10"
                    >
                      <span className="mt-0.5 text-sm font-semibold tabular-nums text-brand">
                        {String(chapterNumber).padStart(2, "0")}
                      </span>
                      <span className="flex min-w-0 flex-col gap-1">
                        <span className="flex items-center gap-2 font-semibold text-brand-ink">
                          {chapter.title}
                          <ArrowRight className="size-4 shrink-0 -translate-x-1 text-brand opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                        {chapter.description && (
                          <span className="text-sm leading-snug text-ink/60">
                            {chapter.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-8 text-center text-sm text-ink/50">
        {FOOTER_NOTE}
      </footer>
    </main>
  );
}
