"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint } from "lucide-react";
import { navLinks } from "@/lib/nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col md:w-60 lg:w-64 shrink-0 border-r border-ink-50 bg-white/60 h-screen sticky top-0 px-4 py-6">
      <Link href="/home" className="flex items-center gap-2 px-2 mb-8">
        <span className="h-9 w-9 rounded-full bg-sage-500 flex items-center justify-center text-white">
          <PawPrint size={18} strokeWidth={2} />
        </span>
        <span className="font-display text-lg font-semibold text-ink-800">PetCare</span>
      </Link>

      <nav className="flex flex-col gap-1" aria-label="Navegación principal">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl2 px-3.5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                active
                  ? "bg-sage-100 text-sage-700"
                  : "text-ink-600 hover:bg-mist hover:text-ink-800"
              }`}
            >
              <Icon size={19} strokeWidth={1.75} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl2 bg-sand p-4">
        <p className="text-sm font-medium text-ink-800">¿Necesitas ayuda?</p>
        <p className="text-xs text-ink-400 mt-1 leading-relaxed">
          Agenda una hora con tu veterinario de confianza en segundos.
        </p>
        <Link
          href="/agenda"
          className="mt-3 inline-block text-xs font-semibold text-sage-600 hover:text-sage-700"
        >
          Ir a Agenda →
        </Link>
      </div>
    </aside>
  );
}
