import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Lighting Guides | DecoLumeHome",
  description:
    "Practical guides to home lighting — from choosing the right bulb color temperature to finding the perfect bedside lamp for your routine.",
  twitter: {
    card: "summary_large_image",
  },
};

const guides = [
  {
    title: "How to Choose Light Color Temperature (2700K, 4000K, 6500K)",
    desc: "Warm white, cool white, or daylight? A room-by-room breakdown of the Kelvin scale — what the numbers mean, which range suits each space, and how color temperature affects sleep.",
    href: "/guides/how-to-choose-color-temperature",
    readTime: "7 min read",
    tag: "Buying Guide",
  },
  {
    title: "How to Light a Bedroom for Better Sleep and Comfort",
    desc: "The bedroom is the one room where lighting has a direct effect on your health. This guide covers layering, bedside lamp placement, night lights, and the smart lamp settings that support better sleep.",
    href: "/guides/how-to-light-a-bedroom",
    readTime: "8 min read",
    tag: "Sleep & Wellness",
  },
  {
    title: "Smart Lamps Buying Guide: App Control, Alexa, and What Actually Matters",
    desc: "Wi-Fi vs Bluetooth, RGB vs RGBIC, music sync, and app quality — a no-fluff breakdown of smart lamp specs and what to prioritize before you buy.",
    href: "/guides/smart-lamps-buying-guide",
    readTime: "9 min read",
    tag: "Buying Guide",
  },
  {
    title: "Candle Warmer Lamps vs. Burning: Safety, Scent, and What's Worth the Switch",
    desc: "Do candle warmer lamps really outperform open flame? A practical comparison covering scent throw, safety, candle longevity, and which type of candle user should make the switch.",
    href: "/guides/candle-warmer-vs-burning",
    readTime: "7 min read",
    tag: "Home Fragrance",
  },
  {
    title: "The Complete Guide to Home Lighting Styles",
    desc: "A deep dive into the defining home lighting aesthetics — from warm minimalism to smart-integrated setups — with practical advice on identifying your style and shopping for it on Amazon.",
    href: "/guides/maximalist-lighting-styles",
    readTime: "12 min read",
    tag: "Style Guide",
  },
  {
    title: "How to Layer Lighting in Any Room",
    desc: "The layered lighting framework used by interior designers to build depth and atmosphere. Learn how to combine ambient, task, and accent sources for a room that performs at every light level.",
    href: "/guides/how-to-layer-lighting-in-any-room",
    readTime: "8 min read",
    tag: "Design Technique",
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Editorial
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Lighting Guides
          </h1>
          <p className="text-[#9A9A8A] max-w-xl text-sm leading-relaxed">
            Practical guides to home lighting — from choosing the right bulb color temperature to finding the perfect bedside lamp for your routine.
          </p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1100px', margin: '0 auto', alignItems: 'stretch' }}>
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-6 hover:border-[#C9A84C] transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={20} className="text-[#C9A84C]" />
                  <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                    {guide.tag}
                  </span>
                </div>
                <h2 className="font-playfair text-xl font-bold text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors mb-3 leading-snug">
                  {guide.title}
                </h2>
                <p className="text-sm text-[#9A9A8A] leading-relaxed flex-1 mb-5">
                  {guide.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#9A9A8A]">{guide.readTime}</span>
                  <span className="text-xs font-semibold text-[#C9A84C] flex items-center gap-1">
                    Read Guide <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
