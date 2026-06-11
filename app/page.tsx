import type { Metadata } from "next";
import Link from "next/link";
import {
  Lamp, LampDesk, Zap, Sparkles, BookOpen, ArrowRight,
  Thermometer, Wifi, Layers, Search, ShieldCheck, RefreshCw,
  Sofa, Bed, Moon, Gamepad2,
} from "lucide-react";
import { site, categories } from "@/data/site";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CTAButton from "@/components/CTAButton";
import LampFinder from "@/components/RoomVibeFinder";
import ScrollButton from "@/components/ScrollButton";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: site.meta.defaultTitle,
  description: site.description,
  twitter: {
    card: "summary_large_image",
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  Zap: <Zap size={32} className="text-[#C9A84C]" />,
  Lamp: <Lamp size={32} className="text-[#C9A84C]" />,
  LampDesk: <LampDesk size={32} className="text-[#C9A84C]" />,
  Flame: <Sparkles size={32} className="text-[#C9A84C]" />,
  Moon: <Moon size={32} className="text-[#C9A84C]" />,
  Sparkles: <Sparkles size={32} className="text-[#C9A84C]" />,
};

const whyCards = [
  {
    icon: <Thermometer size={28} className="text-[#C9A84C]" />,
    title: "Choosing the Right Color Temperature",
    body: "Color temperature in Kelvin (K) determines how warm or cool your light looks. 2700K is the warm, incandescent-like tone ideal for bedrooms and living rooms. 4000K–5000K is daylight-neutral, better for kitchens and home offices. Matching CCT to room purpose makes a bigger difference than most people expect.",
  },
  {
    icon: <Wifi size={28} className="text-[#C9A84C]" />,
    title: "Smart vs. Traditional Lamps",
    body: "Smart lamps connect to Wi-Fi or Bluetooth for app control, voice commands, and scheduling. Traditional lamps use physical switches or remote controls — simpler, but less flexible. Smart is worth the premium for lamps you adjust daily; traditional is the better choice for accent lamps you rarely touch.",
  },
  {
    icon: <Layers size={28} className="text-[#C9A84C]" />,
    title: "How to Layer Home Lighting",
    body: "A well-lit room uses three layers: ambient (overall room light from overhead or torchiere floor lamps), task (focused light for reading, cooking, or working), and accent (decorative sources like table lamps, night lights, or projectors). Each layer serves a distinct role — together they create depth and flexibility.",
  },
];

const trustPillars = [
  {
    icon: <Search size={28} className="text-[#C9A84C]" />,
    title: "Independent Research",
    body: "We cross-reference manufacturer specs, verified customer reviews, and category benchmarks before recommending any product. No pick makes the list on specs alone.",
  },
  {
    icon: <ShieldCheck size={28} className="text-[#C9A84C]" />,
    title: "No Paid Placements",
    body: "No brand pays for inclusion or position. Every product earns its place based on performance, quality, and value relative to everything else in the category.",
  },
  {
    icon: <RefreshCw size={28} className="text-[#C9A84C]" />,
    title: "Regularly Updated",
    body: "Picks are reviewed when new models launch, pricing shifts significantly, or sustained user feedback changes the recommendation. What you read reflects current availability.",
  },
];

const roomCards = [
  {
    icon: <Sofa size={32} className="text-[#C9A84C]" />,
    room: "Living Room",
    desc: "Ambient torchiere or shade lamp, 1200–1600 lumens, warm to neutral CCT.",
    href: "/best/floor-lamps-living-room",
  },
  {
    icon: <Bed size={32} className="text-[#C9A84C]" />,
    room: "Bedroom",
    desc: "Bedside table lamp, 800–1000 lumens, 2700K warm white, touch or pull-chain control.",
    href: "/best/bedside-table-lamps",
  },
  {
    icon: <Moon size={32} className="text-[#C9A84C]" />,
    room: "Hallway & Bathroom",
    desc: "Plug-in night light, dusk-to-dawn sensor, 5–15 lumens, always-on reliability.",
    href: "/best/night-lights-for-home",
  },
  {
    icon: <Gamepad2 size={32} className="text-[#C9A84C]" />,
    room: "Gaming & Accent",
    desc: "RGB/RGBIC floor lamp, music sync, 16M colors, app control for gaming setups.",
    href: "/best/rgb-smart-floor-lamps",
  },
];

