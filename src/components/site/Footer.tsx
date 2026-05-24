import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-28">
      {/* Big editorial mark band */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-t-[2.5rem] bg-ink text-white">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative grid lg:grid-cols-12 gap-10 p-10 sm:p-14">
            {/* Wordmark column */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center gap-3">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary">
                  <Compass className="h-5 w-5 text-white" />
                </span>
                <span className="font-display font-extrabold text-2xl">
                  Rocknet</span>
              </Link>
              <p className="mt-6 max-w-md text-white/70 leading-relaxed">
                An independent third-party assistance platform offering informational guidance on internet, Wi-Fi and cable TV service questions.
              </p>
              <a href="tel:+18887254937" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-ink px-6 py-3 font-semibold hover:bg-primary-glow transition">
                <Phone className="h-4 w-4 text-primary" /> (888) 725-4937
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex gap-3 mt-8">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="grid place-items-center h-10 w-10 rounded-full bg-white/8 hover:bg-gradient-primary transition">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-[11px] tracking-[0.24em] uppercase text-primary-glow font-semibold mb-5">Navigate</h4>
                <ul className="space-y-3 text-sm">
                  {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About Us" },
                    { to: "/services", label: "What We Do" },
                    { to: "/contact", label: "Contact" },
                  ].map((l) => (
                    <li key={l.to}><Link to={l.to} className="text-white/75 hover:text-white transition">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] tracking-[0.24em] uppercase text-primary-glow font-semibold mb-5">Assistance Areas</h4>
                <ul className="space-y-3 text-sm text-white/75">
                  <li>Internet & broadband guidance</li>
                  <li>Wi-Fi setup support</li>
                  <li>Cable TV informational help</li>
                  <li>Streaming service questions</li>
                  <li>Connectivity troubleshooting</li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[11px] tracking-[0.24em] uppercase text-primary-glow font-semibold mb-5">Reach Us</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-white/75">
                    <Phone className="h-4 w-4 mt-1 text-primary-glow shrink-0" />
                    <a href="tel:+18887254937" className="hover:text-white">(888) 725-4937</a>
                  </li>
                  <li className="flex items-start gap-3 text-white/75">
                    <Mail className="h-4 w-4 mt-1 text-primary-glow shrink-0" />
                    <a href="mailto:support@rocknett.com" className="hover:text-white">support@rocknett.com</a>
                  </li>
                  <li className="flex items-start gap-3 text-white/75">
                    <MapPin className="h-4 w-4 mt-1 text-primary-glow shrink-0" />
                    <span>Nationwide coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance ribbon */}
          <div className="relative border-t border-white/10 px-10 sm:px-14 py-6">
            <p className="text-xs leading-relaxed text-white/60 max-w-5xl">
              <strong className="text-white">Service disclosure —</strong> Rocknet is an authorized third-party Internet Service Provider and ISA (Independent Service Advisor) dealer, launched in 2026. We provide cable internet, broadband, Wi-Fi, and streaming services as an authorized dealer. Our service agreements are independent and separate from any manufacturer recommendations. Any brand names referenced are used for informational purposes only — all trademarks belong to their respective owners.
            </p>
          </div>

          {/* Bottom row */}
          <div className="relative border-t border-white/10 px-10 sm:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Rocknet. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
              <Link to="/terms" className="hover:text-white">Refund Policy</Link>
              <Link to="/terms" className="hover:text-white">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
