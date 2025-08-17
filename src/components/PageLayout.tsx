import Header from "./Header";
import Footer from "./Footer";

type PageLayoutProps = {
  children: React.ReactNode;
  heroImage?: string; // optional banner image for the page
  heroAlt?: string;
};

export default function PageLayout({ children, heroImage, heroAlt }: PageLayoutProps) {
  if (!heroImage) {
    const num = Math.floor(Math.random() * 9) + 1;
    heroImage = `./scouts${num}.jpg`;
  }
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50 text-gray-800">
      <Header />

      {heroImage && (
        <div className="w-full h-64 md:h-80 overflow-hidden mb-6">
          <img
            src={heroImage}
            alt={heroAlt || "Page hero"}
            className="w-full h-full object-cover object-center rounded-b-lg shadow-md"
          />
        </div>
      )}

      <main className="flex-grow max-w-7xl mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}