import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Lighting Glossary — Terms & Definitions | DecoLumeHome",
  description:
    "A practical glossary of home lighting terms — from lumens and color temperature to RGBIC, torchiere, CCT, and smart lamp protocols.",
  twitter: {
    card: "summary_large_image",
  },
};

const terms = [
  {
    term: "Accent Lighting",
    definition:
      "Directional lighting used to highlight specific objects, architectural features, or areas of a room. Examples include LED strips behind a TV, picture lights, or a table lamp aimed at a gallery wall. Accent lighting creates visual depth by establishing contrast between lit and unlit areas.",
  },
  {
    term: "Ambient Lighting",
    definition:
      "The base layer of illumination in a room — general, overall light that lets the space function. Provided by ceiling fixtures, torchiere floor lamps, or bright table lamps. Ambient lighting is the foundation; task and accent layers build on top of it.",
  },
  {
    term: "Candle Warmer Lamp",
    definition:
      "A lamp that uses a halogen or incandescent bulb positioned above a jar candle to melt the wax through heat rather than flame. Candle warmer lamps eliminate open-flame risk while delivering consistent scent throw. Look for dimmable bulbs and an auto-off timer for safe everyday use.",
  },
  {
    term: "CCT (Correlated Color Temperature)",
    definition:
      "The technical term for color temperature — how warm or cool a light source appears, measured in Kelvin (K). CCT is the spec to check when comparing lamps. A lamp rated 2700K–3000K CCT is warm white; 4000K–5000K CCT is neutral to cool daylight.",
  },
  {
    term: "Color Temperature",
    definition:
      "The warmth or coolness of light, measured in Kelvin (K). 2700K is warm white (incandescent-like, best for bedrooms and living rooms). 4000K is neutral white, suited to kitchens and home offices. 5000K–6500K is daylight, ideal for task-focused areas. Matching color temperature to room purpose makes a significant practical difference.",
  },
  {
    term: "Daylight (5000K–6500K)",
    definition:
      "The cool, blue-white light range that mimics mid-day outdoor light. Daylight bulbs improve alertness and color accuracy, making them useful in home offices, craft rooms, and bathrooms. Not recommended for bedrooms — the blue-spectrum content suppresses melatonin and disrupts wind-down.",
  },
  {
    term: "Dusk-to-Dawn Sensor",
    definition:
      "A photosensor built into a plug-in light that automatically activates the light when ambient light falls below a set threshold and shuts it off when daylight returns. Standard in quality night lights. Eliminates the need to manually switch night lights on or off each day.",
  },
  {
    term: "E12 (Candelabra Base)",
    definition:
      "A small Edison screw base with a 12mm diameter, used in decorative fixtures, candelabra-style lamps, and some night lights. E12 bulbs are physically smaller than standard E26 bulbs and are not interchangeable. Always verify the base type before ordering replacement bulbs.",
  },
  {
    term: "E26 (Standard Base)",
    definition:
      "The standard North American light bulb base with a 26mm diameter. Most floor lamps, table lamps, and ceiling fixtures use E26. When a product listing says 'works with standard bulbs,' it means E26. LED E26 bulbs are widely available in all color temperatures.",
  },
  {
    term: "Floor Lamp",
    definition:
      "A freestanding lamp tall enough to stand on the floor, typically 58–72 inches in height. Floor lamps provide ambient or task lighting without requiring hardwired installation, making them the most flexible lighting solution for renters and homeowners alike. Key specs: shade type, bulb compatibility, and control method.",
  },
  {
    term: "Galaxy Projector",
    definition:
      "A tabletop device that projects star fields, nebula patterns, aurora effects, or ocean waves onto walls and ceilings. Galaxy projectors are used for bedroom atmosphere and children's rooms. Quality indicators include motor-driven rotation (for moving effects), projection sharpness, and the number of distinct effect modes.",
  },
  {
    term: "LED",
    definition:
      "Light Emitting Diode — the dominant residential lighting technology. LEDs use 75–80% less energy than incandescent bulbs, last 15,000–50,000 hours, and are available across all color temperatures. Modern LED bulbs match incandescent warmth at 2700K without the heat output or energy waste.",
  },
  {
    term: "Lumens",
    definition:
      "The measurement of total light output from a bulb or fixture. More lumens means brighter light. A standard 60W incandescent produces about 800 lumens; a 100W equivalent produces about 1600 lumens. When comparing lamps, lumens is the relevant brightness spec — wattage only indicates energy consumption.",
  },
  {
    term: "Night Light",
    definition:
      "A low-output plug-in lamp designed to provide subtle orientation lighting in hallways, bathrooms, and bedrooms without disrupting sleep. Effective night lights use warm white (2700K) LEDs at very low lumen output. Features to look for: dusk-to-dawn auto sensor, adjustable brightness, and a profile that does not block the second outlet.",
  },
  {
    term: "RGB",
    definition:
      "Red, Green, Blue — the three primary color channels used in color-changing LED lamps. RGB lamps mix these three channels to produce millions of colors. The entire lamp changes to a single color at once. Distinct from RGBIC, which allows multiple colors simultaneously across different zones.",
  },
  {
    term: "RGBIC",
    definition:
      "Red, Green, Blue, Integrated Circuit — an advanced LED configuration where independent control chips allow different segments of a lamp to display different colors simultaneously. The result is multi-zone color gradients and dynamic effects not possible with standard RGB. RGBIC is the spec to prioritize for gaming setups, music sync, and scene-based lighting.",
  },
  {
    term: "Smart Lamp",
    definition:
      "A lamp with wireless connectivity (Wi-Fi or Bluetooth) that enables control via a smartphone app, voice assistant (Alexa, Google Assistant), or automation schedule. Smart lamps typically support color temperature adjustment, dimming, scenes, timers, and routines. The quality of the companion app significantly affects day-to-day usability.",
  },
  {
    term: "Stepless Dimming",
    definition:
      "A dimming mechanism that adjusts brightness smoothly across a continuous range rather than in fixed steps (e.g., low/medium/high). Stepless dimming lets you dial in exactly the output you want. Preferred over stepped dimming for bedrooms and living rooms where precise brightness control matters.",
  },
  {
    term: "Table Lamp",
    definition:
      "A lamp designed to sit on a surface — nightstand, desk, console, or side table. Table lamps provide localized ambient or task light and contribute strongly to a room's atmosphere. Key specs for bedside use: color temperature (aim for 2700K), brightness range, and control method (touch dimming is preferred).",
  },
  {
    term: "Task Lighting",
    definition:
      "Focused illumination for a specific functional activity: reading, working at a desk, applying makeup, or cooking. Task lighting should be bright enough to prevent eye strain, positioned to avoid glare, and ideally adjustable in direction or brightness. A directional table lamp or desk lamp is the standard task lighting solution.",
  },
  {
    term: "Torchiere",
    definition:
      "A floor lamp with an upward-facing bowl or cup shade that directs light toward the ceiling, which then reflects back into the room as broad ambient illumination. Torchieres are effective room brighteners — a 3000-lumen torchiere can serve as a room's primary light source. The reflective ceiling effect creates soft, shadow-free light.",
  },
  {
    term: "Warm White (2700K)",
    definition:
      "The most common residential color temperature, matching the warm golden tone of traditional incandescent bulbs. Warm white is recommended for bedrooms, living rooms, and dining areas — it creates a relaxing, flattering atmosphere. The 2700K range supports melatonin production and is the right choice for evening and wind-down lighting.",
  },
  {
    term: "Wattage vs Lumens",
    definition:
      "Wattage measures energy consumption; lumens measure light output. These are often confused because they correlated reliably in the incandescent era (60W ≈ 800 lumens). With LEDs, the relationship breaks — a 9W LED can produce 800 lumens while a 60W incandescent was needed for the same output. Always use lumens to compare brightness, and wattage only to estimate operating cost.",
  },
  {
    term: "Wi-Fi vs Bluetooth (Lamp Connectivity)",
    definition:
      "Wi-Fi lamps connect to your home router and can be controlled from anywhere — including outside the home — and integrate with Alexa, Google Home, and automation platforms. Bluetooth lamps connect directly to your phone and require proximity (typically within 30 feet). Wi-Fi is better for smart home routines and remote access; Bluetooth is simpler to set up and does not depend on router stability.",
  },
];

export default function GlossaryPage() {
  const grouped: Record<string, typeof terms> = {};
  for (const term of terms) {
    const letter = term.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(term);
  }
  const letters = Object.keys(grouped).sort();

  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Reference
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Home Lighting Glossary
          </h1>
          <p className="text-[#9A9A8A] max-w-xl text-sm leading-relaxed">
            Essential terms for buying, comparing, and understanding home lighting.
          </p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            {letters.map((l) => (
              <a
                key={l}
                href={`#letter-${l}`}
                className="w-8 h-8 flex items-center justify-center text-xs font-bold border border-[#C9A84C]/20 text-[#9A9A8A] hover:border-[#C9A84C] hover:text-[#C9A84C] rounded transition-all"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            {letters.map((letter) => (
              <div key={letter} id={`letter-${letter}`}>
                <h2 className="font-playfair text-2xl font-bold text-[#C9A84C] mb-4 pb-2 border-b border-[#C9A84C]/20">
                  {letter}
                </h2>
                <div className="space-y-5">
                  {grouped[letter].map((item) => (
                    <div key={item.term}>
                      <h3 className="text-[#F5F0E8] font-semibold text-base mb-1.5">
                        {item.term}
                      </h3>
                      <p className="text-sm text-[#9A9A8A] leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
