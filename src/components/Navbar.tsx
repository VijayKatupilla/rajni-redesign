"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = ["home", "about", "experience", "specials", "reserve", "gallery", "reviews"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("mobileMenuToggle", { detail: { open: menuOpen } }));
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <Link href="#home">
            <Image src="/images/logo1.png" alt="Rajni Logo" width={180} height={64} priority />
          </Link>
        </div>

        <div className="navbar__links">
          {sections.map((section) => (
            <a key={section} href={`#${section}`} className={active === section ? "active" : ""}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <a className="ghost" href="#reserve" aria-label="Reserve a table">
            Reserve
          </a>
          <a
            className="solid"
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </div>

        <button className="navbar__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span aria-hidden="true">&#9776;</span>
        </button>
      </nav>

      {menuOpen && <div className="backdrop" onClick={() => setMenuOpen(false)} />}

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <Image src="/images/logo1.png" alt="Rajni Logo" width={160} height={60} />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            X
          </button>
        </div>
        <div className="drawer-links">
          {sections.map((section) => (
            <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        <div className="drawer-actions">
          <a className="ghost" href="#reserve" onClick={() => setMenuOpen(false)}>
            Reserve
          </a>
          <a
            className="solid"
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Order Online
          </a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 80;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          align-items: center;
          gap: 18px;
          padding: 14px 32px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          font-family: var(--body-font);
        }

        .navbar__logo :global(img) {
          width: clamp(120px, 12vw, 180px);
          height: auto;
        }

        .navbar__links {
          display: flex;
          justify-content: center;
          gap: 20px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: clamp(12px, 1.1vw, 14px);
          font-family: var(--heading-font);
        }

        .navbar__links a {
          color: var(--muted);
          padding-bottom: 6px;
          border-bottom: 2px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .navbar__links a:hover,
        .navbar__links a.active {
          color: var(--text);
          border-color: var(--gold);
        }

        .navbar__actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .navbar__actions a,
        .drawer-actions a {
          padding: 10px 14px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          font-size: 14px;
          letter-spacing: 0.01em;
          font-family: var(--body-font);
        }

        .ghost {
          border: 1px solid var(--border);
          color: var(--text);
          background: rgba(255, 255, 255, 0.6);
        }

        .solid {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          border: none;
        }

        .navbar__mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 28px;
          padding: 6px 12px;
          border-radius: 10px;
        }

        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 90;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: min(320px, 80%);
          background: #fff8ee;
          z-index: 120;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: right 0.3s ease;
          border-left: 1px solid var(--border);
          box-shadow: -12px 0 30px rgba(0, 0, 0, 0.08);
        }

        .mobile-drawer.open {
          right: 0;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .drawer-header :global(img) {
          width: 150px;
          height: auto;
        }

        .drawer-header button {
          background: transparent;
          border: none;
          color: var(--text);
          font-size: 32px;
        }

        .drawer-links {
          display: grid;
          gap: 12px;
          margin-top: 6px;
        }

        .drawer-links a {
          color: var(--muted);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
        }

        .drawer-links a:hover {
          color: var(--text);
        }

        .drawer-actions {
          margin-top: auto;
          display: grid;
          gap: 10px;
        }

        @media (max-width: 980px) {
          .navbar {
            grid-template-columns: 1fr auto;
            align-items: center;
          }

          .navbar__links,
          .navbar__actions {
            display: none;
          }

          .navbar__mobile-toggle {
            display: block;
            justify-self: end;
          }
        }
      `}</style>
    </>
  );
}
