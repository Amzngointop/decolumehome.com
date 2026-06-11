"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-[#F5F0E8] font-medium text-sm pr-4">
                {item.question}
              </span>
              {isOpen ? (
                <ChevronUp size={18} className="text-[#C9A84C] shrink-0" />
              ) : (
                <ChevronDown size={18} className="text-[#C9A84C] shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-4 border-t border-[#C9A84C]/10">
                <p className="text-sm text-[#9A9A8A] leading-relaxed pt-3">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
