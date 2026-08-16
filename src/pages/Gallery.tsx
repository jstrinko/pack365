import PageLayout from "../components/PageLayout";
import EventSlideShowContainer from "./Events/EventSlideShowContainer";
import { eventList } from "./Events/Data";

export default function Gallery() {
  const albumCount = eventList.length;
  const photoCount = eventList.reduce((n, e) => n + e.photos.length, 0);

  return (
    // No hero here: the viewer should be visible without scrolling.
    <PageLayout showHero={false} fillHeight>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Photo Gallery</h2>
        <p className="text-gray-700">
          {photoCount} photos from {albumCount} pack events. Pick an album from the
          dropdown, or use the arrows to move between events. Hover for controls,
          and use ⛶ for true fullscreen.
        </p>
      </div>

      {/* Fills the space between the header and the footer. */}
      <div className="flex-1 min-h-[30rem]">
        <EventSlideShowContainer layout="page" />
      </div>
    </PageLayout>
  );
}
