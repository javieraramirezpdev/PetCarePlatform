import Link from "next/link";
import { ArrowRight, PawPrint } from "lucide-react";
import Button from "./Button";

export default function LandingCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="relative overflow-hidden rounded-xl3 bg-sage-500 px-6 py-12 sm:px-14 sm:py-16 text-center text-white">
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-10 -bottom-12 h-56 w-56 text-white/10"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <g>
            <ellipse cx="100" cy="120" rx="26" ry="22" />
            <ellipse cx="72" cy="90" rx="12" ry="15" />
            <ellipse cx="128" cy="90" rx="12" ry="15" />
            <ellipse cx="85" cy="68" rx="10" ry="13" />
            <ellipse cx="115" cy="68" rx="10" ry="13" />
          </g>
        </svg>

        <span className="relative inline-flex h-12 w-12 rounded-full bg-white/15 items-center justify-center">
          <PawPrint size={22} strokeWidth={1.75} />
        </span>

        <h2 className="relative font-display text-2xl sm:text-3xl font-semibold mt-5">
          Empieza a cuidar mejor a tu mascota hoy
        </h2>
        <p className="relative text-sage-50/90 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
          Únete gratis a PetCare y ten el control de su salud, vacunas y citas en un
          solo lugar.
        </p>

        <div className="relative mt-7">
          <Link href="/login">
            <Button
              variant="secondary"
              size="md"
              icon={<ArrowRight size={17} strokeWidth={2} />}
              className="bg-white text-sage-700 border-transparent hover:bg-sage-50"
            >
              Comenzar gratis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
