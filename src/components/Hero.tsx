export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        

      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Rajni Indian Cuisine
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          Authentic Indian flavors in Madison, Wisconsin
        </p>
        <a
          href="https://order.toasttab.com/online/rajni-madison-429-commerce-drive"
          target="_blank"
          className="bg-maroon text-white px-6 py-3 rounded font-semibold hover:bg-maroon-dark transition"
        >
          Order Online
        </a>
      </div>
    </section>
  );
}
