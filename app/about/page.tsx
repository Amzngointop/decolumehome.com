import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Star, Shield, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "About DecoLumeHome | Maximalist Lighting Curated for Bold Interiors",
  description:
    "DecoLumeHome is an independent editorial guide to maximalist and Neo-Deco lighting on Amazon. Learn about our curation methodology and mission.",
};

const methodology = [
  {
    icon: <Star size={20} className="text-[#C9A84C]" />,
    title: "Design Impact",
    body: "Every product must have genuine visual presence — strong proportions, considered materials, and a silhouette that reads clearly as a design statement. We do not recommend fixtures that disappear into a room.",
  },
  {
    icon: <Shield size={20} className="text-[#C9A84C]" />,
    title: "Build Quality",
    body: "We review verified customer feedback for patterns in quality — both positive (solid construction, accurate colors, good hardware) and negative (poor finish quality, missing parts, failure points). Patterns of quality issues disqualify products regardless of their visual appeal.",
  },
  {
    icon: <Search size={20} className="text-[#C9A84C]" />,
    title: "Value Assessment",
    body: "We consider the relationship between price, design sophistication, and build quality. A fixture at $150 that punches above its price class earns a strong recommendation; a fixture at $500 that feels cheap in hand does not.",
  },
  {
    icon: <CheckCircle size={20} className="text-[#C9A84C]" />,
    title: "Style Authenticity",
    body: "We prioritize products that genuinely embody the aesthetic they claim — Art Deco pieces with real geometric rigor, Hollywood Regency pieces with authentic glamour, bohemian pieces with real craft quality. We flag products that merely borrow surface aesthetics without structural commitment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Who We Are
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4 max-w-2xl">
            About DecoLumeHome
          </h1>
          <p className="text-[#9A9A8A] max-w-xl text-sm leading-relaxed">
            An independent editorial guide to maximalist and Neo-Deco lighting — curated for interiors built on bold choices.
          </p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4 max-w-3xl">
          <div className="space-y-5 mb-14">
            <p className="font-playfair text-2xl text-[#F5F0E8] italic leading-relaxed">
              &ldquo;We built DecoLumeHome because we were tired of lighting guides that treated bold design as a risk rather than a reward.&rdquo;
            </p>
            <p className="text-sm text-[#9A9A8A] leading-relaxed">
              DecoLumeHome was created for a specific kind of homeowner or renter: someone who has strong aesthetic convictions, who embraces maximalism as a considered design philosophy rather than an accident, and who is tired of sifting through endless generic listings on Amazon to find the pieces with real design merit.
            </p>
            <p className="text-sm text-[#9A9A8A] leading-relaxed">
              The Amazon lighting catalog is enormous — and the signal-to-noise ratio is brutal. A truly exceptional chandelier or statement floor lamp is buried under dozens of nearly identical generic alternatives. We do the curation so you can shop with confidence, knowing that every product we recommend has been selected against rigorous design and quality criteria.
            </p>
            <p className="text-sm text-[#9A9A8A] leading-relaxed">
              Our focus is narrow by design: Neo-Deco and maximalist lighting aesthetics, with a US audience in mind. We do not pretend to cover the full lighting market — we go deep into a specific corner of it where we can add real editorial value.
            </p>
            <p className="text-sm text-[#9A9A8A] leading-relaxed">
              We are an Amazon affiliate. We earn a commission on purchases made through our links, at no additional cost to you. This model funds the editorial work that makes this site useful. Our selection criteria are independent of commission rates — we would recommend the same products regardless of affiliate economics.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-6">
              Our Selection Methodology
            </h2>
            <p className="text-sm text-[#9A9A8A] leading-relaxed mb-8">
              Every product recommended on DecoLumeHome is evaluated against four criteria. A product must pass all four to earn a place in our guides:
            </p>
            <div className="space-y-4">
              {methodology.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#1E1E1E] border border-[#C9A84C]/15 rounded-lg p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-[#F5F0E8] font-semibold text-sm mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#9A9A8A] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-[#C9A84C]/20">
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-4">
              What We Don&apos;t Do
            </h2>
            <ul className="space-y-3 text-sm text-[#9A9A8A]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5">—</span>
                We do not purchase or physically test the products we recommend. Our analysis is based on design evaluation, specification review, and verified customer feedback patterns.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5">—</span>
                We do not accept payment for product placement or recommendations.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5">—</span>
                We do not manufacture or sell products directly.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0F0F0F] font-semibold rounded hover:bg-[#B87333] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
