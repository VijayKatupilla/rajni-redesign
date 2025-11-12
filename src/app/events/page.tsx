import PageHeader from "../../components/PageHeader";

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Events & Promotions" />
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-8 text-gray-700">
          Celebrate your special moments with Rajni! Stay tuned for our upcoming events and promotions.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="border rounded p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Weekend Buffet</h3>
            <p>Every Saturday & Sunday from 11 AM – 3 PM.</p>
          </div>
          <div className="border rounded p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Live Music Nights</h3>
            <p>Join us every Friday for great food & local talent.</p>
          </div>
        </div>
      </section>
    </>
  );
}
