"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F0F0F] border-b border-[#C9A84C]/30">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-playfair text-xl font-bold text-[#C9A84C] tracking-wide"
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#F5F0E8] hover:text-[#C9A84C]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1A1A1A] border-t border-[#C9A84C]/20 px-4 py-4 flex flex-col gap-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#F5F0E8] hover:text-[#C9A84C] transition-colors text-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
