import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  icon?: ReactNode;
};

const variants = {
  primary:
    "bg-sage-500 text-white hover:bg-sage-600 shadow-soft hover:shadow-lift",
  secondary:
    "bg-white text-ink-800 border border-ink-100 hover:border-sage-300 hover:bg-sage-50",
  ghost: "bg-transparent text-ink-600 hover:bg-mist",
};

const sizes = {
  sm: "text-sm px-3.5 py-2 gap-1.5",
  md: "text-[15px] px-5 py-2.5 gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
