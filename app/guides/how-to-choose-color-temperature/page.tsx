import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose Light Color Temperature (2700K, 4000K, 6500K) | DecoLumeHome",
  description:
    "Warm white, cool white, or daylight? A practical guide to choosing the right Kelvin rating for every room in your home — bedrooms, living rooms, kitchens, and more.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function ColorTemperatureGuide() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Buying Guide
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight max-w-3xl mb-4">
            How to Choose Light Color Temperature
          </h1>
          <p className="text-[#9A9A8A] max-w-2xl text-sm leading-relaxed mb-3">
            2700K, 3000K, 4000K, 5000K, 6500K — the Kelvin scale determines whether your lamp feels warm and cozy or bright and clinical. Getting it right makes a bigger difference than most people expect.
          </p>
          <span className="text-xs text-[#9A9A8A]">7 min read</span>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[800px] mx-auto px-4 space-y-14">

          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-5">
              What Color Temperature Actually Means
            </h2>
            <div className="space-y-4 text-sm text-[#9A9A8A] leading-relaxed">
              <p>
                Color temperature is measured in Kelvin (K) and describes the hue of white light — from the amber warmth of a candle flame to the blue-white brightness of overcast daylight. Counterintuitively, higher Kelvin numbers produce cooler, bluer light, while lower numbers produce warmer, more amber light.
              </p>
              <p>
                The Kelvin scale for home lighting typically runs from 2200K (very warm, candlelight-like) to 6500K (daylight, often used in photography or commercial spaces). Most home lamps fall somewhere in the 2700K–5000K range, and choosing the right point on that scale for each room is one of the most impactful lighting decisions you can make.
              </p>
              <p>
                Color temperature does not affect brightness — that is determined by lumens. A 2700K lamp and a 6500K lamp with the same lumen rating produce the same amount of light; they just look completely different in color quality.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-5">
              The Key Color Temperature Ranges Explained
            </h2>
            <div className="space-y-6">
              {[
                {
                  range: "2200K–2700K — Warm White",
                  label: "Best for: Bedrooms, living rooms, dining rooms",
                  body: "This range produces the amber-tinted warmth that most people associate with \"cozy\" lighting. At 2700K you are approximating the color of a traditional incandescent bulb — familiar, flattering to skin tones and warm materials like wood and brass, and easy on the eyes in the evening. 2200K gets closer to candlelight and is very dim and atmospheric, better for accent use than reading. If you want your living room or bedroom to feel relaxed and intimate, 2700K is the default correct answer.",
                },
                {
                  range: "3000K — Soft White",
                  label: "Best for: Living rooms, bathrooms, reading lamps",
                  body: "3000K is a transitional tone — warmer than neutral but brighter and slightly crisper than 2700K. It strikes a useful balance for rooms that need to feel warm but also provide sufficient task illumination. Many designers favor 3000K for bathrooms where you need good facial visibility at the mirror without a harsh clinical feel. It also works well for reading lamps where 2700K can feel slightly too soft for extended reading sessions.",
                },
                {
                  range: "4000K — Cool White / Neutral",
                  label: "Best for: Kitchens, home offices, garages",
                  body: "4000K is neutral — neither warm nor cool. It is the most common choice for kitchens because it illuminates food and surfaces accurately without the distorting warmth of lower Kelvin ranges. In a home office, 4000K supports sustained concentration better than warm light, which can feel soporific during focused work. At 4000K, colors render more accurately, making it useful for any space where visual accuracy matters — art studios, sewing rooms, workbenches.",
                },
                {
                  range: "5000K–6500K — Daylight / Cool Daylight",
                  label: "Best for: Garages, craft rooms, photography",
                  body: "This range replicates outdoor daylight and is the most alertness-promoting. It is rarely appropriate for living areas or bedrooms — the blue-rich spectrum actively suppresses melatonin and signals the brain to stay awake. Its best home applications are spaces where maximum visual clarity is needed: a garage workshop, a photography setup, a professional makeup station. In these contexts, the clinical brightness is a feature, not a flaw.",
                },
              ].map((item) => (
                <div key={item.range} className="bg-[#1E1E1E] border border-[#C9A84C]/15 rounded-lg p-5">
                  <h3 className="font-semibold text-[#F5F0E8] mb-1">{item.range}</h3>
                  <p className="text-xs text-[#C9A84C] mb-3">{item.label}</p>
                  <p className="text-sm text-[#9A9A8A] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-5">
              Color Temperature by Room: Quick Reference
            </h2>
            <div className="space-y-4 text-sm text-[#9A9A8A] leading-relaxed">
              <p>
                <span className="text-[#F5F0E8] font-semibold">Bedroom:</span>{" "}
                2700K for all general lighting. If you have a reading lamp on a nightstand, 3000K is acceptable for the task light only — keep the rest of the room at 2700K so switching to the reading lamp does not abruptly change the room's atmosphere.
              </p>
              <p>
                <span className="text-[#F5F0E8] font-semibold">Living room:</span>{" "}
                2700K–3000K for ambient floor lamps and table lamps. If you watch television, avoid placing cool-white lamps in direct sight lines — the contrast between the screen and a 4000K+ lamp creates eye strain.
              </p>
              <p>
                <span className="text-[#F5F0E8] font-semibold">Dining room:</span>{" "}
                2700K exclusively. Warm light makes food look more appetizing and creates a convivial atmosphere. A dining room at 4000K looks institutional regardless of how good the furniture is.
              </p>
              <p>
                <span className="text-[#F5F0E8] font-semibold">Kitchen:</span>{" "}
                3000K–4000K depending on your preference. Task areas (countertops, sink) benefit from 4000K for accurate color rendering. A kitchen island used for casual dining can work at 3000K for a warmer feel.
              </p>
              <p>
                <span className="text-[#F5F0E8] font-semibold">Home office:</span>{" "}
                4000K for sustained daytime work. If you work evenings and want to wind down afterward, consider a smart lamp that lets you shift to 2700K in the last hour of your workday.
              </p>
              <p>
                <span className="text-[#F5F0E8] font-semibold">Bathroom:</span>{" "}
                3000K is the balanced choice. Pure 2700K can make the bathroom feel too dim and spa-like for grooming tasks; 4000K is fine for utility but uncomfortable for morning and evening routines.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-5">
              CCT-Adjustable Lamps: The Practical Solution
            </h2>
            <div className="space-y-4 text-sm text-[#9A9A8A] leading-relaxed">
              <p>
                Many modern floor lamps and table lamps offer adjustable color temperature (CCT) — the ability to shift between warm and cool white within a single lamp. A typical CCT range is 2700K–6500K, switchable via a remote, touch control, or app.
              </p>
              <p>
                CCT-adjustable lamps are particularly useful in multipurpose rooms. A home office that doubles as a guest bedroom can run at 4000K during work hours and 2700K in the evening. A living room that switches between casual lounging and project work can follow the same logic.
              </p>
              <p>
                The trade-off is that CCT-adjustable LED technology — particularly at the warm end — occasionally produces a slightly less accurate warm white than a fixed 2700K LED optimized for that range. For critical applications like art rooms, this matters. For everyday home use, the difference is minor and the flexibility is worth it.
              </p>
              <p>
                Our{" "}
                <Link href="/best/floor-lamps-living-room" className="text-[#C9A84C] hover:underline">
                  best floor lamps for living room and bedroom
                </Link>{" "}
                includes several CCT-adjustable picks with remote or app control — a good starting point if you want one lamp that handles multiple scenarios.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-5">
              Color Temperature and Sleep
            </h2>
            <div className="space-y-4 text-sm text-[#9A9A8A] leading-relaxed">
              <p>
                The relationship between color temperature and sleep quality is well-documented. Blue-rich light (4000K and above) suppresses melatonin production by signaling the brain that it is daytime. Warm light (2700K and below) has a much weaker effect on melatonin and is significantly less disruptive to the body's circadian rhythm.
              </p>
              <p>
                In practical terms: if you use any lamp in the hour or two before bed, choose 2700K or lower. This applies to bedside reading lamps, floor lamps in the bedroom, and any light source you are exposed to while winding down. The difference is not marginal — studies have consistently shown that blue-light exposure in the two hours before sleep delays sleep onset and reduces sleep quality.
              </p>
              <p>
                Smart lamps with automatic warm-down schedules — shifting from 4000K during the day to 2700K after 9pm — handle this automatically once configured. See our{" "}
                <Link href="/best/bedside-table-lamps" className="text-[#C9A84C] hover:underline">
                  best bedside table lamps
                </Link>{" "}
                for picks optimized for the sleep environment.
              </p>
            </div>
          </div>

          <div className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-3">
              Quick Rule of Thumb
            </p>
            <ul className="space-y-2 text-sm text-[#9A9A8A]">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] shrink-0">→</span>
                <span>Bedroom and living room: <strong className="text-[#F5F0E8]">2700K</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] shrink-0">→</span>
                <span>Bathroom and reading lamps: <strong className="text-[#F5F0E8]">3000K</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] shrink-0">→</span>
                <span>Kitchen and home office: <strong className="text-[#F5F0E8]">4000K</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] shrink-0">→</span>
                <span>Workshop, garage, photography: <strong className="text-[#F5F0E8]">5000K–6500K</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] shrink-0">→</span>
                <span>Before bed (all rooms): <strong className="text-[#F5F0E8]">2700K or lower, always</strong></span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[#C9A84C]/20 pt-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C] mb-5">
              Related Categories
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Floor Lamps", href: "/best/floor-lamps-living-room" },
                { label: "Bedside Lamps", href: "/best/bedside-table-lamps" },
                { label: "Smart Floor Lamps", href: "/best/rgb-smart-floor-lamps" },
                { label: "Night Lights", href: "/best/night-lights-for-home" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E1E1E] border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold rounded hover:bg-[#C9A84C]/10 transition-colors"
                >
                  {link.label} <ArrowRight size={11} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
