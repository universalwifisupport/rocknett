import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeadphonesIcon, MapPin, Phone, ShieldCheck, Target, Users, Zap, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import aboutTeam from "@/assets/about-team.jpg";
import supportAgent from "@/assets/support-agent.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rocknet — Authorized Third-Party Internet Service Provider" },
      { name: "description", content: "Learn about Rocknet, an authorized third-party Internet Service Provider and ISA dealer offering high-speed cable internet, TV, and streaming services." },
      { name: "keywords", content: "about Rocknet, third-party ISP, Internet Service Provider, ISA dealer, cable internet provider" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "About Rocknet — Third-Party ISP" },
      { property: "og:description", content: "Authorized third-party Internet Service Provider offering high-speed internet and cable TV services nationwide." },
      { property: "og:url", content: "https://rocknett.com/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://rocknett.com/about-team.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Rocknet — Authorized Third-Party ISP" },
      { name: "twitter:description", content: "Learn about our mission to deliver reliable internet and cable services." },
      { name: "twitter:image", content: "https://rocknett.com/about-team.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rocknett.com/about" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        textContent: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Rocknet",
          "url": "https://rocknett.com",
          "description": "Authorized third-party Internet Service Provider",
          "image": "https://rocknett.com/logo.png"
        }),
      },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2026", title: "Rocknet launches", desc: "Authorized third-party ISP and ISA dealer begins offering cable internet and services to households nationwide." },
  { year: "Q1", title: "Service infrastructure", desc: "Professional installation teams and 24/7 customer support established nationwide." },
  { year: "Q2", title: "Service expansion", desc: "High-speed internet, cable TV, Wi-Fi, and streaming bundles offered with transparent pricing." },
  { year: "Today", title: "Nationwide service provider", desc: "Serving thousands of households nationwide with reliable internet and cable services." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Rocknet"
        title="Your trusted third-party Internet Service Provider."
        subtitle="We launched in 2026 as an authorized ISA dealer to bring quality, reliable internet and cable services to households across America."
      />

      {/* INTRO — bento split */}
      <section className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-5">
            <div className="bento p-0 overflow-hidden h-full min-h-[420px] relative">
              <img src={aboutTeam} alt="Rocknet advisors collaborating" loading="lazy" width={1280} height={1100} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
                <div className="text-[10px] tracking-[0.22em] uppercase text-primary font-bold">Independent advisors</div>
                <div className="font-display font-bold text-ink mt-1">Real people. Plain English. Zero pressure.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <div className="bento bento-sand p-8 sm:p-12 h-full">
              <span className="eyebrow">Who we are</span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05]">
                A third-party ISP<br />
                <span className="italic font-normal text-clay">committed to quality and service.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Rocknet is an authorized third-party Internet Service Provider and ISA dealer launched in 2026. We offer high-speed cable internet, TV, Wi-Fi, and streaming services nationwide. Our mission is simple: deliver reliable, fast internet with transparent pricing and expert customer support.
              </p>
              <p className="mt-4 text-ink-muted leading-relaxed">
                We're transparent about all fees, provide professional installation, and stand behind our service with a 30-day satisfaction guarantee. Your success online is our success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION — bento pair */}
      <section className="relative py-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: Target, t: "Our Mission", d: "Provide households with reliable high-speed internet and cable services backed by transparent pricing, professional installation, and 24/7 customer support." },
            { icon: Award, t: "Our Vision", d: "Become the most trusted third-party Internet Service Provider in America — known for service quality, customer care, and community impact." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i*100}>
              <div className={`${c.tone} p-10 h-full`}>
                <div className={`grid place-items-center h-14 w-14 rounded-2xl ${i===1 ? "bg-white/15 text-white" : "bg-gradient-primary text-primary-foreground"}`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className={`mt-6 font-display text-3xl font-extrabold ${i===1 ? "text-white" : "text-ink"}`}>{c.t}</h3>
                <p className={`mt-3 leading-relaxed ${i===1 ? "text-white/85" : "text-ink-muted"}`}>{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST STATS — single bento row */}
      <section className="relative py-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bento bento-ink p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {[
              { v: 100, suffix: "%", l: "Independent & provider-neutral" },
              { v: 48, suffix: "", l: "States we serve nationwide" },
              { v: 7, suffix: "–15", l: "Day refund window" },
              { v: 0, suffix: "", l: "Provider passwords requested" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-gradient">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-sm mt-2 text-white/70 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY — horizontal step strip */}
      <section className="relative py-24 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="eyebrow">Our journey</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
              From day one,<br /><span className="italic font-normal text-clay">built independent.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i*80}>
              <div className="bento p-7 h-full flex flex-col">
                <div className="font-display font-extrabold text-3xl text-clay">{m.year}</div>
                <h3 className="mt-4 font-display font-bold text-lg text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">{m.desc}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-primary" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUPPORT TEAM — bento split */}
      <section className="relative py-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-7">
            <div className="bento bento-sand p-10 sm:p-12 h-full">
              <span className="eyebrow">Real human support</span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
                Friendly advisors who<br /><span className="italic font-normal text-clay">actually pick up.</span>
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed">
                Our independent advisors are trained to slow down, explain things in plain English, and walk you through general connectivity concepts at your pace — without pushing any specific brand.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  { icon: HeadphonesIcon, t: "Easy to reach", d: "Phone, message or callback." },
                  { icon: Users, t: "Independent team", d: "Provider-neutral by design." },
                  { icon: ShieldCheck, t: "Privacy-first", d: "No credentials requested." },
                  { icon: Zap, t: "Plain-English", d: "No jargon, no upsell." },
                ].map((f) => (
                  <div key={f.t} className="flex items-start gap-3 p-4 rounded-2xl bg-card border">
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">{f.t}</div>
                      <div className="text-xs text-ink-muted">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="tel:+18887174568" className="mt-8 btn-primary inline-flex">
                <Phone className="h-4 w-4" /> Talk to a real human
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="bento p-0 overflow-hidden h-full min-h-[420px] relative">
              <img src={supportAgent} alt="Friendly Rocknet advisor" loading="lazy" width={1280} height={1280} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute top-5 right-5 glass rounded-full p-3">
                <ArrowUpRight className="h-4 w-4 text-ink" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COVERAGE CTA */}
      <section className="relative py-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bento bento-accent p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-white">
            <div>
              <MapPin className="h-8 w-8 mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">Nationwide service coverage.</h2>
              <p className="mt-3 text-white/85 max-w-xl">Reach out — an advisor will walk you through your questions in plain English.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-3.5 font-semibold hover:bg-ink hover:text-white transition">
                Request Help
              </Link>
              <a href="tel:+18887174568" className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-3.5 font-semibold">
                <Phone className="h-4 w-4" /> (888) 717-4568
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
