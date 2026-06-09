import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, Compass, ChevronRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Do" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Compliance ribbon — warm marquee-style band */}
      <div className="hidden md:block bg-ink text-white/90 text-[11px] sm:text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-3 text-center">
          <span className="inline-block h-1 w-6 rounded-full bg-primary-glow shrink-0" />
          <span className="leading-tight tracking-wide">
            Third-party Internet Service Provider — Authorized ISA Dealer offering cable, internet and streaming services nationwide.
          </span>
          <span className="inline-block h-1 w-6 rounded-full bg-primary-glow shrink-0" />
        </div>
      </div>

      {/* Main bar — framed pill shell */}
      <div className={`transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-3 sm:px-5">
          <nav className={`flex items-center justify-between gap-4 rounded-full px-3 sm:px-4 py-2.5 transition-all ${
            scrolled
              ? "bg-card/95 backdrop-blur-xl shadow-soft border border-border"
              : "bg-card/70 backdrop-blur-md border border-border/70"
          }`}>
            <Link to="/" className="flex items-center gap-3 pl-2 pr-3 group">
              <span className="relative grid place-items-center h-10 w-10 rounded-2xl bg-ink text-white overflow-hidden">
                <Compass className="h-5 w-5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-lg tracking-tight text-ink">
                  Rocknet
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mt-1">
                  Authorized ISA Dealer
                </span>
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full transition ${
                        active ? "text-white" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {active && <span className="absolute inset-0 -z-10 rounded-full bg-ink" />}
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-2">
              <a
                href="tel:+18884788407"
                className="hidden xl:inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-ink hover:bg-sand transition"
              >
                <Phone className="h-3.5 w-3.5 text-primary" /> (888) 478-8407
              </a>
              <a
                href="tel:+18884788407"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Get Assistance <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-grid place-items-center h-11 w-11 rounded-full border border-border bg-background"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {open && (
            <div className="lg:hidden mt-3 rounded-3xl border border-border bg-card/95 backdrop-blur-xl p-3 shadow-elegant animate-fade-in">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="flex items-center justify-between px-4 py-3 rounded-2xl text-ink font-semibold hover:bg-sand/60">
                      {l.label}
                      <ChevronRight className="h-4 w-4 text-ink-muted" />
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="tel:+18884788407" className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 font-semibold text-primary-foreground">
                <Phone className="h-4 w-4" /> Speak With Support
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
