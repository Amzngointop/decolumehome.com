import { CheckCircle, XCircle, Star } from "lucide-react";
import CTAButton from "./CTAButton";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  rank?: number;
}

export default function ProductCard({ product, rank }: ProductCardProps) {
  return (
    <div className="bg-[#1E1E1E] border border-[#C9A84C]/40 rounded-lg overflow-hidden flex flex-col">
      {/* Image area */}
      <div className="relative bg-[#f9f9f9] overflow-hidden rounded-t-lg">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "contain",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              padding: "16px",
              display: "block",
            }}
          />
        ) : (
          <div className="w-full flex items-center justify-center" style={{ height: "220px" }}>
            <span className="text-[#9A9A8A] text-xs text-center px-4">
              Image coming soon
            </span>
          </div>
        )}
        {rank && (
          <span className="absolute top-3 left-3 bg-[#C9A84C] text-[#0F0F0F] text-xs font-bold px-2 py-0.5 rounded">
            #{rank}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-playfair text-lg font-semibold text-[#F5F0E8] leading-snug">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={
                    i < Math.round(product.rating)
                      ? "fill-[#C9A84C] text-[#C9A84C]"
                      : "text-[#9A9A8A]"
                  }
                />
              ))}
            </div>
            <span className="text-xs text-[#9A9A8A]">{product.rating}/5</span>
          </div>
          <p className="text-xs text-[#C9A84C] mt-1">
            Best for: {product.bestFor}
          </p>
        </div>

        <p className="text-sm text-[#9A9A8A] leading-relaxed flex-1">
          {product.summary}
        </p>

        <div className="grid grid-cols-1 gap-3">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] mb-1.5 uppercase tracking-wider">
              Pros
            </p>
            <ul className="space-y-1">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={13} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-xs text-[#F5F0E8]">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#9A9A8A] mb-1.5 uppercase tracking-wider">
              Cons
            </p>
            <ul className="space-y-1">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle size={13} className="text-[#9A9A8A] mt-0.5 shrink-0" />
                  <span className="text-xs text-[#9A9A8A]">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <CTAButton href={product.affiliateUrl} className="mt-2 self-start" />
      </div>
    </div>
  );
}
