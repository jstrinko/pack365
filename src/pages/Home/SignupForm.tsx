const web3formsKey = '5756f720-2637-4245-96de-047aba9d59c3'

export default function SignupForm() {
  return (
    <form
      className="w-full max-w-8xl bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input type="hidden" name="access_key" value={web3formsKey} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <h2 className="text-3xl font-extrabold text-blue-700 mb-2 text-center drop-shadow-md">
        Join Pack 365!
      </h2>
      <p className="text-center text-gray-700 mb-4">
        Fill out this form to get your child started on a <span className="font-semibold text-blue-600">fun scouting adventure</span>.
      </p>

      {/* Inputs */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition transform focus:scale-105"
          required
        />
      </div>

      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
          Your Child's Grade Level
        </label>
        <select
          name="grade"
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition transform focus:scale-105"
          required
        >
          <option value="">Select Grade</option>
          <option value="kindergarten">Kindergarten</option>
          <option value="1">1st Grade</option>
          <option value="2">2nd Grade</option>
          <option value="3">3rd Grade</option>
          <option value="4">4th Grade</option>
          <option value="5">5th Grade</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition transform focus:scale-105"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-110 hover:shadow-lg"
      >
        🚀 Submit & Join the Adventure!
      </button>

      <p className="text-center text-gray-600 text-sm mt-2">
        We can’t wait to welcome your scout to the adventure!
      </p>
    </form>
  );
}
