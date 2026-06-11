"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#1A1A1A] py-20 border-t border-b border-[#C9A84C]/20">
      <div className="max-w-[700px] mx-auto px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
          Stay in the Loop
        </p>
        <h2 className="font-playfair text-4xl font-bold text-[#F5F0E8] mb-4">
          Stay Updated on New Picks
        </h2>
        <p className="text-[#9A9A8A] text-sm leading-relaxed mb-8 max-w-md mx-auto">
          New product reviews, seasonal lighting guides, and category updates — delivered monthly.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 text-[#C9A84C] font-semibold">
            <CheckCircle size={20} />
            <span>Thanks — you&apos;re on the list.</span>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-[#0F0F0F] border border-[#C9A84C]/30 rounded px-4 py-3 text-[#F5F0E8] text-sm placeholder-[#4A4A4A] focus:outline-none focus:border-[#C9A84C] transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#C9A84C] text-[#0F0F0F] font-semibold text-sm rounded hover:bg-[#B8973B] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 text-xs text-[#9A9A8A]">
          {[
            "New product reviews monthly",
            "Seasonal lighting guides",
            "No spam — unsubscribe anytime",
          ].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="text-[#C9A84C]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
