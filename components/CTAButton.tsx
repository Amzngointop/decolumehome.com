import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  href: string;
  label?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  href,
  label = "View on Amazon",
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[#C9A84C] text-[#0F0F0F] hover:bg-[#B87333]"
      : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <ExternalLink size={14} />
    </a>
  );
}
