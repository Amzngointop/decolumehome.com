import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | DecoLumeHome",
  description: "DecoLumeHome privacy policy — how we collect and use information on decolumehome.com.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">Legal</p>
          <h1 className="font-playfair text-4xl font-bold text-[#F5F0E8] mb-2">Privacy Policy</h1>
          <p className="text-[#9A9A8A] text-sm">Last updated: January 1, {site.year}</p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4 max-w-3xl prose-custom">
          {[
            {
              title: "Overview",
              body: `DecoLumeHome ("we," "us," "our") operates the website decolumehome.com. This Privacy Policy explains how we collect, use, and protect information when you visit our site. By using our site, you agree to the practices described here.`,
            },
            {
              title: "Information We Collect",
              body: `We may collect non-personally-identifiable information automatically, including browser type, operating system, pages visited, referring URLs, and approximate geographic location. We use analytics tools (such as Google Analytics) to understand aggregate traffic patterns. We do not collect names, email addresses, or payment information unless you voluntarily submit them via our contact form.`,
            },
            {
              title: "Cookies and Tracking Technologies",
              body: `Our website may use cookies — small text files stored on your device — to improve functionality and track usage. Third-party services (including Google Analytics and Amazon Associates) may also place cookies when you visit our site. You can control cookies through your browser settings. Disabling cookies may affect site functionality.`,
            },
            {
              title: "Amazon Associates and Affiliate Links",
              body: `DecoLumeHome participates in the Amazon Services LLC Associates Program. When you click on affiliate links on our site and make a purchase on Amazon, we may earn a commission at no additional cost to you. Amazon may collect information through cookies placed on your browser. Please refer to Amazon's Privacy Policy for details on their data practices.`,
            },
            {
              title: "How We Use Information",
              body: `We use collected information to analyze site performance, improve content quality, and understand our audience. We do not sell, rent, or share personally identifiable information with third parties for their marketing purposes.`,
            },
            {
              title: "Third-Party Links",
              body: `Our site contains links to Amazon and other third-party websites. We are not responsible for the privacy practices of third-party sites. We encourage you to review the privacy policies of any external sites you visit.`,
            },
            {
              title: "Children's Privacy",
              body: `DecoLumeHome is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us.`,
            },
            {
              title: "Changes to This Policy",
              body: `We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date. Continued use of our site after changes constitutes acceptance of the revised policy.`,
            },
            {
              title: "Contact",
              body: `Questions about this Privacy Policy may be directed to: contact@decolumehome.com`,
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
