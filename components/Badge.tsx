import { ReactNode } from "react";

type Tone = "sage" | "sky" | "clay" | "neutral";

const tones: Record<Tone, string> = {
  sage: "bg-sage-100 text-sage-700",
  sky: "bg-sky-100 text-sky-600",
  clay: "bg-clay/15 text-clay",
  neutral: "bg-mist text-ink-600",
};

export default function Badge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
