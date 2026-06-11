"use client";

export default function ContactForm() {
  return (
    <div className="bg-[#1E1E1E] border border-[#C9A84C]/20 rounded-lg p-6">
      <h2 className="font-playfair text-xl font-bold text-[#F5F0E8] mb-5">
        Send a Message
      </h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold text-[#9A9A8A] uppercase tracking-wider mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full bg-[#0F0F0F] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#9A9A8A]/50 focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-[#9A9A8A] uppercase tracking-wider mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full bg-[#0F0F0F] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#9A9A8A]/50 focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-semibold text-[#9A9A8A] uppercase tracking-wider mb-1.5"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="What is this about?"
            className="w-full bg-[#0F0F0F] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#9A9A8A]/50 focus:outline-none focus:border-[#C9A84C] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-[#9A9A8A] uppercase tracking-wider mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="w-full bg-[#0F0F0F] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#9A9A8A]/50 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
          />
        </div>
        <p className="text-xs text-[#9A9A8A]">
          This form is for display purposes. Please email us directly at{" "}
          <a
            href="mailto:contact@decolumehome.com"
            className="text-[#C9A84C] hover:underline"
          >
            contact@decolumehome.com
          </a>
          .
        </p>
        <button
          type="submit"
          className="w-full py-3 bg-[#C9A84C] text-[#0F0F0F] font-semibold rounded hover:bg-[#B87333] transition-colors text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
