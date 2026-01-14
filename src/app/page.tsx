"use client";

import Image from "next/image";
import { useEffect } from "react";
import GoogleReviews from "../components/GoogleReviews";

const heroReel = [
  "/images/gallery-1.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-17.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-16.jpg",
];
const sharedBg = "/images/gallery-2.0.jpg";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <section id="home" className="hero with-bg">
        <div className="hero__reel">
          {heroReel.map((src, idx) => (
            <div
              key={src}
              className="hero__frame"
              style={{ animationDelay: `${idx * 4}s`, animationDuration: "30s" }}
            >
              <Image
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 768px) 140vw, 100vw"
                quality={90}
                style={{ objectFit: "cover" }}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
        <div className="hero__glow" />
        <div className="hero__content reveal reveal-up">
          <p className="eyebrow">Modern Indian Dining</p>
          <h1 className="hero__title">
            <span className="hero__title-large">Rajni</span>
            <span className="hero__title-small">Indian Cuisine</span>
          </h1>
          <p className="lede">
            A bright, celebratory dining room with handcrafted masalas, drinks, and catering for nights that linger.
          </p>
          <div className="hero__actions">
            <a className="btn primary" href="#order">
              Order Online
            </a>
            <a className="btn secondary" href="#catering">
              Catering & Events
            </a>
          </div>
        </div>
        <div className="hero__location-chip">
          <span className="hero__pin" aria-hidden="true" />
          <span>429 Commerce Drive, Madison, WI 53719</span>
        </div>
      </section>

      <section id="about" className="panel with-bg" style={{ ["--panel-bg" as string]: `url(${sharedBg})` }}>
        <div className="panel__content reveal reveal-up about__layout">
          <div className="about__media">
            <div className="about__image reveal reveal-left">
              <Image
                src="/images/gallery-8.jpg"
                alt="Rajni mural art"
                fill
                sizes="(min-width: 900px) 28vw, 88vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="about__content">
            <h2 className="section-title">About Us</h2>
            <p className="lede narrow">
              About Rajni: We are an authentic Indian restaurant group in across the US, providing customers with an unforgettable dining
              experience using only the freshest and highest quality ingredients since 2011. Founded in Parsippany, NJ in 2011, we have
              locations in Parsippany (NJ), Atlanta (GA), Madison (WI) and Bensalem (PA) with Brookfield (WI) coming soon!
            </p>
            <div className="grid stack">
              <div className="card reveal reveal-left">
                <h3>Heritage</h3>
                <p className="muted">Hand-ground spices, slow-simmered sauces, and dishes shared across generations.</p>
              </div>
              <div className="card reveal reveal-right">
                <h3>Atmosphere</h3>
                <p className="muted">Glowing tables, art-lined walls, and service that keeps the night easy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="panel with-bg" style={{ ["--panel-bg" as string]: `url(${sharedBg})` }}>
        <div className="panel__content reveal reveal-up menu__layout">
          <div className="menu__content">
            <h2 className="section-title">Menu</h2>
            <p className="lede narrow">
              Explore tandoor platters, south Indian tiffins and dosas, authentic kothu parottas, and slow-braised curries. Browse the
              current menu or order directly online.
            </p>
            <div className="pill-row">
              <span className="pill alt">Vegetarian & Vegan</span>
              <span className="pill">Tandoor & Grills</span>
              <span className="pill">Tiffins & Dosas</span>
              <span className="pill">Kothu Parottas</span>
            </div>
            <div className="hero__actions">
              <a
                className="btn primary menu-cta"
                href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
                target="_blank"
                rel="noreferrer"
              >
                View Menu / Order
              </a>
            </div>
          </div>
          <div className="menu__media">
            <div className="menu__image reveal reveal-right">
              <Image
                src="/hero-bg.jpg"
                alt="Rajni dishes"
                fill
                sizes="(min-width: 900px) 28vw, 88vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="order"
        className="panel with-bg"
        style={{ ["--panel-bg" as string]: `url(${sharedBg})` }}
      >
        <div className="panel__content reveal reveal-up">
          <h2 className="section-title center">Order Online</h2>
          <p className="lede narrow">
            Pickup, delivery, and scheduled orders. Choose your time, pick your dishes, and add notes for spice or celebrations.
          </p>
          <div className="grid two">
            <div className="card">
              <h3>How it works</h3>
              <p className="muted">Select pickup or delivery, browse curries, biryanis, and breads, and add your notes.</p>
            </div>
            <div className="card">
              <h3>Need help?</h3>
              <p className="muted">Call and we'll guide you through the menu.</p>
              <a className="btn secondary" href="tel:+16081234567">
                Call Rajni Madison
              </a>
            </div>
          </div>
          <div className="hero__actions">
            <a
              className="btn primary"
              href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      <section id="specials" className="panel with-bg" style={{ ["--panel-bg" as string]: `url(${sharedBg})` }}>
        <div className="panel__content reveal reveal-up">
          <h2 className="section-title">Weekend & Daily Specials</h2>
          <p className="lede narrow">Rotating thalis, speedy lunches, and shareable curry duos crafted for every visit.</p>
          <div className="card-grid">
            {[
              { title: "Weekend Chef's Thali", tag: "Sat + Sun", desc: "Rotating curries, house pickle, dessert for two." },
              { title: "Express Lunch", tag: "Weekdays 11-2:30", desc: "Fast plates with naan and salad - perfect mid-day." },
              { title: "Two Curry Combo", tag: "Weekdays 11-2:30", desc: "Choose any two curries with rice, naan, and chutneys." },
            ].map((item) => (
              <div key={item.title} className="card reveal reveal-up">
                <div className="pill-row">
                  <span className="pill alt">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catering" className="panel with-bg" style={{ ["--panel-bg" as string]: `url(${sharedBg})` }}>
        <div className="panel__content reveal reveal-up">
          <h2 className="section-title center">Catering & Events</h2>
          <p className="lede narrow">
            Tell us about your occasion and guest count; we'll tailor the menu and service style.
          </p>
          <div className="card focus">
            <div className="pill-row">
              <span className="pill">Staffed</span>
              <span className="pill alt">Buffet or plated</span>
            </div>
            <p className="muted">Reach our catering team directly to plan your menu and service style.</p>
            <div className="hero__actions">
              <a className="btn primary" href="tel:+16081234567">
                Call (608) 123-4567
              </a>
              <a className="btn secondary" href="mailto:info@rajnimadison.com">
                Email Catering
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-top: 96px;
          background: #000;
        }

        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          color: #fff;
          background: #000;
        }

        .hero__reel {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 1;
          filter: brightness(1.08) saturate(1.08);
        }

        .hero__frame {
          position: absolute;
          inset: 0;
          animation: slow-pan 45s linear infinite;
          animation-fill-mode: both;
          transform-origin: center;
          will-change: transform, opacity;
          opacity: 0;
        }

        @keyframes slow-pan {
          0% {
            transform: scale(1) translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          20% {
            transform: scale(1.04) translateX(2%);
            opacity: 1;
          }
          30% {
            opacity: 0;
          }
          100% {
            transform: scale(1.08) translateX(6%);
            opacity: 0;
          }
        }

        .hero__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, rgba(255, 225, 170, 0.48), transparent 52%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.32));
        }

        .hero__content {
          position: relative;
          max-width: 880px;
          padding: 20px;
          display: grid;
          gap: 12px;
          z-index: 1;
        }

        .hero__title {
          display: grid;
          gap: 6px;
          margin: 6px 0 10px;
        }

        .hero__title-large {
          font-family: var(--heading-font);
          font-size: clamp(60px, 8vw, 96px);
          letter-spacing: 0.06em;
        }

        .hero__title-small {
          font-family: var(--heading-font);
          font-size: clamp(28px, 4.8vw, 40px);
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        .hero__location-chip {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          color: #fffaf3;
          letter-spacing: 0.05em;
          font-weight: 700;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          z-index: 1;
        }

        .hero__pin {
          width: 14px;
          height: 14px;
          border-radius: 8px 8px 8px 0;
          transform: rotate(45deg);
          background: #f0c777;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: inline-block;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          color: #f0c777;
          margin: 0;
          font-weight: 700;
        }

        .lede {
          color: rgba(255, 255, 255, 0.86);
          font-size: 15px;
          line-height: 1.7;
          margin: 0 auto;
        }

        .lede.narrow {
          max-width: 760px;
          margin-bottom: 16px;
        }

        .hero__actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid transparent;
          min-width: 160px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .btn.primary {
          background: linear-gradient(135deg, #f8dba3, #d89a3c);
          color: #1f1207;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24);
        }

        .btn.secondary {
          border-color: rgba(255, 255, 255, 0.36);
          color: #f7efe2;
          background: rgba(255, 255, 255, 0.08);
        }

        .menu-cta {
          min-width: 200px;
          padding: 12px 18px;
          font-size: 15px;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28);
        }

        .panel {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .with-bg {
          isolation: isolate;
          overflow: hidden;
          background-attachment: fixed;
        }

        .hero.with-bg::before {
          display: none;
        }

        .with-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--panel-bg);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          z-index: -2;
        }

        .with-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: -1;
        }

        #about.with-bg::before,
        #menu.with-bg::before,
        #specials.with-bg::before,
        #catering.with-bg::before {
          filter: none;
          transform: none;
        }

        #about.with-bg::after,
        #menu.with-bg::after,
        #specials.with-bg::after,
        #catering.with-bg::after {
          background: rgba(0, 0, 0, 0.55);
        }

        #order.with-bg::before {
          filter: blur(18px) saturate(1.1);
          transform: scale(1.05);
          background-position: center;
        }

        #order.with-bg::after {
          background: linear-gradient(180deg, rgba(76, 45, 28, 0.82), rgba(76, 45, 28, 0.7));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .panel__content {
          position: relative;
          padding: 44px 20px 34px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .section-title {
          font-family: var(--heading-font);
          font-size: clamp(46px, 6.8vw, 68px);
          letter-spacing: 0.04em;
          font-weight: 700;
          margin: 0 0 6px;
          color: #f7efe2;
        }

        .section-title.center {
          text-align: center;
        }

        h3 {
          margin: 0 0 8px;
          font-family: var(--heading-font);
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          color: #f7efe2;
        }

        .muted {
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
        }

        .grid.two {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
        }

        .grid.stack {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .grid.stack .card {
          max-width: 520px;
          width: 100%;
          justify-self: center;
        }

        .about__layout {
          display: grid;
          grid-template-columns: minmax(240px, 1fr) minmax(240px, 0.8fr);
          gap: 16px;
          align-items: start;
        }

        .about__media {
          display: grid;
          gap: 10px;
          max-width: 300px;\n          width: 100%;\n          justify-self: start;\n          margin-top: 20px;\n          margin-top: 16px;
        }

        .about__image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          min-height: 200px;
          aspect-ratio: 4 / 5;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.28);
        }

        /* Brighten About image to feel more vivid */
        .about__image :global(img) {
          filter: brightness(1.12) saturate(1.08) contrast(1.05);
        }

        /* Adjust about layout sizing and image fit */
        .about__layout {
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(280px, 0.9fr);
          gap: 12px;
          align-items: start;
        }

        .about__media {
          display: grid;
          gap: 10px;
          max-width: 520px;
          width: 100%;
          justify-self: stretch;
          align-self: stretch;
          margin-top: 50;
        }

        .about__image {
          border-radius: 12px;
          min-height: 330px;
          height: 100%;
          aspect-ratio: 10/6;
        }

        .menu__layout {
          display: grid;
          grid-template-columns: minmax(320px, 1fr) minmax(240px, 0.7fr);
          gap: 14px;
          align-items: center;
        }

        .menu__content {
          display: grid;
          gap: 12px;
          text-align: center;
        }

        .menu__media {
          position: relative;
          justify-self: center;
          max-width: 520px;
          width: 100%;
          align-self: stretch;
        }

        .menu__image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          min-height: 400px;
          height: 100%;
          aspect-ratio: unset;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.32);
        }

        .card {
          background: rgba(0, 0, 0, 0.32);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 14px;
          color: #f7efe2;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
          display: grid;
          gap: 6px;
        }

        .card.focus {
          background: rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .card p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(194, 123, 22, 0.22);
          color: #f7efe2;
          border: 1px solid rgba(194, 123, 22, 0.35);
          font-weight: 600;
        }

        .pill.alt {
          background: rgba(199, 63, 63, 0.22);
          color: #f0c777;
          border-color: rgba(199, 63, 63, 0.26);
        }

        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .reveal-left {
          transform: translateX(-60px);
        }

        .reveal-right {
          transform: translateX(60px);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translate(0, 0);
        }

        @media (max-width: 980px) {
          .page {
            padding-top: 0;
            position: relative;
          }

          .hero {
            min-height: 90vh;
            padding-top: 82px;
          }

          .panel__content {
            padding: 36px 18px 28px;
          }

          .about__layout,
          .menu__layout {
            grid-template-columns: 1fr;
          }

          .about__media,
          .menu__media {
            max-width: 100%;
            width: 100%;
            align-self: stretch;
            justify-self: center;
          }

          .about__image,
          .menu__image {
            height: auto;
            min-height: 260px;
            aspect-ratio: 4 / 3;
          }

          .hero__location-chip {
            font-size: 11px;
            padding: 7px 11px;
            letter-spacing: 0.02em;
            white-space: nowrap;
          }

          .about__image :global(img),
          .menu__image :global(img) {
            filter: brightness(1.12) saturate(1.08) contrast(1.05);
          }
        }
      `}</style>
    </div>
  );
}
