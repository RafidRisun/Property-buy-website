import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1 bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
