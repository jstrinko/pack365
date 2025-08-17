
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageLayout from "../components/PageLayout";
import EventCalendar from './Events/EventCalendar';

export default function Events() {
  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <EventCalendar />
    </PageLayout>
  );
}
