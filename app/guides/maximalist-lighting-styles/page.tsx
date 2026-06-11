import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Maximalist Lighting Styles | DecoLumeHome",
  description:
    "Art Deco, Hollywood Regency, Eclectic Bohemian, Neo-Deco, and Maximalist Modern — a deep dive into the five essential maximalist lighting styles and how to shop for each.",
};

const styles = [
  {
    id: "art-deco",
    number: "01",
    name: "Art Deco",
    subtitle: "Geometric Glamour, 1920–1940",
    image: "/guides/style-art-deco.jpg",
    body: [
      "Art Deco emerged in the aftermath of World War I as a deliberate rejection of organic Art Nouveau in favor of machine-age geometry, industrial materials, and aspirational luxury. The style reached its design peak between the mid-1920s and early 1940s, producing some of the most enduringly influential objects in Western design history — from the Chrysler Building to the Normandie ocean liner.",
      "In lighting, Art Deco's vocabulary is unmistakable: stepped geometric forms (chevrons, sunbursts, fan shapes, zigzags), symmetrical compositions, and an embrace of materials that felt simultaneously ancient and modern — polished brass, bronze, chrome, frosted glass, lacquer in black or rich jewel tones. Shadows cast by Art Deco fixtures are as designed as the fixtures themselves.",
      "The geometric rigor of Art Deco means its lighting translates surprisingly well to contemporary interiors. A polished brass fan-form sconce or a stepped geometric floor lamp provides instant visual sophistication against a dark wall, requiring little else to achieve a cohesive aesthetic statement.",
    ],
    lightingTypes: [
      "Fan-form and stepped torchiere floor lamps",
      "Geometric wall sconces with frosted glass panels",
      "Multi-arm chandeliers with angular brass arms",
      "Column table lamps with fluted brass bases",
    ],
    amazonTips:
      "Search for: 'Art Deco floor lamp brass', 'geometric chandelier gold', 'fan sconce frosted glass'. Look for descriptions mentioning 'stepped base', 'chevron', 'sunburst', or 'fluted column'. Prioritize brass and bronze over gold-painted resin for authentic quality.",
  },
  {
    id: "hollywood-regency",
    number: "02",
    name: "Hollywood Regency",
    subtitle: "Glamour Without Restraint, 1930s–1960s",
    image: "/guides/style-hollywood-regency.jpg",
    body: [
      "Hollywood Regency developed in the 1930s and 1940s as the aesthetic of California's film industry elite — a fusion of European Regency and Baroque grandeur with the glitter and theatricality of the movie business. Designers like Dorothy Draper, Billy Haines, and later Tony Duquette defined a style that was simultaneously opulent and playful, mixing crystal chandeliers with zebra print, lacquered furniture with mirrored surfaces.",
      "The Hollywood Regency lighting palette is unmistakable: crystal in abundance, gold and chrome hardware, palm motifs, sunburst forms, and the animal sculpture lamp (monkey, elephant, bird) as trophy centerpiece. Every surface is expected to reflect and amplify light — mirrors, lacquer, polished metals, and glass all contribute to the luminous, theatrical atmosphere.",
      "Contemporary Hollywood Regency interiors maintain this irreverence, combining genuine antique finds with bold modern reproductions. The lighting does not need to be authentic period — it needs to honor the principles: maximal light refraction, glamorous materials, and a sense of humor about its own extravagance.",
    ],
    lightingTypes: [
      "Crystal chandeliers with gold hardware",
      "Animal sculpture table lamps (gilded finishes)",
      "Mirrored sunburst wall sconces",
      "Gold palm tree floor lamps",
      "Crystal column wall sconces",
    ],
    amazonTips:
      "Search for: 'Hollywood Regency chandelier', 'crystal table lamp gold', 'sunburst mirror sconce', 'glam floor lamp'. Key terms: 'K9 crystal', 'gold finish', 'Hollywood Regency'. Avoid overly commercial chrome finishes — aged gold reads more authentic.",
  },
  {
    id: "eclectic-bohemian",
    number: "03",
    name: "Eclectic Bohemian",
    subtitle: "Global Warmth, Organic Maximalism",
    image: "/guides/style-eclectic-bohemian.jpg",
    body: [
      "Eclectic Bohemian maximalism is the most globally inclusive of the five styles, drawing from Moroccan metalwork, South Asian textile traditions, Japanese wabi-sabi, and the Western bohemian counterculture tradition. It is maximalism's most organic expression — layered, personal, and warm rather than formally composed.",
      "Lighting in the eclectic bohemian interior skews toward natural materials (rattan, jute, bamboo, wicker), warm color temperatures, artisan craftsmanship, and decorative forms that reference global craft traditions. The Moroccan filigree pendant lamp — casting its intricate shadow patterns across walls — is perhaps the defining symbol of this aesthetic. Copper, hammered brass, and raw iron patinas complement the organic material palette.",
      "The key principle in eclectic bohemian lighting is warmth: color temperature rarely exceeds 2700K, layers of light sources create intimate pools of glow rather than even illumination, and every fixture ideally has a story — a provenance, a craft tradition, a specific place of origin that contributes to the room's accumulated narrative.",
    ],
    lightingTypes: [
      "Oversized rattan and wicker pendant domes",
      "Moroccan filigree brass lanterns",
      "Copper wire constellation accent lights",
      "Hand-thrown ceramic table lamp bases",
      "Hammered brass floor torchieres",
    ],
    amazonTips:
      "Search for: 'Moroccan pendant lamp', 'rattan pendant light', 'bohemian table lamp ceramic', 'wicker ceiling light'. Look for: 'hand-pierced', 'hand-woven', 'natural rattan', 'hammered brass'. Be wary of mass-produced pieces that mimic natural materials with plastic.",
  },
  {
    id: "neo-deco",
    number: "04",
    name: "Neo-Deco",
    subtitle: "Art Deco Reborn, Bolder Than Ever",
    image: "/guides/style-neo-deco.jpg",
    body: [
      "Neo-Deco is the 21st-century reinvention of Art Deco sensibility for contemporary maximalist interiors. Where authentic Art Deco was constrained by the manufacturing capabilities of its era, Neo-Deco takes the foundational geometric language — chevrons, stepped forms, sunbursts, angular symmetry — and amplifies it with contemporary production techniques, bolder scales, and a willingness to mix the period vocabulary with current design idioms.",
      "The defining characteristic of Neo-Deco lighting is confidence of scale. Where an authentic Art Deco chandelier might have measured 24 inches in diameter, its Neo-Deco equivalent measures 48. Where Art Deco used measured gold accents, Neo-Deco makes gold the dominant finish. The geometric rigor remains, but the proportional restraint is released.",
      "Neo-Deco pairs beautifully with dark backgrounds — deep charcoal, near-black, or forest green walls that allow the gold and brass elements to read with maximum visual impact. It is the natural habitat of the dark luxury editorial aesthetic: bold forms, luxurious materials, and the confident certainty that there is no such thing as too much.",
    ],
    lightingTypes: [
      "Oversized sputnik and starburst chandeliers",
      "Geometric arc floor lamps with marble bases",
      "Stacked sculptural table lamp bases in brass",
      "Angular wall sconces with frosted glass",
      "Multi-arm geometric pendant configurations",
    ],
    amazonTips:
      "Search for: 'sputnik chandelier gold', 'geometric chandelier black gold', 'Art Deco chandelier oversized', 'mid-century modern chandelier brass'. Neo-Deco is well-served by contemporary lighting brands — look for angular silhouettes, matte black/brass contrasts, and sculptural forms.",
  },
  {
    id: "maximalist-modern",
    number: "05",
    name: "Maximalist Modern",
    subtitle: "Scale, Mix, Sculpture",
    image: "/guides/style-maximalist-modern.jpg",
    body: [
      "Maximalist Modern is the broadest of the five styles — a contemporary design sensibility that embraces excess of scale, complexity of material, and sculptural ambition without allegiance to a specific historical period. It borrows freely: a Maximalist Modern interior might combine oversized mixed-metal lighting with brutalist concrete, global textiles, and contemporary art.",
      "In lighting, Maximalist Modern is defined by three principles: scale (always larger than conventional wisdom suggests), material mixing (brass and chrome and matte black in the same room), and sculptural form (the fixture itself as art object). LED neon and backlit mirror panels sit comfortably alongside traditional chandelier forms in this aesthetic, because Maximalist Modern has no period rules to respect.",
      "The most demanding of the five styles to execute well, Maximalist Modern requires a confident design eye to prevent visual chaos. The rule is not less is more — it is that everything must relate to everything else, however loosely. Color, scale, and material must maintain enough internal consistency to feel curated rather than accumulated.",
    ],
    lightingTypes: [
      "Oversized mixed-metal chandeliers",
      "Sculptural floor lamps with bold geometric forms",
      "RGB LED panel wall installations",
      "Backlit geometric mirror sconces",
      "Statement pendant clusters at varied heights",
    ],
    amazonTips:
      "Search for: 'oversized chandelier mixed metal', 'sculptural floor lamp statement', 'RGB LED wall panel', 'large pendant light cluster'. Key terms: 'oversized', 'statement', 'sculptural', 'mixed finish'. Maximalist Modern rewards shopping across multiple categories and combining in unexpected ways.",
  },
];

