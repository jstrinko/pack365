const web3formsKey = '5756f720-2637-4245-96de-047aba9d59c3'

export default function SignupForm() {
  return (
    <form
      className="max-w-auto mx-auto bg-white p-6 rounded-xl shadow-lg space-y-5"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input type="hidden" name="access_key" value={web3formsKey} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Join Pack 365!</h2>
      <p className="text-center text-gray-600 mb-4">
        Fill out this form to get your child started on a fun scouting adventure.
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
      </div>

      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
          Your Child's Grade Level
        </label>
        <select
          name="grade"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
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
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Submit
      </button>

      <p className="text-center text-gray-500 text-sm mt-2">
        We can’t wait to welcome your scout to the adventure!
      </p>
    </form>
  );
}
