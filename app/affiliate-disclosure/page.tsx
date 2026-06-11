import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | DecoLumeHome",
  description: "DecoLumeHome affiliate disclosure — how our Amazon Associates relationship works.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">Legal</p>
          <h1 className="font-playfair text-4xl font-bold text-[#F5F0E8] mb-2">
            Affiliate Disclosure
          </h1>
          <p className="text-[#9A9A8A] text-sm">Last updated: January 1, {site.year}</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4 max-w-3xl space-y-8">
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-lg p-5">
            <p className="text-sm text-[#F5F0E8] leading-relaxed font-medium">
              DecoLumeHome is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
          </div>

          {[
            {
              title: "What This Means",
              body: `When you click on product links on DecoLumeHome and make a qualifying purchase on Amazon, we earn a small commission. This commission comes from Amazon at no additional cost to you — the price you pay is exactly the same whether you click our link or navigate to Amazon directly.`,
            },
            {
              title: "How We Use Affiliate Income",
              body: `Affiliate commissions fund the editorial work required to research, write, and maintain this site. This income allows us to continue providing independent, detailed product guidance for the maximalist lighting niche without charging users for access.`,
            },
            {
              title: "Our Editorial Independence",
              body: `Affiliate relationships do not influence our editorial recommendations. We evaluate products based on design merit, build quality, customer feedback, and value. We would recommend the same products regardless of commission rates. Products are not included or excluded based on their affiliate economics.`,
            },
            {
              title: "FTC Compliance",
              body: `In accordance with the Federal Trade Commission's guidelines on endorsements and testimonials, DecoLumeHome discloses its affiliate relationships clearly. This disclosure page, along with inline disclosures in our content and the site footer, fulfills our FTC disclosure obligations.`,
            },
            {
              title: "Amazon Trademarks",
              body: `Amazon, Amazon Associates, and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates. DecoLumeHome is an independent publisher and is not affiliated with, endorsed by, or sponsored by Amazon.`,
            },
            {
              title: "Questions",
              body: `If you have questions about our affiliate relationships or disclosure practices, please contact us at contact@decolumehome.com.`,
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-playfair text-xl font-bold text-[#F5F0E8] mb-3">
                {section.title}
              </h2>
              <p className="text-sm text-[#9A9A8A] leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
