import { CalendarPlus, PawPrint, Search } from "lucide-react";

const steps = [
  {
    icon: PawPrint,
    title: "Crea el perfil de tu mascota",
    description:
      "Registra su raza, peso, vacunas y microchip para tener su historial siempre a mano.",
  },
  {
    icon: Search,
    title: "Encuentra veterinarios cercanos",
    description:
      "Explora clínicas cerca de ti, revisa horarios y elige la que más te acomode.",
  },
  {
    icon: CalendarPlus,
    title: "Agenda y recibe recordatorios",
    description:
      "Reserva horas en segundos y te avisamos antes de cada cita o vacuna pendiente.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-xl">
        <p className="text-sm font-medium text-sage-600">Cómo funciona</p>
        <h2 className="font-display text-3xl font-semibold text-ink-800 mt-2">
          Tres pasos y listo
        </h2>
        <p className="text-ink-400 mt-3 leading-relaxed">
          Sin planillas ni recordatorios en papel. PetCare organiza el cuidado de tu
          mascota desde el primer día.
        </p>
      </div>

      <ol className="grid sm:grid-cols-3 gap-6 mt-10">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-sage-500 text-white flex items-center justify-center font-display font-semibold text-sm shrink-0">
                {index + 1}
              </span>
              <span className="h-11 w-11 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center">
                <step.icon size={20} strokeWidth={1.75} />
              </span>
            </div>
            <h3 className="font-display font-semibold text-ink-800 mt-4">{step.title}</h3>
            <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