const lightingLayers = [
  {
    label: "Accent",
    sublabel: "Top layer — decoration & atmosphere",
    desc: "Night lights, galaxy projectors, candle warmer lamps. Low output, high visual interest.",
    href: "/best/night-lights-for-home",
    linkLabel: "Night Lights & Projectors",
    width: "55%",
    bg: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.3)",
  },
  {
    label: "Task",
    sublabel: "Middle layer — focused function",
    desc: "Bedside table lamps, reading lamps. Bright, directed light for specific activities.",
    href: "/best/bedside-table-lamps",
    linkLabel: "Table Lamps",
    width: "75%",
    bg: "rgba(201,168,76,0.08)",
    border: "1px solid rgba(201,168,76,0.2)",
  },
  {
    label: "Ambient",
    sublabel: "Base layer — overall room fill",
    desc: "Floor lamps, torchieres. General illumination that makes the room functional.",
    href: "/best/floor-lamps-living-room",
    linkLabel: "Floor Lamps",
    width: "100%",
    bg: "rgba(201,168,76,0.04)",
    border: "1px solid rgba(201,168,76,0.15)",
  },
];

const glossaryTerms = [
  { term: "Lumens", def: "Total light output — use this to compare brightness, not wattage.", color: "#C9A84C" },
  { term: "CCT / Kelvin", def: "Color temperature scale: 2700K = warm white, 5000K+ = daylight.", color: "#B8973B" },
  { term: "RGBIC", def: "Independent color zone control — each lamp segment shows a different color.", color: "#C9A84C" },
  { term: "Torchiere", def: "Uplight floor lamp design that bounces light off the ceiling for soft ambient fill.", color: "#B8973B" },
  { term: "Dusk-to-Dawn", def: "Photosensor that auto-activates a night light when ambient light drops.", color: "#C9A84C" },
  { term: "Stepless Dimming", def: "Continuous brightness adjustment with no fixed steps or jumps.", color: "#B8973B" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-6">
            Home Lighting — Curated for Every Room
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#F5F0E8] leading-tight mb-4">
            Light Up Every Room.
            <br />
            <span className="italic">Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#C9A84C] max-w-2xl mx-auto mb-10 font-medium">
            From RGB smart floor lamps to galaxy projectors — curated home lighting picks on Amazon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollButton />
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#C9A84C] text-[#C9A84C] font-semibold rounded hover:bg-[#C9A84C]/10 transition-colors"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* LIGHTING GUIDE CARDS */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              The Basics
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Lighting Made Simple
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-6"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Editor&apos;s Picks
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Featured Products
            </h2>
            <p className="text-[#9A9A8A] mt-3 max-w-xl mx-auto text-sm">
              Our top pick from each category — one standout across the full range.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* LAMP FINDER TOOL */}
      <section id="lamp-finder" className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Interactive Tool
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Find Your Lighting Vibe
            </h2>
            <p className="text-[#9A9A8A] mt-3 max-w-xl mx-auto text-sm">
              Tell us what type of lamp you need — we&apos;ll match you with the right picks.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <LampFinder />
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* BROWSE BY CATEGORY */}
      <section id="browse-categories" className="bg-[#0F0F0F] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Shop by Type
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Browse by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/best/${cat.slug}`}
                className="group bg-[#1E1E1E] border border-[#C9A84C]/30 rounded-lg p-6 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                <div className="mb-3">{categoryIcons[cat.icon]}</div>
                <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#9A9A8A] leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-[#C9A84C] text-xs font-semibold">
                  View Picks <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* HOW WE SELECT — TRUST PILLARS */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Our Standard
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              How We Select Every Pick
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-6"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#4A4A4A] max-w-lg mx-auto">
            DecoLumeHome earns a commission from Amazon when you purchase through our links. This
            does not influence which products are recommended — every pick is chosen on performance
            alone.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* LIGHTING BY ROOM */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Shop by Room
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Find the Right Lamp for Every Room
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {roomCards.map((card) => (
              <Link
                key={card.room}
                href={card.href}
                className="group bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-6 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                <div className="mb-3">{card.icon}</div>
                <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors mb-2">
                  {card.room}
                </h3>
                <p className="text-xs text-[#9A9A8A] leading-relaxed mb-4">{card.desc}</p>
                <div className="flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold">
                  See Picks <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* 3 LAYERS PYRAMID */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Design Principle
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              The 3 Layers of Home Lighting
            </h2>
            <p className="text-[#9A9A8A] mt-3 max-w-xl mx-auto text-sm">
              Every well-lit room combines three distinct light sources, each with a different job.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
            {lightingLayers.map((layer) => (
              <div
                key={layer.label}
                style={{
                  width: layer.width,
                  background: layer.bg,
                  border: layer.border,
                  borderRadius: 10,
                  padding: "20px 24px",
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div
                      style={{
                        color: "#C9A84C",
                        fontWeight: 700,
                        fontSize: 16,
                        marginBottom: 2,
                      }}
                      className="font-playfair"
                    >
                      {layer.label}
                    </div>
                    <div style={{ color: "#9A9A8A", fontSize: 11, marginBottom: 8 }}>
                      {layer.sublabel}
                    </div>
                    <p style={{ color: "#9A9A8A", fontSize: 12, lineHeight: 1.6 }}>
                      {layer.desc}
                    </p>
                  </div>
                  <Link
                    href={layer.href}
                    className="text-xs font-semibold text-[#C9A84C] whitespace-nowrap flex items-center gap-1 hover:underline shrink-0 mt-1"
                  >
                    {layer.linkLabel} <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* GLOSSARY PREVIEW */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Quick Reference
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Key Lighting Terms
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                className="bg-[#1E1E1E] rounded-lg p-4"
                style={{ borderLeft: `3px solid ${item.color}` }}
              >
                <div
                  style={{ color: item.color, fontWeight: 700, fontSize: 13, marginBottom: 4 }}
                >
                  {item.term}
                </div>
                <p style={{ color: "#9A9A8A", fontSize: 12, lineHeight: 1.6 }}>{item.def}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] hover:underline"
            >
              See Full Glossary <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* LATEST GUIDES */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Editorial
            </p>
            <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8]">
              Latest Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "How to Choose the Right Floor Lamp for Your Room",
                desc: "Lumens, shade types, color temperature, and placement — a practical framework for picking the floor lamp that actually works for your space.",
                href: "/guides",
              },
              {
                title: "Smart Lamps vs. Traditional: Which Is Worth It?",
                desc: "App control, voice integration, and scheduling are compelling — but not for every lamp. A clear-eyed breakdown of when smart is worth the premium.",
                href: "/guides",
              },
            ].map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-6 hover:border-[#C9A84C] transition-all"
              >
                <div className="mb-3">
                  <BookOpen size={24} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors mb-2 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-sm text-[#9A9A8A] leading-relaxed mb-4">
                  {guide.desc}
                </p>
                <span className="text-xs font-semibold text-[#C9A84C] flex items-center gap-1">
                  Read Guide <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              href="/guides"
              style={{ color: "#C9A84C", fontWeight: 500, textDecoration: "none" }}
              className="hover:underline inline-flex items-center gap-1"
            >
              View all guides <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* NEWSLETTER */}
      <NewsletterCTA />

      <div className="gold-divider" />

      {/* EDITORIAL NOTE */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-4">
            Our Mission
          </p>
          <p className="font-playfair text-2xl text-[#F5F0E8] leading-relaxed italic mb-6">
            &ldquo;Good lighting is the one upgrade that changes every room.&rdquo;
          </p>
          <p className="text-sm text-[#9A9A8A] leading-relaxed">
            DecoLumeHome exists for homeowners and renters who want better lighting but don&apos;t want to wade
            through thousands of Amazon listings to find it. We focus on real selection criteria — lumens, color
            temperature, control type, build quality — and surface the options that genuinely perform. Every pick
            is chosen for how well it does its job in an actual home, not for how impressive its spec sheet looks.
            We earn a commission from Amazon when you purchase through our links, at no added cost to you.
          </p>
          <div className="mt-8">
            <CTAButton
              href="/about"
              label="About DecoLumeHome"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </>
  );
}
