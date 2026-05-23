import { createFileRoute } from "@tanstack/react-router";
import { Clock, HeadphonesIcon, Mail, MapPin, Phone, Search, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rocknet — Call xxx-xxx-xxxx" },
      { name: "description", content: "Get in touch with Rocknet. Send a message, request a callback, or call xxx-xxx-xxxx for service inquiries." },
      { name: "keywords", content: "contact Rocknet, customer service, support, callback, internet support" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Contact Rocknet" },
      { property: "og:description", content: "Contact Rocknet for high-speed internet and cable services — call, message or request a callback." },
      { property: "og:url", content: "https://rocknett.com/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact Rocknet" },
      { name: "twitter:description", content: "Get in touch with Rocknet customer service." },
    ],
    links: [
      { rel: "canonical", href: "https://rocknett.com/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        textContent: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Rocknet",
          "url": "https://rocknett.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "xxx-xxx-xxxx",
            "email": "support@rocknett.com"
          }
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [zipResult, setZipResult] = useState<null | "available" | "checking">(null);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="A calm place to ask your connectivity questions."
        subtitle="Friendly, independent advisors. Reach out by phone, message or callback — whichever feels right."
      />

      {/* CONTACT BENTO */}
      <section className="relative py-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-5">
          {/* Call card — featured */}
          <Reveal className="lg:col-span-5">
            <div className="bento bento-ink p-8 sm:p-10 h-full relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-15" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="mt-6 text-[11px] tracking-[0.24em] uppercase text-primary-glow font-bold">Independent advisor line</div>
                <a href="tel:xxx-xxx-xxxx" className="block mt-2 font-display font-extrabold text-4xl sm:text-5xl text-white hover:text-primary-glow transition">
                  xxx-xxx-xxxx
                </a>
                <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-sm">
                  Real humans · plain-English guidance · no provider passwords ever requested.
                </p>
                <a href="tel:xxx-xxx-xxxx" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-ink px-6 py-3 font-semibold hover:bg-primary-glow transition">
                  Call now <Phone className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Small info cards stack */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-5">
            {[
              { icon: Mail, t: "Email", v: "support@rocknett.com", href: "mailto:support@rocknett.com", sub: "Reply within 2 business hours" },
              { icon: Clock, t: "Hours", v: "Mon–Sat · 8a–8p", sub: "Customer support team" },
              { icon: Phone, t: "Phone", v: "xxx-xxx-xxxx", href: "tel:xxx-xxx-xxxx", sub: "Call anytime during hours" },
              { icon: ShieldCheck, t: "Promise", v: "Transparent & fair", sub: "All fees disclosed upfront" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <a href={c.href ?? "#"} className={`bento p-7 h-full block ${i === 1 ? "bento-sand" : ""}`}>
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-[11px] tracking-[0.22em] uppercase text-primary font-bold">{c.t}</div>
                  <div className="mt-1 font-display font-extrabold text-ink text-lg">{c.v}</div>
                  <div className="mt-1 text-xs text-ink-muted">{c.sub}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="relative py-12 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-5">
          <Reveal className="lg:col-span-8">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false), 4000); }}
              className="bento p-8 sm:p-12"
            >
              <span className="eyebrow">Send a message</span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
                Tell us a bit about your<br/><span className="italic font-normal text-clay">connectivity question.</span>
              </h2>
              <p className="mt-3 text-ink-muted text-sm max-w-lg">An independent advisor will reach out — no upsell, no provider credentials requested.</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Field label="Full name" type="text" placeholder="Jane Doe" />
                <Field label="Phone number" type="tel" placeholder="(555) 123-4567" />
                <Field label="Email" type="email" placeholder="jane@example.com" />
                <Field label="ZIP code" type="text" placeholder="80202" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold text-ink-muted uppercase tracking-[0.22em]">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us what you'd like help understanding…"
                  className="mt-2 w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-none"
                />
              </div>
              <button className="mt-7 btn-primary">
                {sent ? "Sent — talk soon!" : (<><Send className="h-4 w-4" /> Send message</>)}
              </button>
              <p className="mt-3 text-[11px] text-ink-muted">
                By submitting you acknowledge Rocknet is an independent third-party assistance platform.
              </p>
            </form>
          </Reveal>

          <div className="lg:col-span-4 space-y-5">

            <Reveal delay={150}>
              <div className="bento p-7">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                  <HeadphonesIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink">Need to talk now?</h3>
                <p className="mt-2 text-sm text-ink-muted">Skip the form — call our independent advisor line and talk to a real human.</p>
                <a href="tel:xxx-xxx-xxxx" className="mt-5 btn-primary w-full"><Phone className="h-4 w-4" /> xxx-xxx-xxxx</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink-muted uppercase tracking-[0.22em]">{label}</label>
      <input required {...rest} className="mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
    </div>
  );
}
