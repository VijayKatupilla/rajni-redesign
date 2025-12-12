"use client";

import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    quote: '"Authentic Indian food! The flavors were perfect and service was top-notch. Definitely coming back again."',
    author: "- Priya S.",
  },
  {
    quote:
      '"Great variety and amazing taste! The butter chicken and naan are my favorites. Highly recommend Rajni for family dinners."',
    author: "- Arjun P.",
  },
  {
    quote:
      '"We ordered catering for our event and everyone loved it! Fresh, flavorful, and delivered on time. Excellent service!"',
    author: "- Jessica L.",
  },
];

export default function GoogleReviews() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) {
      prev();
    } else {
      next();
    }
  };

  const next = () => setActive((prev) => (prev + 1) % reviews.length);
  const prev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="reviews compact" id="reviews" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="reviews__inner reveal reveal-up">
        <div className="reviews__header">
          <h2 className="section-title">Google Reviews</h2>
          <p className="lede narrow">
            "Authentic, warm, and delicious" is what we hear most often. Here's a sample of what diners love about Rajni.
          </p>
        </div>

        <div className="reviews__grid">
          {reviews.map((item, idx) => (
            <div key={item.author + idx} className={`reviews__card ${idx === active ? "active" : ""}`}>
              <p>{item.quote}</p>
              <span>{item.author}</span>
            </div>
          ))}
        </div>

        <div className="reviews__nav" aria-label="Review navigation">
          <button type="button" onClick={prev} aria-label="Previous review">
            &lt;
          </button>
          <span className="reviews__nav-index">
            {active + 1} / {reviews.length}
          </span>
          <button type="button" onClick={next} aria-label="Next review">
            &gt;
          </button>
        </div>

        <div className="reviews__cta">
          <a href="https://www.google.com/search?q=Rajni+Indian+Cuisine+Madison+WI" target="_blank" rel="noreferrer">
            View all reviews on Google -{">"}
          </a>
        </div>
      </div>

      <style jsx>{`
        .reviews {
          padding: 42px 18px 46px;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .reviews::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/images/gallery-2.0.jpg");
          background-size: cover;
          background-position: center;
          filter: blur(18px) saturate(1.08);
          transform: scale(1.06);
          z-index: -2;
        }

        .reviews::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(76, 45, 28, 0.82), rgba(76, 45, 28, 0.7));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: -1;
        }

        .reviews__inner {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          gap: 16px;
          position: relative;
          background: rgba(255, 245, 235, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 18px 32px rgba(0, 0, 0, 0.28);
        }

        .reviews__header {
          text-align: center;
        }

        .section-title {
          font-size: clamp(44px, 6vw, 66px);
          margin: 6px 0 10px;
          letter-spacing: 0.04em;
        }

        .reviews__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }

        .reviews__card {
          background: rgba(255, 245, 235, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 16px;
          padding: 18px;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
          display: block;
        }

        .reviews__card span {
          display: block;
          margin-top: 10px;
          color: var(--accent);
          font-weight: 700;
        }

        .reviews__nav {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: -4px;
        }

        .reviews__nav button {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          border-radius: 10px;
          width: 44px;
          height: 38px;
          font-size: 18px;
          font-weight: 800;
        }

        .reviews__nav-index {
          color: var(--cream);
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .reviews__cta {
          text-align: center;
          margin-top: 6px;
        }

        .reviews__cta a {
          color: var(--cream);
          font-weight: 700;
          text-decoration: none;
          font-size: 14px;
        }

        .reviews__cta a:hover {
          text-decoration: underline;
        }

        @media (max-width: 720px) {
          .reviews {
            padding: 24px 14px 0;
          }

          .section-title {
            font-size: 34px;
          }

          .reviews__grid {
            grid-template-columns: 1fr;
          }

          .reviews__card {
            display: none;
          }

          .reviews__card.active {
            display: block;
          }

          .reviews__nav {
            display: inline-flex;
          }

          .reviews__cta a {
            font-size: 12.5px;
          }
        }
      `}</style>
    </section>
  );
}
