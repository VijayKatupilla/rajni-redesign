export default function Footer() {
  return (
    <footer className="relative bg-blue text-white-900 text-center py-10 border-t border-gray-300 overflow-hidden">
      {/* Left decorative image */}
     <img
  src="/footer-left.png"
  className="absolute left-2 bottom-0 w-20 sm:w-70 md:w-86 hidden sm:block"
/>



    
      {/* Right decorative image */}
      <img
  src="/footer-right.png"
  className="absolute right-2 bottom-0 w-20 sm:w-70 md:w-86 hidden sm:block"
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
