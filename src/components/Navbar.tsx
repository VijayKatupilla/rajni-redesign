"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Instagram } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "menu", label: "Menu" },
  { id: "specials", label: "Spls" },
  { id: "catering", label: "Catering" },
  { id: "order", label: "OrderOnline" },
];

export default function Navbar() {
  const [active, setActive] = useState(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      setIsScrolled(window.scrollY > 30);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActive(sections[i].id);
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
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar__logo">
          <Link href="#home">
            <Image src="/images/logo1.png" alt="Rajni Logo" width={180} height={64} priority />
          </Link>
        </div>

        <div className="navbar__links">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className={active === section.id ? "active" : ""}>
              {section.label}
            </a>
          ))}
          <a
            className="gift-link"
            href="https://order.toasttab.com/egiftcards/rajni-madison-429-commerce-drive"
            target="_blank"
            rel="noreferrer"
          >
            Buy Gift Card
          </a>
        </div>

        <div className="navbar__actions">
          <div className="navbar__icons">
            <a href="https://www.facebook.com/p/Rajni-Madison-61555122544407/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a
              className="google-g"
              href="https://www.google.com/search?q=rajni+indian+cuisine+madison+wi"
              target="_blank"
              rel="noreferrer"
              aria-label="Google"
            >
              G
            </a>
          </div>
          <a
            className="solid"
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </div>

        <div className="navbar__mobile-right">
          <div className="navbar__icons navbar__icons--mobile">
            <a href="https://www.facebook.com/p/Rajni-Madison-61555122544407/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a
              className="google-g"
              href="https://www.google.com/search?q=rajni+indian+cuisine+madison+wi"
              target="_blank"
              rel="noreferrer"
              aria-label="Google"
            >
              G
            </a>
          </div>
          <button className="navbar__mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span aria-hidden="true">&#9776;</span>
          </button>
        </div>
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
            <a key={section.id} href={`#${section.id}`} onClick={() => setMenuOpen(false)}>
              {section.label}
            </a>
          ))}
        </div>
        <div className="drawer-actions">
          <a
            className="ghost"
            href="https://order.toasttab.com/egiftcards/rajni-madison-429-commerce-drive"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Buy Gift Card
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
          gap: 14px;
          padding: 12px 22px;
          background: linear-gradient(180deg, rgba(76, 45, 28, 0.9), rgba(76, 45, 28, 0.7));
          backdrop-filter: blur(4px);
          border-bottom: none;
          box-shadow: none;
          font-family: var(--body-font);
          color: #f6f6f6;
          transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .navbar.scrolled {
          background: linear-gradient(180deg, rgba(76, 45, 28, 0.98), rgba(76, 45, 28, 0.85));
          backdrop-filter: blur(5px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.24);
        }

        .navbar__logo :global(img) {
          width: clamp(120px, 12vw, 180px);
          height: auto;
        }

        .navbar__links {
          display: flex;
          justify-content: center;
          gap: 16px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: clamp(15px, 1vw, 20px);
          font-family: var(--heading-font);
          align-items: center;
        }

        .navbar__links a {
          color: rgba(255, 255, 255, 0.76);
          padding-bottom: 6px;
          border-bottom: 2px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease;
        }

        .navbar__links a:hover,
        .navbar__links a.active {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.7);
        }

        .gift-link {
          color: #fff;
          font-weight: 800;
          border-bottom: 2px solid transparent;
          padding-bottom: 6px;
          text-decoration: none;
        }

        .gift-link:hover {
          border-color: rgba(255, 255, 255, 0.7);
        }

        .navbar__actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
        }

        .navbar__mobile-right {
          display: none;
        }

        .navbar__actions a,
        .drawer-actions a {
          padding: 9px 12px;
          border-radius: 999px;
          font-weight: 800;
          text-decoration: none;
          text-align: center;
          font-size: 13px;
          letter-spacing: 0.01em;
          font-family: var(--body-font);
        }

        .ghost {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .solid {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          border: none;
        }

        .navbar__mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.26);
          color: #fff;
          font-size: 28px;
          padding: 6px 12px;
          border-radius: 10px;
        }

        .navbar__icons {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: 8px;
        }

        .navbar__icons--mobile {
          margin-left: 0;
          margin-right: 6px;
          gap: 8px;
        }

        .navbar__icons--mobile :global(svg) {
          width: 22px;
          height: 22px;
        }

        .navbar__icons a {
          color: #fff;
          display: inline-flex;
        }

        .google-g {
          font-weight: 800;
          font-size: 14px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.4);
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
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
          background: linear-gradient(180deg, rgba(76, 45, 28, 0.96), rgba(76, 45, 28, 0.9));
          color: #f7efe2;
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
          color: rgba(247, 239, 226, 0.78);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-decoration: none;
        }

        .drawer-links a:hover {
          color: #f7efe2;
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

          .navbar__mobile-right {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            justify-self: end;
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
