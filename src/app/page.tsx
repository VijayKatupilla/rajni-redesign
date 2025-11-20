"use client";

import GoogleReviews from "../components/GoogleReviews";
import Footer from "../components/Footer";

export default function HomePage() {
  const sections = [
    { id: "home", title: "Rajni Indian Cuisine", text: "Authentic Indian flavors in Madison, Wisconsin." },
    { id: "menu", title: "Our Menu", text: "Explore aromatic curries, tandoori grills, and biryanis." },
    { id: "events", title: "Events & Specials", text: "Join us for buffets, live music, and festive gatherings." },
    { id: "catering", title: "Catering Services", text: "Perfect for weddings, corporate events, and celebrations." },
    { id: "gallery", title: "Gallery", text: "A glimpse of our delicious dishes and inviting atmosphere." },
    {
      id: "contact",
      title: "Contact Us",
      text: "We’d love to hear from you! Reach out for reservations, catering, or special events.",
    },
  ];

  return (
    <div className="page-container">
      <div className="hero-background" />

      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className="content-section">
          <h1 className="section-title">{sec.title}</h1>
          <p className="section-text">{sec.text}</p>
        </section>
      ))}

      <GoogleReviews />
      

      <style jsx>{`
        /* ✅ Page container */
        .page-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden; /* 🧹 prevents horizontal movement */
          overflow-y: auto;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ✅ Fixed hero image — no horizontal scroll */
        .hero-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%; /* ✅ use 100% instead of 100vw */
          height: 100%;
          background-image: url('/hero-bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: -1;
          filter: brightness(0.8);
        }

        /* ✅ Section styling */
        .content-section {
          min-height: 100vh;
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px 20px;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(6px);
          box-sizing: border-box;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffd700;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .section-text {
          max-width: 720px;
          font-size: clamp(1rem, 1.8vw, 1.3rem);
          line-height: 1.7;
          color: #f5f0e1;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        /* ✅ Responsive for mobile */
        @media (max-width: 768px) {
          .hero-background {
            background-attachment: scroll;
            background-size: cover;
            height: 100%;
          }

          .content-section {
            padding: 50px 16px;
          }
        }
      `}</style>
    </div>
  );
}

