import Header from "./Header";
import Footer from "./Footer";

type PageLayoutProps = {
  children: React.ReactNode;
  heroImage?: string; // optional banner image for the page
  heroAlt?: string;
  showHero?: boolean; // pages that need the vertical space can opt out
  /**
   * By default <main> is shrink-to-fit (auto margins beat stretch in a column
   * flex container), so it sizes to its widest child and centres. Pages that
   * want the full max-w-7xl box opt in here.
   */
  fullWidth?: boolean;
};

export default function PageLayout({
  children,
  heroImage,
  heroAlt,
  showHero = true,
  fullWidth = false,
}: PageLayoutProps) {
  if (!heroImage) {
    const num = Math.floor(Math.random() * 8) + 1;
    heroImage = `./scouts${num}.jpg`;
  }
  return (
    <div className="flex flex-col min-h-screen bg-yellow-50 text-gray-800">
      <Header />

      {showHero && heroImage && (
        <div className="w-full h-64 md:h-80 overflow-hidden mb-6">
          <img
            src={heroImage}
            alt={heroAlt || "Page hero"}
            className="w-full h-full object-cover object-center rounded-b-lg shadow-md"
          />
        </div>
      )}

      <main className={`flex-grow max-w-7xl mx-auto p-4${fullWidth ? " w-full" : ""}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}