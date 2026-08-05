import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}) {
  return (
    <Tag
      className={`rounded-xl2 bg-white border border-ink-50 shadow-soft p-5 ${
        hover ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
