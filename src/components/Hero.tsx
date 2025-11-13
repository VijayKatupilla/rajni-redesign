"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Apply background blur using backdrop-filter */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[3px]"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-heading mb-4 text-gold drop-shadow-lg">
          Rajni Indian Cuisine
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-cream">
          Authentic Indian flavors in Madison, Wisconsin
        </p>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bg-maroon hover:bg-maroon/80 text-white font-semibold py-3 px-8 rounded transition-all shadow-md"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}
