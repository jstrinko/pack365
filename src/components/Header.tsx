import { useState } from "react";
import { Star } from "lucide-react"; // optional mascot/star icon, install lucide-react

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/signup", label: "Join" },
    { href: "/info", label: "Scouting Info" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + mascot */}
        <h1 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2 drop-shadow-md">
          <Star className="w-6 h-6 text-yellow-300 animate-bounce hover:scale-125 transition-transform duration-300" />
          <a href="/">Pack 365</a>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-full bg-blue-700 hover:bg-yellow-400 hover:text-blue-700 transition-all duration-300 font-semibold shadow-sm transform hover:-translate-y-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-blue-500 transition-colors"
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-full bg-blue-700 hover:bg-yellow-400 hover:text-blue-700 transition-all duration-300 text-center font-semibold transform hover:-translate-y-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
