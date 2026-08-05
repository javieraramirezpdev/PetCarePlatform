"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";
import { navLinks } from "@/lib/nav";

export default function BottomNavigation() {
  const pathname = usePathname();
  const left = navLinks.slice(0, 2);
  const right = navLinks.slice(2);

  return (
    <nav
      aria-label="Navegación principal"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-ink-50 bg-white/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]"
    >
      <div className="relative grid grid-cols-5 items-center px-2">
        {left.map(({ href, label, icon: Icon }) => (
          <NavItem key={href} href={href} label={label} Icon={Icon} active={!!pathname?.startsWith(href)} />
        ))}

        {/* Floating action button for the primary action: book an appointment */}
        <div className="flex justify-center">
          <Link
            href="/agenda"
            aria-label="Agendar nueva cita"
            className="-translate-y-5 h-14 w-14 rounded-full bg-sage-500 text-white flex items-center justify-center shadow-lift active:scale-95 transition-transform duration-150"
          >
            <Plus size={24} strokeWidth={2.25} />
          </Link>
        </div>

        {right.map(({ href, label, icon: Icon }) => (
          <NavItem key={href} href={href} label={label} Icon={Icon} active={!!pathname?.startsWith(href)} />
        ))}
      </div>
    </nav>
  );
}

function NavItem({
  href,
  label,
  Icon,
  active,
}: {
  href: string;
  label: string;
  Icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="flex flex-col items-center gap-1 py-2.5 min-w-[56px]"
    >
      <Icon
        size={22}
        strokeWidth={active ? 2.25 : 1.75}
        className={active ? "text-sage-600" : "text-ink-400"}
      />
      <span className={`text-[11px] font-medium ${active ? "text-sage-600" : "text-ink-400"}`}>
        {label}
      </span>
    </Link>
  );
}
