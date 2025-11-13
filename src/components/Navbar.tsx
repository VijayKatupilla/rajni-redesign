"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "menu", "events", "catering", "gallery", "contact"];
      const scrollPos = window.scrollY + 100;

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
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 40px", // ⬅️ reduced padding for tighter layout
          fontFamily: "sans-serif",
        }}
      >
        {/* LEFT LINKS */}
        <div style={{ display: "flex", gap: "30px" }}>
          {["home", "menu", "events"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div style={{ flexShrink: 0 }}>
          <Link href="#home">
            <img
              src="/logo1.png"
              alt="Rajni Logo"
              width={130}
              height={65}
              style={{ display: "block", margin: "0 30px" }}
            />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {["catering", "gallery", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: active === section ? "#FFD700" : "white",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
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
      </div>
    </nav>
  );
}
