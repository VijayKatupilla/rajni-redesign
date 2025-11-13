"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "events", "catering", "gallery", "contact"];
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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* Main navbar */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 20px",
          color: "white",
        }}
      >
        {/* Left Links (hidden on small screens) */}
        <div
          className="desktop-links"
          style={{
            display: "none",
          }}
        >
          {["home", "menu", "events"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
                margin: "0 12px",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Logo (always visible) */}
        <div style={{ flexShrink: 0, textAlign: "center", flexGrow: 1 }}>
          <Link href="#home">
            <img
              src="/logo1.png"
              alt="Rajni Logo"
              width={110}
              height={55}
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>
        </div>

        {/* Right Links (hidden on small screens) */}
        <div
          className="desktop-links"
          style={{
            display: "none",
          }}
        >
          {["catering", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
                margin: "0 12px",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger menu button (visible on mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#FFD700",
            fontSize: "28px",
            cursor: "pointer",
            position: "absolute",
            right: "20px",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.95)",
            color: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            padding: "20px 0",
            animation: "fadeIn 0.4s ease-in-out",
          }}
        >
          {["home", "menu", "events", "catering", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 0",
                color: "#FFD700",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 500,
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
              margin: "12px auto 0",
              padding: "10px 18px",
              borderRadius: "5px",
              fontWeight: 600,
              width: "fit-content",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Order Online
          </a>
        </div>
      )}
    </nav>
  );
}
