
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageLayout from "../components/PageLayout";
import EventCalendar from './Events/EventCalendar';
import EventSlideShowContainer from './Events/EventSlideShowContainer';


export default function Events() {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <section className="w-full max-w-3xl mb-8">
        <p>Here are the exciting campouts, meetups, and ceremonies scheduled for this scouting year! Join us for a ton of fun!</p>
        <EventCalendar />
      </section>
      <section className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <EventSlideShowContainer />
      </section>
    </PageLayout>
  );
}
