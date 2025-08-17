import PageLayout from "../components/PageLayout";
import SignupForm from './Home/SignupForm';
import EventCalendar from './Events/EventCalendar';

export default function Home() {
  return (
    <PageLayout>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome to Pack 365!</h2>
        <p className="text-lg text-gray-700">
          We are Cub Scout Pack 365, serving families in our community. Join us for fun, adventure, and learning! Unsure about joining? You will love it. Camping. Outdoors. No Screens. Just fun with friends and family.  Worried about the commitment? We understand. Cub Scouts is designed to fit into your busy life. We meet once a week - max, and our events are family-friendly and flexible. Come check us out!
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Join Us!</h3>
        <p>Fill out this form to be contacted about joining Pack 365.</p>
        <div className="w-full flex justify-center">
          <SignupForm />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
        <p>Here are the exciting campouts, meetups, and ceremonies scheduled for this scouting year! Join us for a ton of fun!</p>
        <div style={{ height: 600 }}><EventCalendar /></div>
      </section>


    </PageLayout>
  );
}
