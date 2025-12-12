"use client";

export default function GoogleReviews() {
  return (
    <section className="reviews compact" id="reviews">
      <div className="reviews__inner reveal reveal-up">
        <div className="reviews__header">
          <h2 className="section-title">Google Reviews</h2>
          <p className="lede narrow">
            "Authentic, warm, and delicious" is what we hear most often. Here's a sample of what diners love about Rajni.
          </p>
        </div>

        <div className="reviews__grid">
          <div className="reviews__card">
            <p>
              "Authentic Indian food! The flavors were perfect and service was top-notch. Definitely coming back again."
            </p>
            <span>- Priya S.</span>
          </div>
          <div className="reviews__card">
            <p>
              "Great variety and amazing taste! The butter chicken and naan are my favorites. Highly recommend Rajni for
              family dinners."
            </p>
            <span>- Arjun P.</span>
          </div>
          <div className="reviews__card">
            <p>
              "We ordered catering for our event and everyone loved it! Fresh, flavorful, and delivered on time. Excellent
              service!"
            </p>
            <span>- Jessica L.</span>
          </div>
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
          background: rgba(85, 51, 32, 0.55);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .reviews__inner {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          gap: 16px;
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
        }

        .reviews__card span {
          display: block;
          margin-top: 10px;
          color: var(--accent);
          font-weight: 700;
        }

        .reviews__cta {
          text-align: center;
          margin-top: 6px;
        }

        .reviews__cta a {
          color: var(--cream);
          font-weight: 700;
          text-decoration: none;
        }

        .reviews__cta a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
