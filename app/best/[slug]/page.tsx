import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProductsByCategory } from "@/data/products";
import { getArticleBySlug } from "@/data/articles";
import { categories } from "@/data/site";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import ArticleDiagram from "@/components/ArticleDiagram";
import { BookOpen, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function BestPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const products = getProductsByCategory(slug);

  if (!article || products.length === 0) {
    notFound();
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-[#1A1A1A] py-16 border-b border-[#C9A84C]/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Best Of
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight max-w-3xl">
            {article.title}
          </h1>
          <p className="text-[#9A9A8A] mt-4 max-w-2xl text-sm leading-relaxed">
            {article.description}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            {article.intro.map((para, i) => (
              <p key={i} className="text-[#9A9A8A] leading-relaxed text-sm">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-6">
            Quick Comparison
          </h2>
          <ComparisonTable products={products} />
        </div>
      </section>

      <div className="gold-divider" />

      {/* VISUAL DIAGRAM */}
      <section className="bg-[#0F0F0F] py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <ArticleDiagram slug={slug} />
        </div>
      </section>

      <div className="gold-divider" />

      {/* PRODUCT CARDS */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-[#F5F0E8] mb-10">
            Our Top Picks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 1} />
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* BUYING GUIDE */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={24} className="text-[#C9A84C]" />
            <h2 className="font-playfair text-3xl font-bold text-[#F5F0E8]">
              {article.buyingGuide.title}
            </h2>
          </div>
          <div className="space-y-6">
            {article.buyingGuide.points.map((point) => (
              <div
                key={point.heading}
                className="bg-[#1E1E1E] border border-[#C9A84C]/15 rounded-lg p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#F5F0E8] mb-2 text-sm">
                      {point.heading}
                    </h3>
                    <p className="text-sm text-[#9A9A8A] leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Authority links */}
          {article.buyingGuide.authorityLinks.length > 0 && (
            <div className="mt-6 pt-5 border-t border-[#C9A84C]/10">
              <p className="text-xs text-[#9A9A8A] leading-relaxed">
                For further context on lighting standards and efficiency:{" "}
                {article.buyingGuide.authorityLinks.map((link, i) => (
                  <span key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C9A84C] hover:underline inline-flex items-center gap-0.5"
                    >
                      {link.anchor}
                      <ExternalLink size={10} className="shrink-0" />
                    </a>
                    {i < article.buyingGuide.authorityLinks.length - 1 ? " and " : "."}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="gold-divider" />

      {/* FAQ */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold text-[#F5F0E8] mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={article.faq} />
        </div>
      </section>

      <div className="gold-divider" />

      {/* FINAL RECOMMENDATION */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-2xl font-bold text-[#F5F0E8] mb-4">
            Our Verdict
          </h2>
          <div className="bg-[#1A1A1A] border border-[#C9A84C]/25 rounded-lg p-6">
            <p className="text-sm text-[#9A9A8A] leading-relaxed">
              {article.finalRecommendation}
            </p>
          </div>
        </div>
      </section>

      {/* RELATED READING */}
      <section className="bg-[#1A1A1A] py-12 border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A84C] mb-4">
            Related Reading
          </p>
          <div className="flex flex-wrap gap-3">
            {article.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] border border-[#C9A84C]/30 rounded-full px-4 py-2 hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all"
              >
                {link.label} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE */}
      <section className="bg-[#0F0F0F] py-8 border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs text-[#4A4A4A] leading-relaxed">
            <strong className="text-[#9A9A8A]">Affiliate disclosure:</strong> DecoLumeHome earns a
            commission from Amazon when you purchase through our links, at no additional cost to
            you. Our picks are chosen independently — no brand pays for inclusion or placement.
          </p>
        </div>
      </section>
    </>
  );
}
