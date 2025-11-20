"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(0, 0, 0, 0.85)",
        color: "white",
        padding: "15px 15px 15px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "'Poppins', sans-serif", // same font as rest of site
        letterSpacing: "0.3px",
      }}
    >
      {/* --- TOP SECTION: 3 columns --- */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "35px",
          maxWidth: "1000px",
          margin: "0 auto 30px",
          textAlign: "left",
          lineHeight: "1.5",
        }}
      >
        {/* 📍 Location */}
        <div style={{ flex: "1 1 230px", minWidth: "230px" }}>
          <h3
            style={{
              color: "#FFD700",
              fontSize: "17px",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            Location
          </h3>
          <p style={{ fontSize: "13px" }}>
            Rajni Indian Cuisine <br />
            429 Commerce Drive <br />
            Madison, WI 53719
          </p>
          <a
            href="https://www.google.com/maps/place/Rajni+Indian+Cuisine,+429+Commerce+Dr,+Madison,+WI+53719"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFD700",
              textDecoration: "underline",
              fontSize: "12px",
            }}
          >
            View on Google Maps →
          </a>
        </div>

        {/* ⏰ Hours */}
        <div style={{ flex: "1 1 230px", minWidth: "230px" }}>
          <h3
            style={{
              color: "#FFD700",
              fontSize: "17px",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            Hours
          </h3>
          <p style={{ fontSize: "13px" }}>
            <strong>Mon–Thu:</strong> 11:00 AM – 2:30 PM / 5:00 PM – 9:00 PM 
            <br />
            <strong>Fri–Sat:</strong> 11:00 AM – 2:30 PM / 5:00 PM – 10:00 PM
            <br />
            <strong>Sun:</strong> 11:00 AM – 2:30 PM / 5:00 PM – 9:00 PM
          </p>
          <p
            style={{
              marginTop: "8px",
              color: "#FFD700",
              fontSize: "12.5px",
              fontWeight: 500,
            }}
          >
            Dine-in · Takeout · Catering
          </p>
        </div>

        {/* ☎️ Contact */}
        <div style={{ flex: "1 1 230px", minWidth: "230px" }}>
          <h3
            style={{
              color: "#FFD700",
              fontSize: "17px",
              marginBottom: "8px",
              fontWeight: 600,
            }}
          >
            Contact Us
          </h3>
          <p style={{ fontSize: "13px" }}>
            📞 (608) 123-4567 <br />
            ✉️ info@rajnimadison.com
          </p>
          <div style={{ marginTop: "10px", fontSize: "13px" }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              style={{ color: "white", marginRight: "10px", textDecoration: "none" }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              style={{ color: "white", marginRight: "10px", textDecoration: "none" }}
            >
              Instagram
            </a>
            <a
              href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
              target="_blank"
              style={{
                color: "#FFD700",
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              Order Online →
            </a>
          </div>
        </div>
      </div>

      {/* --- BOTTOM COPYRIGHT --- */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "10px",
          fontSize: "12px",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} Rajni Indian Cuisine · All Rights Reserved
      </div>
    </footer>
  );
}
