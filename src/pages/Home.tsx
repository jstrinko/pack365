import PageLayout from "../components/PageLayout";
import SignupForm from './Home/SignupForm';
import EventCalendar from './Events/EventCalendar';
import EventSlideShowContainer from "./Events/EventSlideShowContainer";
import JoinNowBlurb from "./Home/JoinNowBlurb";
import { useAlbumSelection } from "./Events/useAlbumSelection";

export default function Home() {
  const { selectedAlbum, selectAlbum, slideshowRef } = useAlbumSelection();

  return (
    <PageLayout>
      <section className="max-w-3xl w-full mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-2">Welcome to Pack 365!</h2>
        <p className="text-lg text-gray-700">
          We are Cub Scout Pack 365, serving families in our community. Join us for fun, adventure, and learning! Unsure about joining? You will love it. Camping. Outdoors. No Screens. Just fun with friends and family.  Worried about the commitment? We understand. Cub Scouts is designed to fit into your busy life. We meet once a week - max, and our events are family-friendly and flexible. Come check us out!
        </p>
      </section>

      <section className="max-w-3xl w-full mx-auto mb-8 bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
        <JoinNowBlurb />
      </section>

      <section className="max-w-3xl mx-auto w-full mb-8 justify-center flex">
        <div className="w-full flex justify-center">
          <div className="w-full">
            <SignupForm />
          </div>
        </div>
      </section>

      <section className="w-full mx-auto mb-8 max-w-3xl">
        <h3 className="text-xl font-semibold mb-2">Events</h3>
        <p>Here are the exciting campouts, meetups, and ceremonies scheduled for this scouting year! Join us for a ton of fun!</p>
        <p className="text-sm text-gray-600 mt-1 mb-1">Events marked 📷 have photos — click the camera to jump to that album.</p>
        <div><EventCalendar onAlbumSelect={selectAlbum} /></div>
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
