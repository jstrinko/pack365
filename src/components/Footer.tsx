export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-8">
      <div className="max-w-7xl mx-auto p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Cub Scout Pack 365 · <a href="/resources" className="underline">Resources</a>
      </div>
    </footer>
  );
}
