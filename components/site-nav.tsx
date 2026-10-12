"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", number: "01" },
  { href: "/projects", label: "Projects", number: "02" },
  { href: "/contact", label: "Contact", number: "03" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Your Name, home">
        <span className="wordmark-icon" aria-hidden="true">G</span>
        <span>Gamertsoi<span className="wordmark-period"></span></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {links.map((link) => {
          const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
          return (
            <Link
              className={`nav-link${active ? " nav-link-active" : ""}`}
              href={link.href}
              key={link.href}
              aria-current={active ? "page" : undefined}
            >
              <span className="nav-number">{link.number}</span>
              {link.label}
              {active && <span className="nav-indicator" aria-hidden="true" />}
            </Link>
          );
        })}
      </nav>
      <span className="availability"><span /> OPEN TO IDEAS</span>
    </header>
  );
}
