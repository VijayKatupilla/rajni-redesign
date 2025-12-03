"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import GoogleReviews from "../components/GoogleReviews";
import { locations, useLocation } from "../context/LocationContext";

const heroBackground = "/images/gallery-3.jpg";

const aboutPoints = [
  "Small-batch curries, hand-ground spices, and recipes passed through our family.",
  "A dining room layered with red lounge seating, art, and the Longtable sense of welcome.",
  "Cocktails and lassis designed to cool, brighten, and celebrate every visit.",
];

const experience = [
  {
    title: "Crafted Like Home",
    description: "Family recipes and masalas toasted daily for depth and aroma.",
  },
  {
    title: "Sip & Savor",
    description: "Signature lassis, curated wines, and mocktails that balance the spice.",
  },
  {
    title: "Atmosphere",
    description: "Red booths, soft light, and playlists tuned for nights that linger.",
  },
];

const happenings = [
  {
    title: "Private Dining",
    text: "Intimate rooms for celebrations, corporate dinners, or meetups.",
  },
  {
    title: "Chef Tables",
    text: "Regional menus, tasting flights, and hosted experiences inspired by Longtable.",
  },
  {
    title: "Community Nights",
    text: "Bollywood brunches, spice workshops, and pairing events.",
  },
];

const specials = [
  {
    title: "Weekend Chef's Thali",
    description: "Rotating curries, house pickle, and dessert for two - built for slow, celebratory meals.",
    tag: "Saturday + Sunday",
  },
  {
    title: "Express Lunch",
    description: "Fast, vibrant plates with naan and salad - perfect for weekday breaks without losing flavor.",
    tag: "Weekdays 11-2:30",
  },
  {
    title: "Two Curry Combo",
    description: "Choose any two curries with rice, naan, and chutneys - shareable and always changing.",
    tag: "All Week",
  },
];

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Rajni dining room with red booths" },
  { src: "/images/gallery-2.jpg", alt: "Rajni mural art" },
  { src: "/images/gallery-3.jpg", alt: "Rajni Madison skyline art" },
  { src: "/images/gallery-4.jpg", alt: "Rajni dining setup" },
  { src: "/images/gallery-5.jpg", alt: "Rajni celebration balloons" },
  { src: "/images/gallery-6.jpg", alt: "Rajni carved fruit display" },
  { src: "/images/gallery-7.jpg", alt: "Rajni exterior sign at night" },
  { src: "/images/gallery-8.jpg", alt: "Rajni exterior entrance" },
  { src: "/images/gallery-9.jpg", alt: "Rajni dining booths at night" },
];

