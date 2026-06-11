"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollButton() {
  return (
    <button
      onClick={() =>
        document.getElementById("browse-categories")?.scrollIntoView({ behavior: "smooth" })
      }
      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A84C] text-[#0F0F0F] font-semibold rounded hover:bg-[#B87333] transition-colors"
    >
      Browse All Categories <ChevronDown size={16} />
    </button>
  );
}
