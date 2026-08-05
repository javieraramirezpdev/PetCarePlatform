import Link from "next/link";
import { Facebook, Instagram, Linkedin, PawPrint } from "lucide-react";
import { navLinks } from "@/lib/nav";

const socialLinks = [
  {
    href: "https://www.instagram.com/petcare",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/petcare",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/petcare",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-50 bg-white mb-16 md:mb-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-sage-500 flex items-center justify-center text-white">
              <PawPrint size={16} strokeWidth={2} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink-800">PetCare</p>
              <p className="text-xs text-ink-400">Cuidado veterinario, simple y cercano</p>
            </div>
          </div>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-400">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-sage-600 transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Síguenos en ${social.label}`}
                className="h-9 w-9 rounded-full flex items-center justify-center text-ink-600 hover:text-sage-600 hover:bg-sage-50 transition-colors duration-200"
              >
                <social.icon size={18} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-ink-400 text-center sm:text-left">
          © {new Date().getFullYear()} PetCare. Proyecto final · Curso de FrontEnd.
        </p>
      </div>
    </footer>
  );
}