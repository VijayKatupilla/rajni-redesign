"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold text-white-800 space-x-4 sm:space-x-8 md:space-x-10">
        <Link href="/" className="hover:text-maroo transition">Home</Link>
        <Link href="/menu" className="hover:text-maroon transition">Menu</Link>
        <Link href="/catering" className="hover:text-maroon transition">Catering</Link>

        {/* Center Logo */}
        <Link href="/" className="mx-2 sm:mx-4 md:mx-8">
          <img
            src="/logo1.png"
            alt="Rajni Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <Link href="/events" className="hover:text-maroon transition">Events</Link>
        <Link href="/contact" className="hover:text-maroon transition">Contact</Link>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bg-maroon text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-maroon-dark transition"
        >
          Order Online
        </a>
      </div>
    </nav>
  );
}
