import PageHeader from "../../components/PageHeader";

export default function CateringPage() {
  return (
    <>
      <PageHeader title="Catering Services" />
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-8">
          Rajni offers professional catering for weddings, parties, and corporate events.
        </p>
        <a
          href="/contact"
          className="bg-maroon text-white px-6 py-3 rounded hover:bg-maroon-dark transition"
        >
          Contact Us for a Quote
        </a>
      </section>
    </>
  );
}
