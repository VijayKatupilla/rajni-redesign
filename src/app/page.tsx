export default function HomePage() {
  const sections = [
    { id: "home", title: "Rajni Indian Cuisine", text: "Authentic Indian flavors in Madison, Wisconsin." },
    { id: "menu", title: "Our Menu", text: "Explore aromatic curries, tandoori grills, and biryanis." },
    { id: "events", title: "Events & Specials", text: "Join us for buffets, live music, and festive gatherings." },
    { id: "catering", title: "Catering Services", text: "Perfect for weddings, corporate events, and celebrations." },
    { id: "gallery", title: "Gallery", text: "A glimpse of our delicious dishes and inviting atmosphere." },
    { id: "contact", title: "Contact Us", text: "429 Commerce Drive, Madison, WI | (608) 123-4567 | info@rajnimadison.com" },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {sections.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backdropFilter: "blur(6px) brightness(0.8)", // <-- blur each section
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "60px 20px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#FFD700",
            }}
          >
            {sec.title}
          </h1>
          <p style={{ maxWidth: "700px", fontSize: "1.2rem", lineHeight: "1.7" }}>
            {sec.text}
          </p>
        </section>
      ))}
    </div>
  );
}
