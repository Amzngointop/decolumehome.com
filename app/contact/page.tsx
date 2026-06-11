import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact DecoLumeHome",
  description:
    "Get in touch with the DecoLumeHome team for editorial inquiries, corrections, or partnership questions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Get in Touch
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Contact Us
          </h1>
          <p className="text-[#9A9A8A] max-w-xl text-sm leading-relaxed">
            Questions, corrections, or editorial inquiries — we read every message.
          </p>
        </div>
      </section>

      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#F5F0E8] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@decolumehome.com"
                      className="text-sm text-[#C9A84C] hover:underline"
                    >
                      contact@decolumehome.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#F5F0E8] mb-1">
                      Response Time
                    </p>
                    <p className="text-sm text-[#9A9A8A]">
                      We aim to respond within 2–3 business days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <MessageSquare size={20} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#F5F0E8] mb-1">
                      What to Include
                    </p>
                    <p className="text-sm text-[#9A9A8A] leading-relaxed">
                      For editorial corrections, please include the page URL and the specific information you believe needs updating. For product suggestions, include the Amazon listing URL.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-[#9A9A8A] leading-relaxed pt-2">
                <p className="font-semibold text-[#F5F0E8] mb-2">We do not accept:</p>
                <ul className="space-y-1">
                  <li>— Paid product placements or sponsored content</li>
                  <li>— Guest posts or link exchange requests</li>
                  <li>— Press releases without editorial relevance</li>
                </ul>
              </div>
            </div>

            {/* Form (Client Component) */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
