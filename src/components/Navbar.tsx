"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "events", "catering", "gallery"];
      const scrollPos = window.scrollY + 120;
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

  const links = ["home", "menu", "events", "catering", "gallery"];

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <nav className="navbar-desktop">
        <div className="desktop-logo">
          <Link href="#home">
            <img src="/logo1.png" alt="Rajni Logo" className="logo-img" />
          </Link>
        </div>

        <div className="desktop-links">
          {links.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={active === section ? "active-link" : ""}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            className="order-btn-desktop"
          >
            Order Online
          </a>
        </div>
      </nav>

      {/* ===== MOBILE TOP BAR ===== */}
      <nav className="navbar-mobile-top">
        <div className="mobile-header">
          <Link href="#home">
            <img src="/logo1.png" alt="Rajni Logo" className="mobile-logo" />
          </Link>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ===== MOBILE SIDE MENU ===== */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ☰
          </button>
          <div className="mobile-menu-links">
            {links.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a
              href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="order-link"
            >
              Order Online →
            </a>
          </div>
        </div>
      )}

      {/* ===== MOBILE BOTTOM NAVBAR ===== */}
      <div className="navbar-mobile-bottom">
        {links.map((section) => (
          <a key={section} href={`#${section}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bottom-order-btn"
        >
          Order
        </a>
      </div>

      {/* ===== THEME STYLES ===== */}
      <style jsx>{`
        :root {
          --gold: #ffd700;
          --maroon: #800000;
          --black: #0c0c0c;
          --cream: #f5f0e1;
          --gray: #c5bfbf;
        }

        a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        a:hover {
          color: var(--gold);
        }

        /* Desktop navbar */
        .navbar-desktop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          background: rgba(61, 41, 1, 0.97);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 10px;
          text-align: center;
        }

        .logo-img {
          width: clamp(110px, 20vw, 180px);
          height: auto;
        }

        .desktop-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          font-size: clamp(12px, 1.6vw, 16px);
          padding-bottom: 4px;
        }

        .order-btn-desktop {
          background-color: yellow;
          color: var(--gold);
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
        }

        .active-link {
          color: white;
        }

        /* Mobile top navbar */
        .navbar-mobile-top {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: var(--black);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-bottom: 1px solid rgba(255, 215, 0, 0.2);
          display: none; /* hidden on desktop */
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mobile-logo {
          width: 130px;
          height: auto;
        }

        .hamburger-btn {
          background: transparent;
          border: 2px solid var(--gold);
          color: white;
          border-radius: 6px;
          font-size: 36px;
          padding: 4px 10px;
          margin-right: 24px; /* moved slightly inward */
          cursor: pointer;
        }

        /* Mobile side menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 70%;
          height: 100vh;
          background: var(--maroon);
          color: white;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 80px 30px;
          gap: 20px;
          animation: slideIn 0.3s ease forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--gold);
          font-size: 36px;
          cursor: pointer;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          gap: 18px;
        }

        .order-link {
          color: yellow;
          font-weight: 600;
          font-size: 18px;
          text-decoration: underline;
          margin-top: 10px;
        }

        /* Mobile bottom navbar */
        .navbar-mobile-bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--black);
          backdrop-filter: blur(8px);
          display: none;
          justify-content: space-around;
          align-items: center;
          padding: 8px 0;
          z-index: 90;
          border-top: 1px solid rgba(255, 215, 0, 0.2);
        }

        .navbar-mobile-bottom a {
          color: black;
          font-size: 13px;
          font-weight: 500;
        }

        .navbar-mobile-bottom a:hover {
          color: var(--black);
        }

        .bottom-order-btn {
          background-color: yellow;
          color: black;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
        }

        /* Responsive visibility */
        @media (max-width: 767px) {
          .navbar-desktop {
            display: none;
          }
          .navbar-mobile-top {
            display: block;
          }
          .navbar-mobile-bottom {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
