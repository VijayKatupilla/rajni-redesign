"use client";

const links = [
  { label: "Home", href: "#home" },
  { label: "Order", href: "https://order.toasttab.com/online/rajni-madison-429-commerce-drive", external: true },
  { label: "Reserve", href: "#reserve" },
  { label: "Specials", href: "#specials" },
  { label: "Events", href: "#events" },
];

export default function MobileBottomNav() {
  return (
    <nav className="mobile-nav" aria-label="Quick mobile navigation">
      <div className="mobile-nav__links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className={`mobile-nav__link ${link.label === "Order" ? "order" : ""}`}
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
          padding: 10px 12px calc(12px + env(safe-area-inset-bottom));
          background: rgba(13, 8, 4, 0.82);
          backdrop-filter: blur(12px);
          color: #fff;
          z-index: 130;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 -10px 24px rgba(0, 0, 0, 0.16);
        }

        .mobile-nav__links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
          gap: 8px;
          align-items: stretch;
        }

        .mobile-nav__link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.08);
          color: #f9efe3;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
        }

        .mobile-nav__link.order {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          border-color: transparent;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
        }

        .mobile-nav__link:active {
          transform: translateY(1px);
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
