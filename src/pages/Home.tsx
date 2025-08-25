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

      <section className="mb-12 bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
        <h3 className="text-3xl font-bold text-scout-blue mb-4">Join Us!</h3>

        <p className="text-lg mb-6">
          If you're ready to join today,{" "}
          <a
            href="https://my.scouting.org/VES/OnlineReg/1.0.0/?tu=UF-MB-085paa0365"
            target="_blank"
            rel="noopener noreferrer"
            className="text-scout-gold font-semibold underline hover:text-scout-blue transition"
          >
            CLICK HERE
          </a>{" "}
          to sign up!
        </p>

        <div className="mb-8">
          <p className="mb-3 text-medium font-medium">Or share this QR code with a friend who’s ready to sign up:</p>
          <div className="flex justify-center">
            <img
              src="./qrcode.jpg"
              alt="QR Code to Signup"
              className="w-40 h-40 md:w-52 md:h-52 rounded-xl shadow-lg border border-gray-200"
            />
          </div>
        </div>

        <p className="text-medium mb-6">
          Not ready to sign up yet? Fill out this form and one of our Den Leaders will contact you about
          <span className="font-semibold"> Pack 365</span>.
        </p>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-lg">
            <SignupForm />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Events</h3>
        <p>Here are the exciting campouts, meetups, and ceremonies scheduled for this scouting year! Join us for a ton of fun!</p>
        <div style={{ height: 600 }}><EventCalendar /></div>
      </section>


    </PageLayout>
  );
}
