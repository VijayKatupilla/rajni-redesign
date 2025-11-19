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
      {/* ✅ DESKTOP NAVBAR */}
      <nav
        className="navbar-desktop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px 10px",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Centered Logo */}
        <div style={{ marginBottom: "6px" }}>
          <Link href="#home">
            <img
              src="/logo1.png"
              alt="Rajni Logo"
              style={{
                width: "clamp(110px, 20vw, 180px)",
                height: "auto",
              }}
            />
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div
          className="desktop-links"
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            justifyContent: "center",
            fontSize: "clamp(12px, 1.6vw, 16px)",
            paddingBottom: "4px",
          }}
        >
          {links.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            style={{
              backgroundColor: "#FFD700",
              color: "#000",
              padding: "4px 10px",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "clamp(11px, 1.5vw, 14px)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Order Online
          </a>
        </div>
      </nav>

      {/* ✅ MOBILE TOP BAR */}
      <nav className="navbar-mobile-top">
        <div className="mobile-top-inner">
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

      {/* ✅ MOBILE SIDE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <div className="menu-content">
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

      {/* ✅ MOBILE BOTTOM NAVBAR */}
      <div className="navbar-mobile-bottom">
        {links.map((section) => (
          <a key={section} href={`#${section}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="order-btn"
        >
          Order
        </a>
      </div>

      {/* ✅ STYLES */}
      <style jsx>{`
        /* -------- DESKTOP ONLY -------- */
        @media (min-width: 768px) {
          .navbar-mobile-top,
          .navbar-mobile-bottom,
          .mobile-menu {
            display: none;
          }
        }

        /* -------- MOBILE ONLY -------- */
        @media (max-width: 767px) {
          .navbar-desktop {
            display: none;
          }

          /* Top bar */
          .navbar-mobile-top {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            padding: 8px 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }

          .mobile-top-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .mobile-logo {
            width: 120px;
            height: auto;
          }

          .hamburger-btn {
            background: transparent;
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
          }

          /* Slide-in menu (stacked links, aligned left, top start) */
          .mobile-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 70%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            color: white;
            z-index: 200;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 70px 25px;
            gap: 16px;
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
            top: 20px;
            right: 20px;
            background: transparent;
            border: none;
            color: #ffd700;
            font-size: 24px;
            cursor: pointer;
          }

          .menu-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .menu-content a {
            color: white;
            font-size: 18px;
            text-decoration: none;
            font-weight: 500;
          }

          .menu-content a:hover {
            color: #ffd700;
          }

          .order-link {
            color: #ffd700;
            font-weight: 600;
            font-size: 18px;
            text-decoration: underline;
            margin-top: 10px;
          }

          /* Bottom fixed navbar */
          .navbar-mobile-bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 8px 0;
            z-index: 90;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .navbar-mobile-bottom a {
            color: white;
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
          }

          .navbar-mobile-bottom a:hover {
            color: #ffd700;
          }

          .order-btn {
            background-color: #ffd700;
            color: #000;
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
