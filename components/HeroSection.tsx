import Image from "next/image";

function timeGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Buenos días";
  if (hour < 19) return "Buenas tardes";
  return "Buenas noches";
}

export default function HeroSection({
  ownerName,
  petName,
  petPhoto,
}: {
  ownerName: string;
  petName: string;
  petPhoto: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-xl3 bg-sage-500 px-6 py-8 sm:px-10 sm:py-10 text-white animate-fade-up">
      {/* Signature: a soft trail of paw prints, the brand's recurring motif */}
      <svg
        aria-hidden
        className="absolute -right-6 -top-8 h-56 w-56 text-white/10 sm:h-72 sm:w-72"
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

      <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full ring-4 ring-white/30 overflow-hidden">
          <Image src={petPhoto} alt={`Foto de ${petName}`} fill className="object-cover" sizes="96px" />
        </div>
        <div>
          <p className="text-sage-100/90 text-sm font-medium">
            {timeGreeting()}, {ownerName}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold mt-1">
            ¿Cómo está {petName} hoy?
          </h1>
          <p className="text-sage-50/80 text-sm mt-2 max-w-md leading-relaxed">
            Aquí tienes el resumen de salud, vacunas y próximas citas, todo en un
            solo lugar.
          </p>
        </div>
      </div>
    </section>
  );
}
