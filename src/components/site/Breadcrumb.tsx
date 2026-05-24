import { Link, useLocation } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function Breadcrumb() {
  const { pathname } = useLocation();
  
  // Map paths to breadcrumb labels
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    "/": [{ label: "Home", path: "/" }],
    "/services": [
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" }
    ],
    "/about": [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" }
    ],
    "/contact": [
      { label: "Home", path: "/" },
      { label: "Contact", path: "/contact" }
    ],
    "/privacy": [
      { label: "Home", path: "/" },
      { label: "Privacy Policy", path: "/privacy" }
    ],
    "/terms": [
      { label: "Home", path: "/" },
      { label: "Terms & Conditions", path: "/terms" }
    ],
  };

  const breadcrumbs = breadcrumbMap[pathname] || [{ label: "Home", path: "/" }];

  // Don't show breadcrumb on homepage
  if (pathname === "/") return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mx-auto max-w-7xl px-4 sm:px-6 py-4 mt-20"
    >
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="h-4 w-4 text-ink-muted" />}
            {index === breadcrumbs.length - 1 ? (
              <span aria-current="page" className="text-ink font-semibold">
                {crumb.label}
              </span>
            ) : (
              <Link 
                to={crumb.path as any}
                className="text-ink-muted hover:text-ink transition"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
