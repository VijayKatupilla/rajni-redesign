import PageHeader from "../../components/PageHeader";

export default function MenuPage() {
  return (
    <>
      <PageHeader title="Our Menu" />
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          Explore our authentic dishes — from aromatic curries to sizzling tandoori specials.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 border rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Butter Chicken</h3>
            <p>Rich, creamy tomato sauce with tender chicken.</p>
          </div>
          <div className="p-6 border rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Paneer Tikka</h3>
            <p>Grilled cottage cheese with spices and yogurt.</p>
          </div>
          <div className="p-6 border rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Biryani</h3>
            <p>Fragrant basmati rice cooked with saffron and spices.</p>
          </div>
        </div>
      </section>
    </>
  );
}
