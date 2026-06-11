import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#C9A84C]/40">
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <p className="font-playfair text-lg font-bold text-[#C9A84C] mb-3">
            {site.name}
          </p>
          <p className="text-sm text-[#9A9A8A] leading-relaxed">
            An independent editorial guide to home lighting. We curate the best
            floor lamps, table lamps, smart lights, projectors, and candle
            warmers available on Amazon — vetted for real performance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {[
              { label: "About", href: "/about" },
              { label: "Guides", href: "/guides" },
              { label: "Glossary", href: "/glossary" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#9A9A8A] hover:text-[#C9A84C] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-4">
            Disclosure
          </p>
          <p className="text-xs text-[#9A9A8A] leading-relaxed">
            {site.name} is a participant in the Amazon Services LLC Associates
            Program, an affiliate advertising program designed to provide a
            means for sites to earn advertising fees by advertising and linking
            to Amazon.com. As an Amazon Associate, we earn from qualifying
            purchases at no additional cost to you.
          </p>
        </div>
      </div>

      <div className="border-t border-[#C9A84C]/20 py-4">
        <p className="text-center text-xs text-[#9A9A8A]">
          © {site.year} {site.name} — {site.domain}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
