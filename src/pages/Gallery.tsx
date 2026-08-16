import PageLayout from "../components/PageLayout";
import EventSlideShowContainer from "./Events/EventSlideShowContainer";
import { eventList } from "./Events/Data";

export default function Gallery() {
  const albumCount = eventList.length;
  const photoCount = eventList.reduce((n, e) => n + e.photos.length, 0);

  return (
    // No hero here: the viewer should be visible without scrolling.
    <PageLayout showHero={false} fullWidth>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Photo Gallery</h2>
        <p className="text-gray-700">
          {photoCount} photos from {albumCount} pack events. Pick an album from the
          dropdown, or use the arrows to move between events. Hover for controls,
          and use ⛶ for true fullscreen.
        </p>
      </div>

      {/*
        An explicit height, not flex-1: the viewer's inner h-full/flex-1 chain
        needs a definite height to resolve against, and a percentage chain
        rooted in a flex-grown ancestor collapses the image area to zero.
        The subtracted space covers the header, this intro block, and the footer.
      */}
      <div className="h-[calc(100vh-17rem)] min-h-[26rem]">
        <EventSlideShowContainer layout="page" />
      </div>
    </PageLayout>
  );
}
