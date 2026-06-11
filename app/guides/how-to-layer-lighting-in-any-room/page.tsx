import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Layer Lighting in Any Room | DecoLumeHome",
  description:
    "Learn how to combine ambient, task, and accent lighting to create a well-lit room with depth and flexibility. Practical advice for every room type.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function HowToLayerLightingPage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Design Technique
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4 max-w-3xl">
            How to Layer Lighting in Any Room
          </h1>
          <p className="text-[#9A9A8A] max-w-xl text-sm leading-relaxed">
            The layered lighting framework used by interior designers to build depth and atmosphere — practical advice for every room type.
          </p>
          <p className="text-xs text-[#9A9A8A] mt-4">8 min read</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[720px] mx-auto px-4 prose-custom">

          <p className="text-[#9A9A8A] text-base leading-relaxed mb-10">
            Most rooms have one light source switched on at a time. That single overhead fixture — or single floor lamp — is asked to do everything at once: fill the room with light, support reading, create atmosphere. It rarely succeeds at any of them. Layering solves this by assigning different jobs to different light sources, then combining them.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-4 mt-10">
            The Three Layers: Ambient, Task, and Accent
          </h2>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-4">
            Every well-lit room draws from three distinct categories of light:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              {
                label: "Ambient lighting",
                body: "The base layer — general illumination that lets the room function. Sources: ceiling fixtures, torchiere floor lamps, large table lamps. Goal: even, shadow-free coverage across the whole room.",
              },
              {
                label: "Task lighting",
                body: "Focused light for a specific activity — reading, working at a desk, cooking, applying makeup. Sources: directional table lamps, desk lamps, under-cabinet lights. Goal: bright, glare-free light exactly where you need it.",
              },
              {
                label: "Accent lighting",
                body: "Decorative or highlighting light that creates visual interest. Sources: LED strips, night lights, projectors, table lamps aimed at walls. Goal: contrast, atmosphere, and depth.",
              },
            ].map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="text-[#C9A84C] mt-0.5">—</span>
                <span className="text-sm text-[#9A9A8A] leading-relaxed">
                  <span className="text-[#F5F0E8] font-semibold">{item.label}:</span>{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-4 mt-10">
            Why One Light Source Always Feels Wrong
          </h2>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-4">
            A single overhead light illuminates uniformly — which sounds correct but creates flat, shadowless light that feels clinical and tiring. Shadows are not the enemy; they give rooms dimension. When a floor lamp in the corner throws light upward, and a table lamp creates a warm pool on the nightstand, and a strip light adds a glow behind the TV, your eye has multiple points of interest. The room feels considered.
          </p>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-8">
            A single lamp asked to do everything also tends to be wrong for at least one of those tasks. A reading lamp bright enough for books is too bright for film watching. A warm ambient floor lamp creates good atmosphere but cannot adequately illuminate a desk. Layering means each source is calibrated for its job.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-4 mt-10">
            Room-by-Room Application
          </h2>

          <h3 className="text-[#F5F0E8] font-semibold text-base mb-2 mt-6">Living Room</h3>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-4">
            Start with a torchiere or arc floor lamp for ambient light — it fills the ceiling and bounces light back softly. Add table lamps on side tables for warm mid-level pools of light. Use an LED strip behind the TV as accent lighting; it reduces eye strain from screen contrast and adds atmosphere without competing with the screen. Three sources, three heights, one cohesive room.
          </p>

          <h3 className="text-[#F5F0E8] font-semibold text-base mb-2 mt-6">Bedroom</h3>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-4">
            Bedrooms benefit from the most deliberate layering because lighting requirements shift across the day. A dimmable floor lamp or overhead fixture handles ambient needs. A warm bedside table lamp (2700K, dimmable) handles reading without activating the whole room. A dusk-to-dawn night light handles low-level orientation at night. Consider an aurora or galaxy projector for atmosphere during wind-down — motion-based projected light is genuinely calming.
          </p>

          <h3 className="text-[#F5F0E8] font-semibold text-base mb-2 mt-6">Home Office</h3>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-8">
            Task lighting is the priority here: a good desk lamp at 4000K–5000K reduces eye strain during screen use. Add a floor lamp behind or beside the monitor to raise the ambient light level in your field of view — a dark room surrounding a bright monitor causes eye fatigue. A warm table lamp off to the side can serve as a softer ambient source during video calls, where harsh overhead light creates unflattering shadows.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-4 mt-10">
            Practical Starting Points
          </h2>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-4">
            You do not need to source all three layers at once. The useful sequence:
          </p>
          <ol className="space-y-3 mb-8 list-none">
            {[
              "Get the ambient layer right first — a quality dimmable floor lamp or torchiere gives you control over the room's base brightness.",
              "Add task lighting where you actually work or read. A good directional table lamp here makes an immediate functional difference.",
              "Use accent lighting last, and treat it as atmosphere. Night lights, LED strips, projectors, and candle warmer lamps are all valid accent sources depending on the room.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-[#C9A84C] font-bold text-sm shrink-0">{i + 1}.</span>
                <span className="text-sm text-[#9A9A8A] leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-[#9A9A8A] text-sm leading-relaxed mb-10">
            Color temperature consistency matters across your layers. Mixing 2700K warm lamps with a 5000K cool floor lamp in the same room creates visual conflict. Pick a temperature range — warm (2700K–3000K) for living rooms and bedrooms, neutral (3500K–4000K) for offices and kitchens — and keep all your sources within it.
          </p>

          <div className="border-t border-[#C9A84C]/20 pt-8 mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Shop by Layer
            </p>
            <p className="text-sm text-[#9A9A8A] mb-5">
              Ready to build your layers? Browse our curated picks for every lighting type.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/best/floor-lamps-living-room"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] border border-[#C9A84C]/30 rounded px-4 py-2 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                Floor Lamps <ArrowRight size={14} />
              </Link>
              <Link
                href="/best/bedside-table-lamps"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] border border-[#C9A84C]/30 rounded px-4 py-2 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                Table Lamps <ArrowRight size={14} />
              </Link>
              <Link
                href="/best/night-lights-for-home"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] border border-[#C9A84C]/30 rounded px-4 py-2 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                Night Lights <ArrowRight size={14} />
              </Link>
              <Link
                href="/best/galaxy-aurora-projectors"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] border border-[#C9A84C]/30 rounded px-4 py-2 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                Projectors <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
