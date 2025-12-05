import Navbar from "@/src/components/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1">
      <Navbar />
      {children}
    </div>
  );
}
