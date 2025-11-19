"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

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
      {/* ✅ DESKTOP NAVBAR (unchanged) */}
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

        {/* Navigation Buttons (Below Logo) */}
        <div
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

      {/* ✅ MOBILE BOTTOM NAVBAR (only visible on mobile) */}
      <div
        className="navbar-mobile"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(175, 120, 9, 0.96)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "8px 0",
          zIndex: 90,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {links.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            style={{
              color: active === section ? "#FFD700" : "white",
              textDecoration: "none",
              fontSize: "13px",
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
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: 600,
            fontSize: "12px",
            textDecoration: "none",
          }}
        >
          Order
        </a>
      </div>

      {/* ✅ CSS to hide top navbar on mobile and show bottom nav */}
      <style jsx>{`
        /* Hide bottom navbar on desktop */
        @media (min-width: 768px) {
          .navbar-mobile {
            display: none;
          }
        }

        /* Hide top navbar on mobile */
        @media (max-width: 767px) {
          .navbar-desktop {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
