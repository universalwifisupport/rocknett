import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Ban, Clock, HeadphonesIcon,
  HelpCircle, Lightbulb, Lock, MessageCircle, Minus, Phone, Plus,
  Quote, ShieldAlert, ShieldCheck, Sparkles, Star, Tv, Wifi, Zap, Compass,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroFamily from "@/assets/hero-family.jpg";
import lifestyleWfh from "@/assets/lifestyle-wfh.jpg";
import supportAgent from "@/assets/support-agent.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rocknet — High-Speed Cable Internet & Services" },
      { name: "description", content: "Get reliable high-speed cable internet, TV, and streaming services from Rocknet, an authorized third-party ISP dealer. Professional installation, 24/7 support, nationwide coverage. Call (888) 725-4937." },
      { name: "keywords", content: "cable internet, high-speed internet, ISP, streaming services, cable TV, Wi-Fi installation" },
      { name: "robots", content: "index, follow" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: "Rocknet — High-Speed Internet & Cable TV Services" },
      { property: "og:description", content: "Authorized third-party Internet Service Provider offering high-speed cable internet, TV, and streaming services." },
      { property: "og:url", content: "https://rocknett.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://rocknett.com/hero-family.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rocknet — High-Speed Internet & Cable TV Services" },
      { name: "twitter:description", content: "Authorized third-party Internet Service Provider offering high-speed cable internet, TV, and streaming services." },
      { name: "twitter:image", content: "https://rocknett.com/hero-family.jpg" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "canonical", href: "https://rocknett.com/" },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        textContent: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Rocknet",
          "url": "https://rocknett.com",
          "logo": "https://rocknett.com/logo.png",
          "description": "Authorized third-party Internet Service Provider offering high-speed cable internet, TV, and streaming services.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+18887254937",
            "email": "support@rocknett.com"
          }
        }),
      },
    ],
  }),
  component: HomePage,
});

const offerings = [
  { no: "01", icon: Wifi, title: "High-Speed Cable Internet",
    desc: "Fast, reliable cable internet service with speeds up to 1 Gbps. Perfect for streaming, gaming, and working from home.",
    points: ["Speeds up to 1 Gbps", "Nationwide coverage", "Professional installation included"] },
  { no: "02", icon: Tv, title: "Cable TV Service",
    desc: "Premium cable TV with hundreds of channels, on-demand content, and HD/4K viewing options.",
    points: ["Hundreds of channels", "DVR and on-demand", "Bundle discounts available"] },
  { no: "03", icon: Zap, title: "Wi-Fi & Home Connectivity",
    desc: "Complete Wi-Fi setup and mesh network installation for whole-home coverage with reliable connectivity.",
    points: ["Mesh Wi-Fi systems", "Expert installation", "24/7 technical support"] },
  { no: "04", icon: MessageCircle, title: "Streaming Service Integration",
    desc: "Bundle streaming services with your internet package and enjoy entertainment on your terms.",
    points: ["Multiple streaming partners", "Flexible packages", "Easy management"] },
];

const notDoing = [
  "We do not share or sell your personal data.",
  "We do not request your provider account passwords or sensitive credentials.",
  "We do not make unsolicited calls or spam.",
  "We do not guarantee specific technical outcomes — results vary by location and equipment.",
  "We do not accept services from competing ISPs.",
  "We are transparent about all fees and charges before service begins.",
];

const process = [
  { n: "01", t: "Contact us", d: "Call our service team or fill out a quote form to discuss your connectivity needs and service options." },
  { n: "02", t: "Get a quote", d: "Our team will provide a personalized quote with service options, pricing, and any available promotions." },
  { n: "03", t: "Schedule installation", d: "Choose your installation date and time, and our professional technicians will get you set up and ready to go." },
];

const testimonials = [
  { name: "Marcus J.", role: "Atlanta, GA", text: "Rocknet got us set up with fiber internet in just two days. The installation was professional and their support team is incredibly responsive.", img: avatar1, rating: 5 },
  { name: "Priya P.", role: "Austin, TX", text: "Finally found a provider that actually listens and delivers on their promises. Great speeds, reliable service, and fair pricing.", img: avatar2, rating: 5 },
  { name: "Susan W.", role: "Denver, CO", text: "Best decision switching to Rocknet. Fast internet, responsive support, and the best customer service I've had with any provider.", img: avatar3, rating: 5 },
];

