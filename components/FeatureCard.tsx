import Link from "next/link";
import { LucideIcon } from "lucide-react";
import Card from "./Card";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  tone = "sage",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tone?: "sage" | "sky";
}) {
  const iconBg = tone === "sage" ? "bg-sage-100 text-sage-600" : "bg-sky-100 text-sky-600";

  return (
    <Link href={href} className="block focus-visible:outline-none group">
      <Card hover className="h-full flex flex-col gap-3">
        <div className={`h-11 w-11 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="font-display font-semibold text-ink-800">{title}</h3>
          <p className="text-sm text-ink-400 mt-1 leading-relaxed">{description}</p>
        </div>
        <span className="mt-auto text-sm font-medium text-sage-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
          Ver más →
        </span>
      </Card>
    </Link>
  );
}
