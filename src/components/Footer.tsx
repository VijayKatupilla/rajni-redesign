export default function Footer() {
  return (
    <footer className="relative bg-cream text-red-900 text-center py-10 border-t border-gray-300 overflow-hidden">
      {/* Left decorative image */}
      <img
        src="/footer-left.png"
        alt="Rajni Left Decoration"
        className="absolute left-4 bottom-2 w-70 md:w-86"
      />

    
      {/* Right decorative image */}
      <img
        src="/footer-right.png"
        alt="Rajni Right Decoration"
        className="absolute right-4 bottom-2 w-70 md:w-86"
      />

      {/* Center Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-lg font-semibold">Rajni Indian Cuisine</p>
        <p className="text-sm mt-1">429 Commerce Drive, Madison, WI 53719</p>
        <p className="text-sm">📞 (608) 123-4567 · ✉️ info@rajnimadison.com</p>

        <div className="mt-3 space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="hover:underline"
          >
            Facebook
          </a>
          <span>·</span>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover:underline"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            className="hover:underline"
          >
            Order Online
          </a>
        </div>

        <p className="text-xs mt-3 opacity-80">
          © {new Date().getFullYear()} Rajni Indian Cuisine · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
