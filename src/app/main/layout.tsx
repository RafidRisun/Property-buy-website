import Navbar from "@/src/components/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1 bg-white lg:px-30 xl:px-40">
      <Navbar />
      {children}
    </div>
  );
}
