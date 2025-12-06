"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { WiztecLogo } from "./WiztecLogo";
import { iconFavorite } from "@/public/icons/icon";
import { useState } from "react";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full h-20 bg-white flex items-center justify-between  lg:px-38 xl:px-48">
      <WiztecLogo />
      <div className="hidden sm:flex items-center gap-6">
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
      <div className="hidden sm:flex flex-row items-center gap-6">
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
      <button
        className="sm:hidden p-2 rounded-md border border-gray-300"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </button>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center sm:hidden">
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
      )}
    </nav>
  );
}
