"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { locations, useLocation } from "../context/LocationContext";

export default function Footer() {
  const { selectedIndex, setSelectedIndex } = useLocation();
  const active = locations[selectedIndex];
  const phoneHref = active.phone.replace(/[^\d]/g, "");
  const activeEmail = active.email || "info@rajnimadison.com";

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Image src="/images/logo1.png" alt="Rajni logo" width={180} height={64} />
          <p>Rajni Indian Cuisine</p>
          <span>Red booths, warm spices, and welcoming hospitality.</span>
        </div>

        <div className="footer__group">
          <h3>Locations</h3>
          <div className="footer__locations">
            <div className="footer__location">
              <strong>{active.name}</strong>
              <span>{active.address}</span>
              <a href={active.map} target="_blank" rel="noreferrer">
                View map -&gt;
              </a>
              <a href={`tel:${active.phone.replace(/[^\d]/g, "")}`}>{active.phone}</a>
            </div>
            <div className="footer__location footer__location--list">
              <strong>Select location</strong>
              <div className="footer__location-buttons">
                {locations.map((loc, idx) => (
                  <a
                    key={loc.name}
                    href="#locations"
                    className={idx === selectedIndex ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedIndex(idx);
                    }}
                  >
                    {loc.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <h3>Hours ({active.name})</h3>
          <p>
            {active.hours.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <span className="tag">Dine-in | Takeout | Catering</span>
        </div>

        <div className="footer__group">
          <h3>Contact & Links</h3>
          <p>
            <a href={`tel:${phoneHref}`}>{active.phone}</a>
            <br /> <a href={`mailto:${activeEmail}`}>{activeEmail}</a>
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/p/Rajni-Madison-61555122544407/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
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
          <div className="footer__links">
            <a href="#catering">Catering</a>
            {active.order ? (
              <a className="cta" href={active.order} target="_blank" rel="noreferrer">
                Order Online -{">"}
              </a>
            ) : (
              <a className="cta" href={`tel:${phoneHref}`}>
                Call to Order -{">"}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer__bottom">(c) {new Date().getFullYear()} Rajni Indian Cuisine - All Rights Reserved</div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, rgba(76, 45, 28, 0.9), rgba(76, 45, 28, 0.7));
          padding: 44px 18px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: #f7efe2;
          font-size: 13px;
          backdrop-filter: blur(4px);
        }

        .footer__inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
          max-width: 1100px;
          margin: 0 auto 30px;
        }

        .footer__brand :global(img) {
          width: 160px;
          height: auto;
          margin-bottom: 10px;
        }

        .footer__brand p {
          font-weight: 700;
          color: #f7efe2;
          margin: 0 0 6px;
        }

        .footer__brand span {
          color: var(--muted);
        }

        h3 {
          margin: 0 0 8px;
          color: var(--cream);
          font-size: 15px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        p {
          margin: 0 0 8px;
          line-height: 1.55;
          font-size: 13px;
        }

        a {
          color: #f0c777;
          text-decoration: none;
          font-size: 13px;
        }

        a:hover {
          text-decoration: underline;
        }

        .footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer__links a {
          color: #f7efe2;
        }

        .footer__links a.cta {
          color: var(--accent);
          font-weight: 700;
        }

        .footer__socials {
          display: flex;
          gap: 10px;
          margin: 6px 0 10px;
        }

        .footer__socials a {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.8);
          color: var(--muted);
        }

        .footer__socials .google-g {
          font-weight: 800;
          font-size: 14px;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid var(--border);
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.8);
          color: var(--muted);
        }

        .footer__socials a:hover {
          color: var(--cream);
          border-color: var(--gold);
        }

        .footer__locations {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .footer__location {
          display: grid;
          gap: 4px;
          padding: 10px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }

        .footer__location--list {
          background: rgba(255, 255, 255, 0.08);
        }

        .footer__location-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 8px;
        }

        .footer__location-buttons a {
          display: inline-block;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: #ffffffff;
          text-align: center;
          font-weight: 700;
        }

        .footer__location-buttons a.active {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          border-color: transparent;
        }

        .tag {
          display: inline-block;
          margin-top: 6px;
          padding: 8px 12px;
          border-radius: 10px;
          background: rgba(194, 123, 22, 0.12);
          color: var(--cream);
        }

        .footer__bottom {
          text-align: center;
          border-top: 1px solid var(--border);
          padding-top: 12px;
          font-size: 12px;
        }

        @media (max-width: 720px) {
          .footer {
            padding: 20px 16px 20px;
          }
        }
      `}</style>
    </footer>
  );
}
