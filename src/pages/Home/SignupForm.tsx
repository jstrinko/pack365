// Web3Forms delivers to the address this key was verified against — the
// destination is a property of the key, not something the form can set.
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

      {/* Identify the source of the submission. Web3Forms uses `subject` as the
          email subject line and `from_name` as the sender name. */}
      <input
        type="hidden"
        name="subject"
        value={'New "Join Pack 365" signup from the Pack 365 website'}
      />
      <input type="hidden" name="from_name" value="Pack 365 Website" />
      <input
        type="hidden"
        name="Form"
        value="Join Pack 365 — submitted from the signup form on the Pack 365 website"
      />

      <h2 className="text-3xl font-extrabold text-blue-700 mb-2 text-center drop-shadow-md">
        Join Pack 365!
      </h2>
      <p className="text-center text-gray-700 mb-4">
        Fill out this form to get your child started on a <span className="font-semibold text-blue-600">fun scouting adventure</span>.
      </p>

      {/* Inputs. Each is preceded by a hidden field describing what the value
          means, so the notification email reads clearly on its own. Web3Forms
          lists fields in form order, so each label sits above its value. */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="hidden"
          name="About the next field (name)"
          value="Name of the parent or guardian filling out the form"
        />
        <input
          type="text"
          id="name"
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
        <input
          type="hidden"
          name="About the next field (grade)"
          value="Grade level the prospective scout is entering"
        />
        <select
          id="grade"
          name="grade"
          className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition transform focus:scale-105"
          required
        >
          <option value="">Select Grade</option>
          <option value="Kindergarten">Kindergarten</option>
          <option value="1st Grade">1st Grade</option>
          <option value="2nd Grade">2nd Grade</option>
          <option value="3rd Grade">3rd Grade</option>
          <option value="4th Grade">4th Grade</option>
          <option value="5th Grade">5th Grade</option>
        </select>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="hidden"
          name="About the next field (email)"
          value="Email address of the parent or guardian — reply here to follow up"
        />
        <input
          type="email"
          id="email"
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
