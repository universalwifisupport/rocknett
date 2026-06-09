import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone, Tv, Wifi, Zap, Briefcase, Home, MonitorPlay, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import serviceFiber from "@/assets/service-fiber.jpg";
import serviceCable from "@/assets/service-cable.jpg";
import serviceWifi from "@/assets/service-wifi.jpg";
import serviceBusiness from "@/assets/service-business.jpg";
import serviceStreaming from "@/assets/service-streaming.jpg";
import lifestyleWfh from "@/assets/lifestyle-wfh.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Internet & Cable Services — Rocknet" },
      { name: "description", content: "Get high-speed cable internet, TV, Wi-Fi, and streaming services from Rocknet. Professional installation, 24/7 support, nationwide coverage." },
      { name: "keywords", content: "cable internet services, high-speed internet, cable TV, Wi-Fi installation, streaming services, ISP" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Rocknet — Internet & Cable Services" },
      { property: "og:description", content: "Authorized third-party ISP offering cable internet, TV, and streaming services." },
      { property: "og:url", content: "https://rocknett.com/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://rocknett.com/lifestyle-wfh.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rocknet — Internet & Cable Services" },
      { name: "twitter:description", content: "High-speed internet, cable TV, and streaming from an authorized ISP." },
      { name: "twitter:image", content: "https://rocknett.com/lifestyle-wfh.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://rocknett.com/services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        textContent: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Rocknet Services",
          "description": "High-speed cable internet, TV, Wi-Fi, and streaming services",
          "url": "https://rocknett.com/services"
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Zap, img: lifestyleWfh, eyebrow: "Internet Service", title: "High-Speed Cable Internet",
    desc: "Fast and reliable cable internet service with speeds up to 1 Gbps. Perfect for streaming, gaming, remote work, and everything in between. Professional installation and 24/7 support included.",
    points: ["Speeds up to 1 Gbps", "Nationwide availability", "Professional installation", "30-day satisfaction guarantee"] },
  { icon: Wifi, img: serviceFiber, eyebrow: "Fiber & Broadband", title: "Fiber & Advanced Broadband",
    desc: "Ultra-fast fiber internet where available, with symmetrical speeds and low latency. Great for serious streamers, gamers, and small businesses. Expert setup and support.",
    points: ["Symmetrical speeds", "Low latency", "Premium reliability", "Business-grade options"] },
  { icon: Tv, img: serviceCable, eyebrow: "Cable TV", title: "Cable TV Service",
    desc: "Premium cable TV with hundreds of channels, on-demand content, DVR, and HD/4K viewing. Bundle with internet for the best value.",
    points: ["Hundreds of channels", "HD/4K content", "DVR included", "Bundle discounts"] },
  { icon: Home, img: serviceWifi, eyebrow: "Wi-Fi Setup", title: "Whole-Home Wi-Fi Installation",
    desc: "Complete Wi-Fi solution with professional mesh network installation for whole-home coverage. Expert technicians ensure optimal performance in every room.",
    points: ["Mesh Wi-Fi systems", "Expert installation", "Full coverage", "Ongoing support"] },
  { icon: Briefcase, img: serviceBusiness, eyebrow: "Business Services", title: "Small Business Connectivity",
    desc: "Reliable business-grade connectivity with SLA guarantees, static IPs, and priority support. Designed for small offices and retail locations.",
    points: ["SLA guarantees", "Static IP options", "Priority support", "Flexible plans"] },
  { icon: MonitorPlay, img: serviceStreaming, eyebrow: "Streaming Bundles", title: "Streaming Service Partnerships",
    desc: "Bundle popular streaming services with your internet package. Enjoy entertainment options tailored to your preferences at great prices.",
    points: ["Multiple partner options", "Simplified billing", "Flexible bundles", "Great savings"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we do"
        title="Independent, plain-English guidance — across every connectivity topic."
        subtitle="A vendor-neutral overview of the topics our advisors can walk you through, informally and without pressure."
      />

      {/* SERVICES BENTO GRID */}
      <section className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-6 auto-rows-[minmax(260px,auto)] gap-4 lg:gap-5">
          {services.map((s, i) => {
            // bento sizing pattern: 0 large (col-span-4), 1 (2), 2 (3), 3 (3), 4 (2), 5 (4)
            const spans = [
              "lg:col-span-4",
              "lg:col-span-2",
              "lg:col-span-3",
              "lg:col-span-3",
              "lg:col-span-2",
              "lg:col-span-4",
            ];
            const feature = i === 0 || i === 5;
            return (
              <Reveal key={s.title} delay={i * 60} className={spans[i]}>
                <article className="bento p-0 h-full overflow-hidden relative group">
                  {feature ? (
                    <div className="relative h-full min-h-[320px]">
                      <img src={s.img} alt={s.title} loading="lazy" width={1280} height={900} className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/40 to-transparent" />
                      <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between text-white">
                        <div className="flex items-start justify-between">
                          <span className="text-[11px] tracking-[0.24em] uppercase font-bold text-primary-glow">{s.eyebrow}</span>
                          <div className="grid place-items-center h-12 w-12 rounded-2xl glass-dark">
                            <s.icon className="h-5 w-5" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight max-w-md">{s.title}</h3>
                          <p className="mt-4 text-white/80 leading-relaxed max-w-lg">{s.desc}</p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {s.points.slice(0, 3).map((p) => (
                              <li key={p} className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-medium">{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full p-7 sm:p-8 flex flex-col">
                      <div className="flex items-start justify-between">
                        <div className="grid place-items-center h-12 w-12 rounded-2xl bg-sand text-primary">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] tracking-[0.24em] uppercase font-bold text-ink-muted">{s.eyebrow}</span>
                      </div>
                      <h3 className="mt-6 font-display text-xl sm:text-2xl font-extrabold text-ink leading-tight">{s.title}</h3>
                      <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.desc}</p>
                      <ul className="mt-4 space-y-1.5">
                        {s.points.slice(0, 3).map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs text-ink">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" /> {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-muted">Informational only</span>
                        <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* TRANSPARENCY STRIP */}
      <section className="relative py-12 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bento bento-sand p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="grid place-items-center h-12 w-12 rounded-2xl bg-ink text-white shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-ink text-xl">Quality and transparency guaranteed.</div>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                All fees are transparent and disclosed before installation. Professional setup, 24/7 support, and a 30-day satisfaction guarantee on every service.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+18884788407" className="btn-primary"><Phone className="h-4 w-4" /> Speak With Support</a>
            <Link to="/contact" className="btn-ghost">Request Help <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
