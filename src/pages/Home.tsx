import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome to Pack 365!</h2>
        <p className="text-lg text-gray-700">
          We are Cub Scout Pack 365, serving families in our community. Join us for fun, adventure, and learning!
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
        <p>[Event calendar placeholder]</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Join Us!</h3>
        <p>[Signup form placeholder]</p>
      </section>
    </PageLayout>
  );
}
