import { Reveal } from "@/components/site/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <section className="relative pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-warm border border-border p-8 sm:p-14 lg:p-20">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                {eyebrow && <span className="eyebrow">{eyebrow}</span>}
                <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.02]">
                  {title}
                </h1>
              </Reveal>
            </div>
            {subtitle && (
              <div className="lg:col-span-4">
                <Reveal delay={120}>
                  <div className="relative pl-5 border-l-2 border-primary/40">
                    <p className="text-base text-ink-muted leading-relaxed">{subtitle}</p>
                  </div>
                </Reveal>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
