"use client";

import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function SearchBar({ label = "Buscar", className = "", ...props }: SearchBarProps) {
  return (
    <label className={`relative flex items-center ${className}`}>
      <span className="sr-only">{label}</span>
      <Search
        aria-hidden
        size={17}
        className="absolute left-3.5 text-ink-400"
      />
      <input
        type="search"
        className="w-full rounded-full border border-ink-100 bg-mist/70 py-2.5 pl-10 pr-4 text-sm text-ink-800 placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-sage-300 focus:bg-white"
        {...props}
      />
    </label>
  );
}
