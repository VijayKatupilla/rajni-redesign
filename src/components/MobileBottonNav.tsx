"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Spls", href: "#specials" },
  { label: "Catering", href: "#catering" },
  { label: "Order", href: "#order" },
];

export default function MobileBottomNav() {
  const [hideForHome, setHideForHome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const home = document.getElementById("home");
    if (!home) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHideForHome(!!entry?.isIntersecting);
      },
      { threshold: 0.45 }
    );

    observer.observe(home);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleToggle = (event: Event) => {
      const detail = (event as CustomEvent<{ open?: boolean }>).detail;
      if (typeof detail?.open === "boolean") {
        setMenuOpen(detail.open);
      }
    };

    window.addEventListener("mobileMenuToggle", handleToggle as EventListener);
    return () => window.removeEventListener("mobileMenuToggle", handleToggle as EventListener);
  }, []);

  const hidden = hideForHome || menuOpen;

  return (
    <nav className={`mobile-nav ${hidden ? "hidden" : ""}`} aria-label="Quick mobile navigation">
      <div className="mobile-nav__links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-nav__link"
          >
            {link.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        .mobile-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 9px 12px calc(10px + env(safe-area-inset-bottom));
          background: rgba(255, 255, 255, 0.86);
          color: #1b1209;
          z-index: 130;
          border-top: 1px solid var(--border);
          box-shadow: 0 -10px 22px rgba(0, 0, 0, 0.08);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }

        .mobile-nav__links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));
          gap: 6px;
          align-items: stretch;
        }

        .mobile-nav__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 7px;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.92);
          color: #1b1209;
          font-weight: 700;
          letter-spacing: 0;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 9px;
        }

        .mobile-nav__link:active {
          transform: translateY(1px);
        }

        .mobile-nav.hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(10px);
        }

        @media (min-width: 981px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
