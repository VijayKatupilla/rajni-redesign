export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-xl sm:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
          Rajni Indian Cuisine
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-5 drop-shadow-md">
          Authentic Indian flavors in Madison, Wisconsin
        </p>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bg-maroon text-white px-5 py-2 sm:px-6 sm:py-3 rounded font-semibold hover:bg-maroon-dark transition"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}
