
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageLayout from "../components/PageLayout";
import EventCalendar from './Events/EventCalendar';
import EventSlideShow from './Events/EventSlideShow';
import { eventList } from './Events/Data';

export default function Events() {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <section className="mb-8">
        <p>Here are the exciting campouts, meetups, and ceremonies scheduled for this scouting year! Join us for a ton of fun!</p>
        <EventCalendar />
      </section>
      <section className="mb-8">
        <EventSlideShow events={eventList} />
      </section>
    </PageLayout>
  );
}
