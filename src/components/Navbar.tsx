"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-maroon/90 via-maroon/80 to-transparent backdrop-blur-md border-b border-grey-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-center items-center py-4 space-x-10 text-lg font-semibold text-gray-800">
        <Link href="/" className="hover:text-maroon transition">Home</Link> 

        <Link href="/menu" className="hover:text-maroon transition">Menu</Link>

        <Link href="/catering" className="hover:text-maroon transition">Catering</Link>

        {/* Center Logo */}
        <Link href="/" className="mx-8">
          <img
            src="/logo1.png"
            alt="Rajni Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <Link href="/events" className="hover:text-maroon transition">Events</Link>

        <Link href="/contact" className="hover:text-maroon transition">Contact</Link>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bg-maroon text-white px-4 py-2 rounded hover:bg-maroon-dark transition"
        >
          Order Online
        </a>
      </div>
    </nav>
  );
}
