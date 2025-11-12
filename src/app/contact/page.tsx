import PageHeader from "../../components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-4">
          We’d love to hear from you! Visit us or reach out for reservations and catering inquiries.
        </p>
        <p className="mb-2 font-semibold">📍 429 Commerce Drive, Madison, WI 53719</p>
        <p className="mb-2">📞 (608) 123-4567</p>
        <p>✉️ info@rajnimadison.com</p>

        <iframe
          src="https://www.google.com/maps?q=429+Commerce+Drive,+Madison,+WI+53719&output=embed"
          width="100%"
          height="300"
          className="mt-8 border-0 rounded"
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
