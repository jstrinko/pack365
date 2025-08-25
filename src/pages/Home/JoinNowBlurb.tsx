export default function JoinNowBlurb() {
  return (
    <>
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
    </>
  )
}