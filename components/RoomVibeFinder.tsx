"use client";

import { useState } from "react";
import { ArrowRight, RefreshCw, ExternalLink } from "lucide-react";
import { products } from "@/data/products";

type LampType = "floor-lamp" | "table-lamp" | "night-light" | "projector" | "candle-warmer";
type Preference = string;

const lampTypes: { value: LampType; label: string }[] = [
  { value: "floor-lamp", label: "Floor Lamp" },
  { value: "table-lamp", label: "Table Lamp" },
  { value: "night-light", label: "Night Light" },
  { value: "projector", label: "Projector" },
  { value: "candle-warmer", label: "Candle Warmer" },
];

const preferences: Record<LampType, { value: string; label: string }[]> = {
  "floor-lamp": [
    { value: "smart-features", label: "Smart Features" },
    { value: "bright-functional", label: "Bright & Functional" },
    { value: "style-design", label: "Style & Design" },
  ],
  "table-lamp": [
    { value: "bedside-charging", label: "Bedside Charging" },
    { value: "cordless-portable", label: "Cordless / Portable" },
    { value: "minimalist-look", label: "Minimalist Look" },
  ],
  "night-light": [
    { value: "dusk-to-dawn", label: "Dusk-to-Dawn Auto" },
    { value: "multi-pack-value", label: "Multi-Pack Value" },
    { value: "dimmable", label: "Dimmable" },
  ],
  "projector": [
    { value: "galaxy-effects", label: "Galaxy Effects" },
    { value: "astronaut-design", label: "Astronaut Design" },
    { value: "white-noise-speaker", label: "White Noise + Speaker" },
  ],
  "candle-warmer": [
    { value: "timer-control", label: "Timer Control" },
    { value: "adjustable-height", label: "Adjustable Height" },
    { value: "gift-ready", label: "Gift-Ready" },
  ],
};

const recommendations: Record<LampType, Record<Preference, string[]>> = {
  "floor-lamp": {
    "smart-features": ["govee-rgbic-floor-lamp", "sunmory-32w-smart-rgb-torchiere"],
    "bright-functional": ["sunmory-32w-3000lm-torchiere", "ambimall-64-dimmable-floor-lamp-remote"],
    "style-design": ["ambimall-60-modern-floor-lamp-beige-gold", "floor-lamp-with-shelves-3-cct-led"],
  },
  "table-lamp": {
    "bedside-charging": ["fenmzee-bedside-touch-lamp-usb-c", "small-table-lamp-usb-c-pull-chain-ac"],
    "cordless-portable": ["kakanuo-cordless-rechargeable-table-lamp-2-pack", "kdg-2-pack-portable-led-desk-lamp-5000mah"],
    "minimalist-look": ["aooshine-small-minimalist-bedside-table-lamp", "fenmzee-small-bedside-lamp-wood-base"],
  },
  "night-light": {
    "dusk-to-dawn": ["l-lohas-led-night-light-2-pack-dusk-to-dawn", "l-lohas-dimmable-night-light-dawn-sensor-2-pack"],
    "multi-pack-value": ["sujeet-night-light-8-pack-warm-white", "doresshop-dimmable-night-light-dusk-to-dawn-2-pack"],
    "dimmable": ["doresshop-3-level-brightness-night-light-2-pack", "l-lohas-dimmable-night-light-dawn-sensor-2-pack"],
  },
  "projector": {
    "galaxy-effects": ["northern-galaxy-light-aurora-projector-33-effects", "rossetta-dual-lens-galaxy-projector-58-effects"],
    "astronaut-design": ["mooyran-astronaut-galaxy-projector-special-edition", "jiwyjot-astronaut-galaxy-projector-bedroom"],
    "white-noise-speaker": ["northern-galaxy-light-aurora-projector-33-effects", "rossetta-dual-lens-galaxy-projector-58-effects"],
  },
  "candle-warmer": {
    "timer-control": ["innqoo-dimmable-candle-warmer-lamp-timer", "godonlif-candle-warmer-lamp-cycle-timer"],
    "adjustable-height": ["seenlast-vintage-candle-warmer-adjustable-height", "marycele-candle-warmer-timer-dimmer-2-bulbs"],
    "gift-ready": ["candle-warmer-lamp-timer-dimmer-gift-box", "candle-warmer-lamp-3-bulbs-gift-box-ribbon"],
  },
};

