"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { WiztecLogo } from "./WiztecLogo";
import { iconFavorite } from "@/public/icons/icon";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Buy", href: "/main/buy" },
    { name: "Rent", href: "/main/rent" },
    { name: "Sell", href: "/main/sell" },
    { name: "Agents", href: "/main/agents" },
    { name: "Blogs", href: "/main/blogs" },
    { name: "Contact Us", href: "/main/contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full h-20 bg-white flex items-center justify-between px-8">
      <WiztecLogo />
      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-general font-medium transition-colors ${
              pathname === item.href ? "text-theme-color" : "text-gray-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-6">
        <Link
          href="/favorites"
          className="flex items-center gap-2 text-gray-600 font-general font-medium"
        >
          <span dangerouslySetInnerHTML={{ __html: iconFavorite }} />
          <span>Favorites</span>
        </Link>
        <Link
          href="/auth/login"
          className="flex px-4 py-3 bg-theme-color rounded-full text-white font-general font-medium hover:bg-theme-color-focused"
        >
          Login Now
        </Link>
      </div>
    </nav>
  );
}