const faqs = [
  { q: "Are you a legitimate Internet Service Provider?", a: "Yes. Rocknet is an authorized third-party Internet Service Provider and ISA (Independent Service Advisor) dealer. We provide cable internet, broadband, Wi-Fi, and streaming services as an authorized dealer." },
  { q: "Do you sell internet, cable, and streaming plans?", a: "Yes. We offer bundled packages that include high-speed internet, cable TV, Wi-Fi setup, and streaming services. Pricing and packages vary by location." },
  { q: "What is your coverage area?", a: "Rocknet serves customers nationwide. Call us to check service availability at your location." },
  { q: "Do you charge setup or installation fees?", a: "Professional installation is included in most of our packages at no additional cost. We are transparent about all fees and charges before you commit to service." },
  { q: "Do you need my account passwords or sensitive information?", a: "No. We never ask for banking information, SSN, or passwords. We only collect information necessary to provision your service." },
  { q: "What kind of support do you offer?", a: "We offer 24/7 technical support via phone, email, and chat. Our team can help troubleshoot issues, answer billing questions, and assist with service modifications." },
  { q: "Are your services refundable?", a: "We offer a 30-day satisfaction guarantee. If you're not satisfied with our service, you can request a full refund or service cancellation within 30 days of installation." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* ====== HERO SECTION ====== */}
      <section className="relative pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left content */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <span className="eyebrow">Authorized ISA Dealer · Launched 2026</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.1]">
                  High-speed cable{" "}
                  <span className="italic font-normal text-clay">internet,</span>
                  <br />
                  TV &{" "}
                  <span className="italic font-normal text-clay">streaming</span>
                  <br />
                  you can trust.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-xl">
                  Nationwide coverage, professional installation, and transparent pricing. No hidden fees, no pushy sales — just reliable connectivity and expert support.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a href="tel:+18887254937" className="btn-primary w-full sm:w-auto justify-center">
                    <Phone className="h-4 w-4" /> Get a Quote Today
                  </a>
                  <Link to="/contact" className="btn-ghost w-full sm:w-auto justify-center sm:justify-start">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 pt-10 border-t border-border flex flex-col sm:flex-row gap-8 sm:gap-12">
                  <div>
                    <div className="font-display font-extrabold text-3xl text-ink">100%</div>
                    <p className="mt-2 text-sm text-ink-muted">Provider-neutral. No upsells.</p>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-3xl text-ink">24/7</div>
                    <p className="mt-2 text-sm text-ink-muted">Expert support always available.</p>
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-3xl text-ink">∞</div>
                    <p className="mt-2 text-sm text-ink-muted">No hidden fees ever.</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right visual */}
            <div className="relative mt-10 lg:mt-0">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden">
                  <img src={heroFamily} alt="Family enjoying reliable internet" width={600} height={700} className="w-full h-auto object-cover rounded-3xl shadow-elegant" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent rounded-3xl" />
                  
                  {/* Floating card - Support */}
                  <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-6 sm:right-auto sm:w-64 rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-elegant">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                        <HeadphonesIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-ink">Expert Support</div>
                        <p className="text-xs text-ink-muted mt-1">Available 24/7 to help you out</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge - Trust */}
                  <div className="absolute top-6 right-4 sm:top-8 sm:right-6 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-elegant flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-ink">Privacy First</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Disclosure ribbon */}
          <Reveal>
            <div className="mt-12 sm:mt-16 rounded-2xl border border-primary/25 bg-card p-4 sm:p-5 flex items-start gap-3 shadow-soft">
              <ShieldAlert className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-ink leading-relaxed">
                <strong>Independent disclosure:</strong> Rocknet is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== MARQUEE TRUST STRIP ====== */}
      <section className="relative mt-20 overflow-hidden border-y border-border bg-card">
        <div className="flex gap-12 py-6 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              {["Independent Advisors", "Privacy-first", "Provider-neutral", "Real Humans", "Transparent Fees", "Plain-English Guidance", "Launched 2026"].map((t) => (
                <span key={t} className="inline-flex items-center gap-3 font-display font-semibold text-ink/70">
                  <Sparkles className="h-4 w-4 text-primary" /> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ====== WHAT WE OFFER — BENTO GRID ====== */}
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">What we offer</span>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05]">
                  Independent guidance,<br />
                  <span className="italic font-normal text-clay">zero pressure.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <Reveal delay={120}>
                <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
                  Our role is strictly assistance — we walk you through internet, Wi-Fi and cable TV concepts so you can confidently make your own choices with your chosen provider.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Asymmetric bento — featured + supporting */}
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            {/* Featured */}
            <Reveal className="lg:col-span-7">
              <article className="bento p-8 sm:p-10 lg:p-12 h-full flex flex-col bento-sand">
                <div className="flex items-start justify-between">
                  <span className="font-display text-7xl font-extrabold text-ink/10">{offerings[0].no}</span>
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-ink text-white">
                    <Wifi className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-3xl font-extrabold text-ink">{offerings[0].title}</h3>
                <p className="mt-4 text-ink-muted leading-relaxed max-w-xl">{offerings[0].desc}</p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {offerings[0].points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10 flex items-center justify-between border-t border-ink/10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink-muted">Informational only</span>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </article>
            </Reveal>

            {/* Supporting stack */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
              {offerings.slice(1).map((o, i) => (
                <Reveal key={o.no} delay={i * 100}>
                  <article className="bento p-6 sm:p-7 h-full flex flex-col">
                    <div className="flex items-start justify-between">
                      <div className="grid place-items-center h-12 w-12 rounded-2xl bg-sand text-primary">
                        <o.icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-2xl font-extrabold text-ink/20">{o.no}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-ink">{o.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{o.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHAT WE DON'T DO ====== */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="bento bento-ink p-10 sm:p-16 relative">
            <div className="absolute inset-0 dot-grid opacity-15" />
            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="eyebrow !text-primary-glow">For full transparency</span>
                  <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05]">
                    What we <span className="italic font-normal text-primary-glow">don't</span> do.
                  </h2>
                  <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                    Independence is the whole point. Here's a clear list of everything that's outside our role.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {notDoing.map((n, i) => (
                    <Reveal key={n} delay={i * 60}>
                      <li className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-5">
                        <div className="grid place-items-center h-9 w-9 rounded-xl bg-destructive/20 text-destructive shrink-0">
                          <Ban className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-white/85 leading-relaxed">{n}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS — VERTICAL STEPS ====== */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow">How it works</span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
                Three simple <span className="italic font-normal text-clay">steps.</span>
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed">
                The whole journey, from the first call to applying the guidance with your own chosen provider.
              </p>
              <a href="tel:+18887254937" className="mt-7 btn-primary inline-flex">
                <Phone className="h-4 w-4" /> Start the conversation
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="bento p-7 sm:p-9 flex items-start gap-6 sm:gap-10">
                  <div className="font-display font-extrabold text-5xl sm:text-6xl text-transparent shrink-0" style={{ WebkitTextStroke: "1.5px var(--primary)" }}>
                    {p.n}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">{p.t}</h3>
                    <p className="mt-2 text-ink-muted leading-relaxed">{p.d}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary hidden sm:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY US — BENTO MIX ====== */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
            <Reveal className="lg:col-span-5">
              <div className="bento p-0 overflow-hidden h-full min-h-[460px] relative">
                <img src={lifestyleWfh} alt="Customer reviewing connectivity guidance" loading="lazy" width={1280} height={1280} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 flex items-center gap-3">
                    <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary">
                      <Lightbulb className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-ink">Plain-English</div>
                      <div className="text-xs text-ink-muted">No jargon, ever</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
              <Reveal>
                <div className="bento bento-sand p-8 h-full">
                  <span className="eyebrow">Why Rocknet</span>
                  <h3 className="mt-4 font-display text-3xl font-extrabold text-ink leading-tight">
                    Built on clarity. Backed by real humans.
                  </h3>
                </div>
              </Reveal>
              {[
                { icon: ShieldCheck, t: "Provider-neutral", d: "Independent guidance — we don't push any specific brand." },
                { icon: Lock, t: "Privacy-first", d: "We never request provider passwords or sensitive credentials." },
                { icon: HeadphonesIcon, t: "Friendly advisors", d: "Real people who happily slow down and explain things." },
                { icon: BadgeCheck, t: "Transparent fees", d: "Service/assistance fees disclosed clearly before you start." },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 70}>
                  <div className="bento p-6 h-full">
                    <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-5 font-display font-bold text-ink">{f.t}</h4>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS — ALTERNATING BENTO ====== */}
      <section className="relative py-28 bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="eyebrow">Voices we've helped</span>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05]">
                  What callers say after a<br />
                  <span className="italic font-normal text-clay">single conversation.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="bento p-5 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[avatar1, avatar2, avatar3].map((a, i) => (
                      <img key={i} src={a} alt="" loading="lazy" width={44} height={44} className="h-10 w-10 rounded-full ring-2 ring-card object-cover" />
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                    </div>
                    <div className="text-xs text-ink-muted mt-1">Based on early caller feedback</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <article className={`bento p-8 h-full flex flex-col ${i === 1 ? "bento-ink" : ""}`}>
                  <Quote className={`h-9 w-9 mb-5 ${i === 1 ? "text-primary-glow" : "text-primary/40"}`} />
                  <p className={`leading-relaxed flex-1 ${i === 1 ? "text-white/90" : "text-ink"}`}>"{t.text}"</p>
                  <div className={`mt-7 flex items-center gap-3 pt-6 border-t ${i === 1 ? "border-white/15" : "border-border"}`}>
                    <img src={t.img} alt={t.name} loading="lazy" width={48} height={48} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20" />
                    <div className="flex-1">
                      <div className={`font-semibold ${i === 1 ? "text-white" : "text-ink"}`}>{t.name}</div>
                      <div className={`text-xs ${i === 1 ? "text-white/60" : "text-ink-muted"}`}>{t.role}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, k) => (
                        <Star key={k} className={`h-3.5 w-3.5 ${i === 1 ? "fill-primary-glow text-primary-glow" : "fill-primary text-primary"}`} />
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== REFUND NOTE ====== */}
      <section className="relative py-16 mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="bento p-8 sm:p-10 flex flex-col md:flex-row gap-6 items-start border-primary/30">
            <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground shrink-0">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl font-extrabold text-ink">7–15 day refund window</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether guidance has already been delivered. Please review our Refund Policy page for full eligibility details.
              </p>
              <Link to="/terms" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Read full Refund Policy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ====== FAQ ====== */}
      <section className="relative py-24 sm:py-32 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <span className="eyebrow">FAQ</span>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05]">
                  Honest answers,<br /><span className="italic font-normal text-clay">no fine print.</span>
                </h2>
                <p className="mt-5 text-ink-muted leading-relaxed">
                  Common questions about who we are, what we do, and the boundaries we keep as an independent third-party platform.
                </p>
                <a href="tel:+18887254937" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-3 font-semibold hover:bg-primary transition">
                  <HelpCircle className="h-4 w-4" /> Still have a question?
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <FaqItem q={f.q} a={f.a} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bento p-0 grid lg:grid-cols-12 overflow-hidden">
          <div className="lg:col-span-7 bento-ink p-10 sm:p-14 relative">
            <div className="absolute inset-0 dot-grid opacity-15" />
            <div className="relative">
              <Reveal>
                <span className="eyebrow !text-primary-glow">Talk to an independent advisor</span>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05]">
                  Have a question?<br />
                  <span className="italic font-normal text-primary-glow">Let's talk it through.</span>
                </h2>
                <p className="mt-6 text-white/75 max-w-md leading-relaxed">
                  Friendly, vendor-neutral guidance on internet, Wi-Fi and cable TV topics. No account access, no provider passwords, no pressure.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="tel:+18887254937" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-7 py-3.5 font-semibold hover:bg-primary-glow transition">
                    <Phone className="h-4 w-4" /> Call for Guidance
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition">
                    Request Help <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="mt-4 text-xs text-white/55">
                  Rocknet is an independent third-party assistance startup. Not affiliated with any internet, cable or streaming provider.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-5 bg-gradient-warm p-10 sm:p-12">
            <Reveal delay={100}>
              <MiniContactCard />
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bento overflow-hidden transition-all ${open ? "border-primary/40 shadow-soft" : ""}`}>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left">
        <div className="flex items-start gap-4">
          <span className="font-display text-sm font-bold text-primary mt-0.5 shrink-0">{String(index).padStart(2, "0")}</span>
          <span className="font-semibold text-ink">{q}</span>
        </div>
        <span className={`grid place-items-center h-8 w-8 rounded-full border shrink-0 transition-colors ${open ? "bg-primary text-white border-primary" : "text-primary"}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-6 pl-14 sm:pl-16 text-ink-muted leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function MiniContactCard() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3500); }}
      className="bento p-7 shadow-soft"
    >
      <div className="flex items-center gap-3 mb-5">
        <img src={supportAgent} alt="" loading="lazy" width={48} height={48} className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30" />
        <div>
          <div className="font-semibold text-ink">Request a callback</div>
          <div className="text-xs text-ink-muted">An independent advisor will reach out</div>
        </div>
      </div>
      <div className="space-y-3">
        <input required maxLength={80} placeholder="Full name" className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <input required type="tel" maxLength={20} placeholder="Phone number" className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        <textarea required maxLength={400} rows={3} placeholder="What can we help you understand?" className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-none" />
      </div>
      <button className="mt-5 w-full btn-primary">
        {sent ? "Thanks — we'll be in touch!" : "Speak With Support"}
      </button>
      <p className="mt-3 text-[11px] text-ink-muted text-center">
        By submitting you acknowledge Rocknet is an independent third-party assistance platform.
      </p>
    </form>
  );
}
