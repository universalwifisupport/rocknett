import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCall } from "./FloatingCall";
import { Breadcrumb } from "./Breadcrumb";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 pt-8 sm:pt-12 animate-fade-in">{children}</main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
