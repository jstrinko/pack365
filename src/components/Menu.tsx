import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border rounded"
      >
        ☰
      </button>
      {open && (
        <nav className="flex flex-col gap-2 mt-2 bg-gray-100 p-2 rounded">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/events" onClick={() => setOpen(false)}>Events</a>
          <a href="/signup" onClick={() => setOpen(false)}>Join</a>
          <a href="/info" onClick={() => setOpen(false)}>Scouting Info</a>
        </nav>
      )}
    </div>
  );
}
