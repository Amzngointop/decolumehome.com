import { Star } from "lucide-react";
import type { Product } from "@/data/products";

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#C9A84C]/30">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#1E1E1E] border-b border-[#C9A84C]/30">
            <th className="text-left px-4 py-3 text-[#C9A84C] font-semibold text-xs uppercase tracking-wider">
              #
            </th>
            <th className="text-left px-4 py-3 text-[#C9A84C] font-semibold text-xs uppercase tracking-wider">
              Product
            </th>
            <th className="text-left px-4 py-3 text-[#C9A84C] font-semibold text-xs uppercase tracking-wider">
              Best For
            </th>
            <th className="text-left px-4 py-3 text-[#C9A84C] font-semibold text-xs uppercase tracking-wider">
              Key Feature
            </th>
            <th className="text-left px-4 py-3 text-[#C9A84C] font-semibold text-xs uppercase tracking-wider">
              Control
            </th>
            <th className="text-left px-4 py-3 text-[#C9A84C] font-semibold text-xs uppercase tracking-wider">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`border-b border-[#C9A84C]/10 hover:bg-[#C9A84C]/5 transition-colors ${
                index % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#1E1E1E]"
              }`}
            >
              <td className="px-4 py-3 text-[#C9A84C] font-bold">
                {index + 1}
              </td>
              <td className="px-4 py-3 text-[#F5F0E8] font-medium">
                {product.name}
              </td>
              <td className="px-4 py-3 text-[#9A9A8A]">{product.bestFor}</td>
              <td className="px-4 py-3 text-[#9A9A8A]">{product.keyFeature}</td>
              <td className="px-4 py-3 text-[#9A9A8A]">{product.control}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        className={
                          i < Math.round(product.rating)
                            ? "fill-[#C9A84C] text-[#C9A84C]"
                            : "text-[#9A9A8A]"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#9A9A8A]">
                    {product.rating}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
