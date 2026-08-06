"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, PawPrint, X } from "lucide-react";
import Button from "./Button";

const links = [
  { href: "#features", label: "Funciones" },
  { href: "#como-funciona", label: "¿Cómo funciona?" },
  { href: "#veterinarios", label: "Veterinarios" },
];

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-ink-50 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="h-8 w-8 rounded-full bg-sage-500 flex items-center justify-center text-white">
            <PawPrint size={16} strokeWidth={2} />
          </span>
          <span className="font-display text-base font-semibold text-ink-800">PetCare</span>
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-600 hover:text-sage-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden md:flex items-center gap-2 sm:gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="primary" size="sm">
              Comenzar gratis
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="landing-mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto md:hidden h-10 w-10 rounded-full flex items-center justify-center text-ink-600 hover:bg-mist transition-colors duration-200"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      <div
        id="landing-mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-ink-50 bg-paper ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav aria-label="Navegación móvil" className="flex flex-col px-4 sm:px-6 py-4 gap-1">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-ink-600 hover:text-sage-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-ink-50">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="secondary" size="md" className="w-full">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Comenzar gratis
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}