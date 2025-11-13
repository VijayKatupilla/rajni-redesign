"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Active section highlight logic
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
      {/* Navbar container */}
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 24px",
          color: "white",
        }}
      >
        {/* Left links (hidden on mobile) */}
        <div className="hidden md:flex" style={{ display: "flex", gap: "25px" }}>
          {["home", "menu", "events"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
                transition: "color 0.3s",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <div style={{ flexShrink: 0 }}>
          <Link href="#home">
            <img
              src="/logo1.png"
              alt="Rajni Logo"
              width={120}
              height={60}
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>
        </div>

        {/* Right links (hidden on mobile) */}
        <div className="hidden md:flex" style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          {["catering", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
                transition: "color 0.3s",
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
              padding: "6px 14px",
              borderRadius: "5px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Order Online
          </a>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#FFD700",
            fontSize: "28px",
            display: "block",
          }}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.95)",
            color: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            padding: "20px 0",
          }}
        >
          {["home", "menu", "events", "catering", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                padding: "12px 0",
                color: "#FFD700",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 500,
              }}
              onClick={() => setMenuOpen(false)}
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