export default function HomePage() {
  const { selectedIndex, setSelectedIndex } = useLocation();
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isCateringOpen, setIsCateringOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [reserveStatus, setReserveStatus] = useState<{ state: "idle" | "loading" | "success" | "error"; message?: string; ref?: string }>({
    state: "idle",
  });
  const [cateringStatus, setCateringStatus] = useState<{ state: "idle" | "loading" | "success" | "error"; message?: string; ref?: string }>({
    state: "idle",
  });

  const activeLocation = useMemo(() => locations[selectedIndex], [selectedIndex]);
  const phoneHref = activeLocation.phone.replace(/[^\d]/g, "");
  const currentGalleryImage = galleryImages[galleryIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.18 }
    );

    const revealEls = document.querySelectorAll(".reveal");
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setGalleryIndex((i) => (i + 1) % galleryImages.length), 3600);
    return () => clearInterval(timer);
  }, []);

  const handleReserveSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reserveStatus.state === "loading") return;

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setReserveStatus({ state: "loading" });
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setReserveStatus({ state: "success", message: data?.message, ref: data?.reference });
      e.currentTarget.reset();
    } catch (error: any) {
      setReserveStatus({ state: "error", message: error?.message || "Failed to submit reservation" });
    }
  };

  const handleCateringSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cateringStatus.state === "loading") return;

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setCateringStatus({ state: "loading" });
    try {
      const res = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setCateringStatus({ state: "success", message: data?.message, ref: data?.reference });
      e.currentTarget.reset();
    } catch (error: any) {
      setCateringStatus({ state: "error", message: error?.message || "Failed to submit catering request" });
    }
  };

  return (
    <div className="page">
      <section id="home" className="hero with-bg" style={{ ["--panel-bg" as string]: `url(${heroBackground})` }}>
        <div className="hero__media">
          <Image src={heroBackground} alt="Rajni exterior" fill priority sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="hero__overlay" />
        <div className="hero__content reveal reveal-up">
          <div className="eyebrow">Modern Indian Dining</div>
          <h1>Rajni Indian Cuisine</h1>
          <p className="lede">
            A celebratory dining room inspired by Longtable - red lounge seating, handcrafted spices, and cocktails built for
            toasting every win.
          </p>
          <div className="location-tabs">
            {locations.map((loc, index) => (
              <button
                key={loc.name}
                className={`pill ${index === selectedIndex ? "active" : ""}`}
                onClick={() => setSelectedIndex(index)}
              >
                {loc.name}
              </button>
            ))}
          </div>
          <div className="location-card">
            <div>
              <p className="eyebrow">Now viewing</p>
              <h3>{activeLocation.name}</h3>
              <p className="muted">{activeLocation.city}</p>
            </div>
            <div className="location-meta">
              <span>{activeLocation.address}</span>
              <a href={`tel:${phoneHref}`}>{activeLocation.phone}</a>
              <div className="hero__actions">
                {activeLocation.order ? (
                  <a className="btn primary" href={activeLocation.order} target="_blank" rel="noreferrer">
                    Order Online
                  </a>
                ) : (
                  <a className="btn primary" href={`tel:${phoneHref}`}>
                    Call to Order
                  </a>
                )}
                <a className="btn secondary" href={activeLocation.map} target="_blank" rel="noreferrer">
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="panel with-bg"
        style={{ ["--panel-bg" as string]: `url(${heroBackground})` }}
      >
        <div className="panel__content split reveal reveal-left">
          <div className="split__content">
            <p className="eyebrow">About Us</p>
            <h2>Our story, served beside you</h2>
            <div className="story-card">
              <h3>Our Story</h3>
              <p className="muted">
                Rajni is where family recipes meet the Longtable spirit. We cook slow, welcome warmly, and celebrate often.
              </p>
            </div>
            <p className="lede narrow">
              From hand-ground masalas to playlists that feel like golden hour, every detail is designed to feel like home - and a
              little bit like a night out in Madison, Atlanta, or Parsippany.
            </p>
            <div className="list">
              {aboutPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
          <div className="split__media">
            <div className="media-frame">
              <Image
                src="/images/gallery-8.jpg"
                alt="Guests enjoying Rajni dining room"
                fill
                sizes="(min-width: 900px) 38vw, 88vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="panel with-bg"
        style={{ ["--panel-bg" as string]: `url(${heroBackground})` }}
      >
        <div className="panel__content reveal reveal-up">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>Designed for gatherings</h2>
            <p className="lede narrow">
              House curries, tandoor platters, and playlists tuned to feel like Longtable energy - Rajni wraps your night in warm
              hospitality.
            </p>
          </div>
          <div className="card-grid">
            {experience.map((item) => (
              <div key={item.title} className="card focus">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="events"
        className="panel with-bg compact"
        style={{ ["--panel-bg" as string]: `url(${heroBackground})` }}
      >
        <div className="panel__content reveal reveal-up">
          <div className="section-header">
            <p className="eyebrow">Events</p>
            <h2>Happenings & gatherings</h2>
            <p className="lede narrow">
              From chef tables to corporate dinners, Rajni layers every detail - lighting, spice, and music - for nights that
              linger.
            </p>
          </div>
          <div className="card-grid thirds">
            {happenings.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="specials"
        className="panel with-bg"
        style={{ ["--panel-bg" as string]: "url(/hero-bg.jpg)" }}
      >
        <div className="panel__content reveal reveal-up">
          <div className="section-header">
            <p className="eyebrow">Weekend & Daily Specials</p>
            <h2>Seasonal plates that keep changing</h2>
            <p className="lede narrow">
              Just like Longtable, the board shifts weekly - weekend chef features, speedy lunches, and shareable curry duos.
            </p>
          </div>
          <div className="card-grid">
            {specials.map((item) => (
              <div key={item.title} className="card">
                <div className="pill-row">
                  <span className="pill alt">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="panel alt compact">
        <div className="panel__content reveal reveal-up forms-grid">
          <div className="section-header">
            <p className="eyebrow">Book or plan</p>
            <h2>Reserve a table or plan catering</h2>
            <p className="lede narrow">Two quick options-tap to open the full form for each.</p>
          </div>
          <div className="forms-columns">
            <div className="form-card">
              <div className="form-card__head">
                <h3>Reserve a Table</h3>
                <span className="pill alt">Dine-in</span>
              </div>
              <p className="muted">
                Hold a table for lunch or dinner. Share your time, party size, and any celebrations-our team will confirm.
              </p>
              <div className="pill-row">
                <span className="pill alt">Lunch & Dinner</span>
                <span className="pill">Groups up to 20</span>
              </div>
              <button type="button" className="btn primary" onClick={() => setIsReserveOpen(true)}>
                Open reservation form
              </button>
            </div>

            <div className="form-card">
              <div className="form-card__head">
                <h3>Catering Enquiry</h3>
                <span className="pill">Events</span>
              </div>
              <p className="muted">
                For weddings, corporate lunches, and celebrations. Tell us your guest count, date, and service style to begin.
              </p>
              <div className="pill-row">
                <span className="pill">Staffed</span>
                <span className="pill alt">Buffet or plated</span>
              </div>
              <button type="button" className="btn secondary" onClick={() => setIsCateringOpen(true)}>
                Open catering form
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="panel gallery-panel compact">
        <div className="panel__content reveal reveal-up">
          <div className="section-header">
            <p className="eyebrow">Gallery</p>
            <h2>Inside Rajni</h2>
            <p className="lede narrow">Images glide in, side-by-side, just like a stroll past Longtable.</p>
          </div>
          <div className="gallery-window">
            <button
              className="gallery-arrow"
              aria-label="Previous image"
              onClick={() => setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
            >
              &#8249;
            </button>
            <div className="gallery-main">
              <Image
                src={currentGalleryImage.src}
                alt={currentGalleryImage.alt}
                width={1200}
                height={800}
                sizes="(min-width: 900px) 70vw, 94vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
              <div className="gallery-caption">
                <span className="muted">{currentGalleryImage.alt}</span>
              </div>
            </div>
            <button
              className="gallery-arrow"
              aria-label="Next image"
              onClick={() => setGalleryIndex((i) => (i + 1) % galleryImages.length)}
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {isReserveOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Reservation form"
          onClick={() => setIsReserveOpen(false)}
        >
          <div className="modal__content" onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Reserve a table</h3>
              <button className="icon-btn" onClick={() => setIsReserveOpen(false)} aria-label="Close reservation form">
                X
              </button>
            </div>
            <form
              className="form"
              onSubmit={handleReserveSubmit}
            >
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Phone
                  <input name="phone" placeholder="(555) 555-5555" required />
                </label>
                <label>
                  Party Size
                  <input type="number" name="party" min="1" max="20" placeholder="4" required />
                </label>
                <label>
                  Date
                  <input type="date" name="date" required />
                </label>
                <label>
                  Time
                  <input type="time" name="time" required />
                </label>
              <label className="full">
                Notes
                <textarea name="notes" rows={3} placeholder="Allergies, celebrations, or seating requests" />
              </label>
              </div>
              <div className="status-row">
                {reserveStatus.state === "success" && (
                  <span className="status success">
                    {reserveStatus.message || "Reservation received."} Ref: {reserveStatus.ref}
                  </span>
                )}
                {reserveStatus.state === "error" && (
                  <span className="status error">{reserveStatus.message || "Unable to send right now."}</span>
                )}
              </div>
              <button type="submit" className="btn primary" disabled={reserveStatus.state === "loading"}>
                {reserveStatus.state === "loading" ? "Sending..." : "Submit Reservation"}
              </button>
            </form>
          </div>
        </div>
      )}

      {isCateringOpen && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Catering form"
          onClick={() => setIsCateringOpen(false)}
        >
          <div className="modal__content" onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}>
            <div className="modal__header">
              <h3>Catering inquiry</h3>
              <button className="icon-btn" onClick={() => setIsCateringOpen(false)} aria-label="Close catering form">
                X
              </button>
            </div>
            <form
              className="form"
              onSubmit={handleCateringSubmit}
            >
              <div className="form-grid">
                <label>
                  Name
                  <input name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
                <label>
                  Phone
                  <input name="phone" placeholder="(555) 555-5555" required />
                </label>
                <label>
                  Event Type
                  <input name="type" placeholder="Wedding, corporate lunch, birthday" required />
                </label>
                <label>
                  Guest Count
                  <input type="number" name="guests" min="10" max="400" placeholder="80" required />
                </label>
                <label>
                  Date
                  <input type="date" name="date" required />
                </label>
                <label className="full">
                  Notes
                  <textarea name="notes" rows={3} placeholder="Service style, venue, cuisine preferences" />
                </label>
              </div>
              <div className="status-row">
                {cateringStatus.state === "success" && (
                  <span className="status success">
                    {cateringStatus.message || "Catering request received."} Ref: {cateringStatus.ref}
                  </span>
                )}
                {cateringStatus.state === "error" && (
                  <span className="status error">{cateringStatus.message || "Unable to send right now."}</span>
                )}
              </div>
              <button type="submit" className="btn primary" disabled={cateringStatus.state === "loading"}>
                {cateringStatus.state === "loading" ? "Sending..." : "Submit Catering Request"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-top: 96px;
        }

        .hero {
          position: relative;
          min-height: 82vh;
          display: grid;
          place-items: center;
          text-align: center;
          overflow: hidden;
          color: var(--text);
        }

        .hero__media {
          position: absolute;
          inset: 0;
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(245, 240, 234, 0.08), rgba(245, 240, 234, 0.82));
        }

        .hero__content {
          position: relative;
          max-width: 900px;
          padding: 0 20px 40px;
        }

        h1 {
          font-family: var(--heading-font);
          font-size: clamp(40px, 6vw, 62px);
          letter-spacing: 0.01em;
          margin: 6px 0 16px;
          color: var(--cream);
        }

        h2 {
          font-family: var(--heading-font);
          font-size: clamp(28px, 4vw, 40px);
          margin: 6px 0 16px;
          color: var(--cream);
        }

        h3 {
          margin: 0 0 10px;
          font-family: var(--heading-font);
          font-size: clamp(19px, 2.2vw, 24px);
          color: var(--cream);
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 12px;
          color: var(--accent);
          margin: 0 0 8px;
          font-weight: 700;
        }

        .lede {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.7;
          margin: 0 auto 16px;
        }

        .lede.narrow {
          max-width: 760px;
        }

        .hero__actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.02em;
          border: 1px solid transparent;
          min-width: 180px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .btn.primary {
          background: linear-gradient(135deg, #c48a2e, #9c5b2f);
          color: #fff;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
        }

        .btn.secondary {
          border-color: var(--accent);
          color: var(--cream);
          background: rgba(255, 255, 255, 0.82);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
        }

        .panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 0;
        }

        .with-bg {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          min-height: 60vh;
        }

        .with-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--panel-bg);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: scroll;
          z-index: -2;
        }

        .with-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.08);
          z-index: -1;
        }

        .panel__content {
          position: relative;
          padding: 44px 20px 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .compact {
          gap: 14px;
        }

        .compact .panel__content {
          padding: 34px 18px 22px;
          gap: 16px;
        }

        .compact.with-bg {
          min-height: 48vh;
        }

        .with-bg .panel__content {
          background: rgba(255, 255, 255, 0.56);
          border-radius: 22px;
          border: 1px solid var(--border);
          box-shadow: 0 16px 28px rgba(0, 0, 0, 0.05);
        }

        .panel.alt {
          border-block: 1px solid var(--border);
          background: none;
        }

        .panel.alt .panel__content {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 24px;
          border: 1px solid var(--border);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.07);
        }

        .gallery-panel {
          background: none;
        }

        .gallery-panel .panel__content {
          background: rgba(255, 255, 255, 0.78);
          border-radius: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 20px 36px rgba(0, 0, 0, 0.08);
        }

        .section-header {
          text-align: center;
          max-width: 920px;
          margin: 0 auto;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .card-grid.thirds {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .card {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 18px;
          display: grid;
          gap: 10px;
          min-height: 180px;
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.06);
        }

        .card.focus {
          background: linear-gradient(145deg, rgba(196, 138, 46, 0.08), rgba(255, 255, 255, 0.9));
          border-color: rgba(196, 138, 46, 0.26);
        }

        .card p {
          color: var(--muted);
          margin: 0;
          line-height: 1.6;
        }

        .muted {
          color: var(--muted);
          font-size: 14px;
        }

        .split {
          display: grid;
          gap: 20px;
          align-items: center;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .split__content {
          display: grid;
          gap: 14px;
          max-width: 620px;
        }

        .list {
          display: grid;
          gap: 8px;
          color: var(--cream);
          font-weight: 600;
        }

        .split__media {
          display: flex;
          justify-content: center;
        }

        .media-card,
        .media-frame {
          width: min(440px, 100%);
          border-radius: 22px;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          min-height: 320px;
        }

        .story-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 12px 22px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .media-card ul {
          padding-left: 18px;
          margin: 10px 0 12px;
          color: var(--muted);
          line-height: 1.7;
        }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .pill {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(194, 123, 22, 0.12);
          color: var(--cream);
          border: 1px solid rgba(194, 123, 22, 0.35);
          font-weight: 600;
        }

        .pill.alt {
          background: rgba(199, 63, 63, 0.12);
          color: var(--accent);
          border-color: rgba(199, 63, 63, 0.26);
        }

        .pill.active {
          background: linear-gradient(135deg, #f6c979, #f0a437);
          color: #3b2109;
          border-color: transparent;
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
        }

        .location-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin: 18px 0;
        }

        .location-card {
          background: rgba(255, 255, 255, 0.92);
          border-radius: 16px;
          border: 1px solid var(--border);
          display: grid;
          gap: 10px;
          padding: 18px;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
        }

        .location-meta {
          display: grid;
          gap: 6px;
          justify-items: center;
        }

        .location-meta a {
          color: var(--accent);
          font-weight: 700;
          text-decoration: none;
        }

        .location-meta a:hover {
          text-decoration: underline;
        }

        .form {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px;
          display: grid;
          gap: 16px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        label {
          display: grid;
          gap: 6px;
          font-weight: 700;
          color: var(--cream);
        }

        input,
        textarea {
          border-radius: 12px;
          border: 1px solid var(--border);
          padding: 12px;
          font-size: 15px;
          font-family: inherit;
          background: #fff;
          color: var(--text);
        }

        textarea {
          resize: vertical;
        }

        label.full {
          grid-column: 1 / -1;
        }

        .status-row {
          min-height: 20px;
        }

        .status {
          display: inline-block;
          font-weight: 700;
          font-size: 13px;
        }

        .status.success {
          color: #2f7a36;
        }

        .status.error {
          color: #b22626;
        }

        .btn[disabled] {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .forms-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
          align-items: stretch;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 16px;
          display: grid;
          gap: 12px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.07);
        }

        .form-card__head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .gallery-window {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          max-width: 1060px;
          margin: 0 auto;
        }

        .gallery-main {
          position: relative;
          width: 100%;
          min-height: 380px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.12);
          background: #fff;
          display: grid;
          place-items: center;
        }

        .gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 10px 14px 12px;
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.38));
          color: #fff;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .gallery-arrow {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.85);
          font-size: 20px;
          color: var(--cream);
          display: grid;
          place-items: center;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }

        .gallery-arrow:hover {
          border-color: var(--gold);
        }

        .reveal {
          opacity: 0;
          transform: translateY(26px);
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .reveal.reveal-left {
          transform: translateX(-26px);
        }

        .reveal.reveal-up {
          transform: translateY(26px);
        }

        .reveal.in-view {
          opacity: 1;
          transform: translate(0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .gallery-rail {
            transition: none;
          }
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          display: grid;
          place-items: center;
          padding: 18px;
          z-index: 200;
          backdrop-filter: blur(4px);
        }

        .modal__content {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 18px;
          border: 1px solid var(--border);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          width: min(720px, 100%);
          max-height: 90vh;
          overflow: auto;
          padding: 22px;
          display: grid;
          gap: 16px;
        }

        .modal__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .icon-btn {
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          width: 40px;
          height: 40px;
          font-size: 18px;
          color: var(--cream);
        }

        @media (max-width: 980px) {
          .page {
            gap: 0;
            padding-top: 82px;
          }

          .hero {
            min-height: 70vh;
          }

          .with-bg::before {
            background-attachment: scroll;
          }

          .panel__content {
            padding: 46px 18px;
          }

          .panel,
          .panel.alt {
            padding-inline: 18px;
          }

          .card-grid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          }

          .gallery-slide {
            flex-basis: 88%;
          }
        }
      `}</style>
    </div>
  );
}
