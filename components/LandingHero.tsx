import Link from "next/link";
import { ArrowRight, Bell, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import Button from "./Button";
import Card from "./Card";
import Badge from "./Badge";

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Signature: soft trail of paw prints, brand motif */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 text-sage-100 sm:h-96 sm:w-96"
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fade-up">
          <Badge tone="sage">Nuevo · Agenda y control de vacunas en un solo lugar</Badge>

          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink-800 mt-5 leading-[1.1]">
            El cuidado de tu mascota, simple y cercano
          </h1>

          <p className="text-ink-400 text-base sm:text-lg mt-5 max-w-lg leading-relaxed">
            PetCare reúne el perfil de salud de tu mascota, su calendario de vacunas y
            veterinarios de confianza cerca de ti, todo en una sola app.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link href="/login">
              <Button variant="primary" size="md" icon={<ArrowRight size={17} strokeWidth={2} />}>
                Comenzar gratis
              </Button>
            </Link>
            <a href="#features">
              <Button variant="secondary" size="md">
                Ver funciones
              </Button>
            </a>
          </div>

          <p className="text-xs text-ink-400 mt-4">
            Sin tarjeta de crédito · Configúralo en menos de 2 minutos
          </p>
        </div>

        {/* Mockup ilustrativo de la app, no es una captura real */}
        <div className="relative animate-fade-up">
          <Card className="relative max-w-sm mx-auto rounded-xl3 p-6 shadow-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-ink-400">Buenas tardes, María</p>
                <p className="font-display font-semibold text-ink-800 mt-0.5">¿Cómo está Nala hoy?</p>
              </div>
              <span className="h-11 w-11 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                <Sparkles size={18} strokeWidth={1.75} />
              </span>
            </div>

            <div className="mt-5 rounded-xl2 bg-sage-50 p-4 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-sage-500 flex items-center justify-center text-white shrink-0">
                <CalendarCheck size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-800">Próxima cita agendada</p>
                <p className="text-xs text-ink-400">Control anual · 12 sep, 10:30</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl2 bg-sky-50 p-4 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                <ShieldCheck size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-800">Vacunas al día</p>
                <p className="text-xs text-ink-400">Próximo refuerzo en 3 meses</p>
              </div>
            </div>

            <div className="mt-3 rounded-xl2 border border-ink-50 p-4 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-mist flex items-center justify-center text-ink-600 shrink-0">
                <Bell size={18} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-800">Recordatorio activo</p>
                <p className="text-xs text-ink-400">Desparasitación · mañana</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
