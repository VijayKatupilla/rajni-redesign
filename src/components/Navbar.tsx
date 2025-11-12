"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-8">
        {/* Logo */}
        <Link href="/">
          <img
            src="/logo1.png"
            alt="Rajni Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-white-800">
          <Link href="/" className="hover:text-maroon">Home</Link>
          <Link href="/menu" className="hover:text-maroon">Menu</Link>
          <Link href="/catering" className="hover:text-maroon">Catering</Link>
          <Link href="/events" className="hover:text-maroon">Events</Link>
          <Link href="/contact" className="hover:text-maroon">Contact</Link>
          <a
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            className="bg-maroon text-white px-4 py-2 rounded hover:bg-maroon-dark transition"
          >
            Order Online
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-maroon text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-200 flex flex-col items-center space-y-3 py-4 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/catering" onClick={() => setOpen(false)}>Catering</Link>
          <Link href="/events" onClick={() => setOpen(false)}>Events</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <a
            href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
            target="_blank"
            className="bg-maroon text-white px-4 py-2 rounded hover:bg-maroon-dark transition"
          >
            Order Online
          </a>
        </div>
      )}
    </nav>
  );
}