export default function MaximalistLightingStylesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <Link
            href="/guides"
            className="text-xs text-[#9A9A8A] hover:text-[#C9A84C] transition-colors flex items-center gap-1 mb-6"
          >
            ← All Guides
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Style Guide
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight max-w-3xl mb-4">
            The Ultimate Guide to Maximalist Lighting Styles
          </h1>
          <p className="text-[#9A9A8A] max-w-2xl text-sm leading-relaxed">
            Five defining aesthetics — from 1920s Art Deco to contemporary Maximalist Modern — with a practical guide to identifying, appreciating, and shopping for each.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-[#0F0F0F] py-10 border-b border-[#C9A84C]/10">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-4">
            In This Guide
          </p>
          <div className="flex flex-wrap gap-3">
            {styles.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-[#9A9A8A] hover:text-[#C9A84C] border border-[#C9A84C]/20 hover:border-[#C9A84C] px-3 py-1.5 rounded transition-all"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STYLES */}
      {styles.map((style, idx) => (
        <section
          key={style.id}
          id={style.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#0F0F0F]"}`}
        >
          <div className="max-w-[800px] mx-auto px-4">
            <p className="text-5xl font-playfair font-bold text-[#C9A84C]/20 mb-2">
              {style.number}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-2">
              {style.subtitle}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-6">
              {style.name}
            </h2>

            <img
              src={style.image}
              alt={`${style.name} lighting style`}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "24px",
              }}
            />

            <div className="space-y-4 mb-8">
              {style.body.map((para, i) => (
                <p key={i} className="text-sm text-[#9A9A8A] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-5 mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-3">
                Best Lighting Types
              </p>
              <ul className="space-y-2">
                {style.lightingTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-2 text-sm text-[#F5F0E8]"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#C9A84C] mt-1 shrink-0"
                    />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-lg p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-2">
                How to Shop on Amazon
              </p>
              <p className="text-xs text-[#9A9A8A] leading-relaxed">
                {style.amazonTips}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER CTA */}
      <section className="bg-[#1A1A1A] py-16 border-t border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#F5F0E8] mb-4">
            Ready to Find Your Style?
          </h2>
          <p className="text-[#9A9A8A] text-sm mb-8 max-w-xl mx-auto">
            Browse our curated picks for each category — every product selected for design impact and real customer quality.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Floor Lamps", href: "/best/floor-lamps-living-room" },
              { label: "Smart Lamps", href: "/best/rgb-smart-floor-lamps" },
              { label: "Table Lamps", href: "/best/bedside-table-lamps" },
              { label: "Projectors", href: "/best/galaxy-aurora-projectors" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 bg-[#C9A84C] text-[#0F0F0F] text-sm font-semibold rounded hover:bg-[#B87333] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
