import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
