"use client";

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-lg text-white border-t border-white/10 flex justify-around items-center py-2 z-50 text-xs sm:text-sm">
      {["home", "menu", "events", "catering", "gallery"].map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className="flex flex-col items-center hover:text-yellow-400 transition"
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}

      <a
        href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
        target="_blank"
        className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold hover:bg-yellow-500 transition"
      >
        Order
      </a>
    </nav>
  );
}
