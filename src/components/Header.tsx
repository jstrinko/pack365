import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">
          <a href="/">Pack 365</a>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/signup" className="hover:underline">Join</a>
          <a href="/info" className="hover:underline">Scouting Info</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-2 p-4 bg-blue-600">
          <a href="/" className="hover:underline">Home</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/signup" className="hover:underline">Join</a>
          <a href="/info" className="hover:underline">Scouting Info</a>
        </nav>
      )}
    </header>
  );
}
