export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Rajni Indian Cuisine
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 drop-shadow-md">
          Authentic Indian flavors in Madison, Wisconsin
        </p>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bg-maroon text-white px-5 py-3 rounded font-semibold hover:bg-maroon-dark transition"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}
