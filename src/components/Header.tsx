export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Pack 365</h1>
        <nav className="hidden md:flex gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/events" className="hover:underline">Events</a>
          <a href="/signup" className="hover:underline">Join</a>
          <a href="/info" className="hover:underline">Scouting Info</a>
        </nav>
      </div>
    </header>
  );
}
