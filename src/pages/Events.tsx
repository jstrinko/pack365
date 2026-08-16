
import "react-big-calendar/lib/css/react-big-calendar.css";
import PageLayout from "../components/PageLayout";
import EventCalendar from './Events/EventCalendar';
import EventSlideShowContainer from './Events/EventSlideShowContainer';
import { useAlbumSelection } from './Events/useAlbumSelection';


export default function Events() {
  const { selectedAlbum, selectAlbum, slideshowRef } = useAlbumSelection();

  return (
    <PageLayout>
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <section className="w-full max-w-3xl mb-8">
        <p>Here are the exciting campouts, meetups, and ceremonies scheduled for this scouting year! Join us for a ton of fun!</p>
        <p className="text-sm text-gray-600 mt-1">Events marked 📷 have photos — click the camera to jump to that album.</p>
        <EventCalendar onAlbumSelect={selectAlbum} />
      </section>
      <section className="w-full max-w-3xl mx-auto mb-2 text-right">
        <a href="/gallery" className="text-blue-600 hover:underline font-semibold">
          Browse all photos in the Gallery →
        </a>
      </section>
      <section
        ref={slideshowRef}
        className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg scroll-mt-4"
      >
        <EventSlideShowContainer selected={selectedAlbum} />
      </section>
    </PageLayout>
  );
}
