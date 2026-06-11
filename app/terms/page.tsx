import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use | DecoLumeHome",
  description: "Terms of use for decolumehome.com.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">Legal</p>
          <h1 className="font-playfair text-4xl font-bold text-[#F5F0E8] mb-2">Terms of Use</h1>
          <p className="text-[#9A9A8A] text-sm">Last updated: January 1, {site.year}</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4 max-w-3xl">
          {[
            {
              title: "Acceptance of Terms",
              body: `By accessing and using decolumehome.com ("the Site"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.`,
            },
            {
              title: "Site Content and Purpose",
              body: `DecoLumeHome provides informational and editorial content about home lighting products available on Amazon. The content is for general informational purposes only. We make no warranties about the accuracy, completeness, or suitability of the information for any purpose. Product availability, pricing, and specifications are subject to change without notice.`,
            },
            {
              title: "Affiliate Disclosure",
              body: `DecoLumeHome participates in the Amazon Services LLC Associates Program. Clicking product links on our site may direct you to Amazon.com, and we may earn a commission on qualifying purchases. This does not increase the price you pay as a consumer.`,
            },
            {
              title: "Intellectual Property",
              body: `All original content on this Site — including articles, copy, and design elements — is the property of DecoLumeHome and protected by applicable copyright law. You may not reproduce, distribute, or republish our content without prior written permission.`,
            },
            {
              title: "Third-Party Links",
              body: `Our Site contains links to third-party websites including Amazon.com. These links are provided for your convenience. DecoLumeHome does not endorse, control, or take responsibility for the content or practices of third-party sites.`,
            },
            {
              title: "Limitation of Liability",
              body: `DecoLumeHome is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or your reliance on information contained herein. All product purchases are made directly through Amazon — DecoLumeHome has no involvement in the sales transaction, fulfillment, or customer service for any products.`,
            },
            {
              title: "Disclaimer of Warranties",
              body: `The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses.`,
            },
            {
              title: "Modifications",
              body: `We reserve the right to modify these Terms at any time. Changes take effect immediately upon posting to the Site. Your continued use of the Site constitutes acceptance of the modified terms.`,
            },
            {
              title: "Governing Law",
              body: `These Terms shall be governed by the laws of the United States. Any disputes relating to these Terms shall be resolved in the courts of appropriate jurisdiction.`,
            },
            {
              title: "Contact",
              body: `Questions about these Terms may be directed to: contact@decolumehome.com`,
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
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
