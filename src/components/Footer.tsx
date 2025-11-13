export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "blur",
        color: "black",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "1px solid #555",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: "600", marginBottom: "5px" }}>
        Rajni Indian Cuisine
      </p>

      <p style={{ fontSize: "14px", marginBottom: "3px" }}>
        429 Commerce Drive, Madison, WI 53719
      </p>
      <p style={{ fontSize: "14px", marginBottom: "15px" }}>
        📞 (608) 123-4567 · ✉️ info@rajnimadison.com
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "10px" }}>
        <a
          href="#"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Facebook
        </a>
        <span>·</span>
        <a
          href="#"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Instagram
        </a>
        <span>·</span>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Order Online
        </a>
      </div>

      <p style={{ fontSize: "12px", opacity: 0.7 }}>
        © {new Date().getFullYear()} Rajni Indian Cuisine · All Rights Reserved
      </p>
    </footer>
  );
}