export default function LampFinder() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<LampType | null>(null);
  const [selectedPref, setSelectedPref] = useState<Preference | null>(null);

  const resultSlugs =
    selectedType && selectedPref
      ? recommendations[selectedType][selectedPref] ?? []
      : [];
  const resultProducts = resultSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  const reset = () => {
    setStep(1);
    setSelectedType(null);
    setSelectedPref(null);
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#0F0F0F] px-6 py-5 border-b border-[#C9A84C]/20">
        <h3 className="font-playfair text-xl font-bold text-[#F5F0E8]">
          Find Your Perfect Lamp
        </h3>
        <p className="text-sm text-[#9A9A8A] mt-1">
          Answer two quick questions to get matched picks.
        </p>
        <div className="flex items-center gap-2 mt-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step >= s
                    ? "bg-[#C9A84C] text-[#0F0F0F]"
                    : "bg-[#1E1E1E] border border-[#9A9A8A]/30 text-[#9A9A8A]"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-8 h-px transition-colors ${
                    step > s ? "bg-[#C9A84C]" : "bg-[#9A9A8A]/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Step 1 */}
        {step === 1 && (
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold mb-4 uppercase tracking-wider">
              Step 1 — What are you looking for?
            </p>
            <div className="grid grid-cols-2 gap-3">
              {lampTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => {
                    setSelectedType(type.value);
                    setStep(2);
                  }}
                  className="px-4 py-3 bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg text-sm text-[#F5F0E8] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all text-left flex items-center justify-between group"
                >
                  {type.label}
                  <ArrowRight
                    size={14}
                    className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && selectedType && (
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold mb-1 uppercase tracking-wider">
              Step 2 — What matters most to you?
            </p>
            <p className="text-xs text-[#9A9A8A] mb-4">
              Category:{" "}
              <span className="text-[#F5F0E8]">
                {lampTypes.find((t) => t.value === selectedType)?.label}
              </span>
            </p>
            <div className="grid grid-cols-1 gap-3">
              {preferences[selectedType].map((pref) => (
                <button
                  key={pref.value}
                  onClick={() => {
                    setSelectedPref(pref.value);
                    setStep(3);
                  }}
                  className="px-4 py-3 bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg text-sm text-[#F5F0E8] hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all text-left flex items-center justify-between group"
                >
                  {pref.label}
                  <ArrowRight
                    size={14}
                    className="text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 text-xs text-[#9A9A8A] hover:text-[#C9A84C] transition-colors flex items-center gap-1"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3 — Results */}
        {step === 3 && (
          <div>
            <p className="text-[#C9A84C] text-sm font-semibold mb-1 uppercase tracking-wider">
              Your Picks
            </p>
            <p className="text-xs text-[#9A9A8A] mb-5">
              {lampTypes.find((t) => t.value === selectedType)?.label} ·{" "}
              {preferences[selectedType!]?.find((p) => p.value === selectedPref)?.label}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resultProducts.map((product) =>
                product ? (
                  <div
                    key={product.id}
                    className="bg-[#0F0F0F] border border-[#C9A84C]/20 rounded-lg p-4"
                  >
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full aspect-video object-cover rounded mb-3"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-[#1E1E1E] rounded mb-3 flex items-center justify-center">
                        <span className="text-xs text-[#9A9A8A]">Image coming soon</span>
                      </div>
                    )}
                    <p className="font-playfair text-sm font-semibold text-[#F5F0E8] leading-snug mb-1">
                      {product.name}
                    </p>
                    <p className="text-xs text-[#C9A84C] mb-3">
                      {product.bestFor}
                    </p>
                    <a
                      href={product.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F0F0F] bg-[#C9A84C] hover:bg-[#B87333] px-3 py-1.5 rounded transition-colors"
                    >
                      View on Amazon
                      <ExternalLink size={11} />
                    </a>
                  </div>
                ) : null
              )}
            </div>
            <button
              onClick={reset}
              className="mt-5 text-xs text-[#9A9A8A] hover:text-[#C9A84C] transition-colors flex items-center gap-1.5"
            >
              <RefreshCw size={12} />
              Start over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
