import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      {/* About section */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-maroon">Welcome to Rajni</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience the rich, diverse flavors of India at Rajni Indian Cuisine.
          Our chefs craft every dish using authentic spices and traditional
          techniques for a truly memorable dining experience.
        </p>
      </section>
    </>
  );
}
