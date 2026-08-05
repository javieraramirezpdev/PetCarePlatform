import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { VetClinic } from "@/lib/types";
import Card from "./Card";

function bbox(lat: number, lon: number, delta = 0.02) {
  return `${lon - delta},${lat - delta},${lon + delta},${lat + delta}`;
}

export default function VetMap({
  center,
  clinics,
}: {
  center: { lat: number; lon: number };
  clinics: VetClinic[];
}) {
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox(
    center.lat,
    center.lon
  )}&layer=mapnik&marker=${center.lat},${center.lon}`;

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-0 overflow-hidden">
        <iframe
          title="Mapa de veterinarias cercanas"
          src={embedSrc}
          className="h-64 w-full sm:h-80"
          loading="lazy"
        />
      </Card>

      {clinics.length === 0 ? (
        <p className="text-sm text-ink-400 text-center py-6">
          No encontramos veterinarias registradas en OpenStreetMap cerca de esa dirección.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {clinics.map((clinic) => (
            <li key={clinic.id}>
              <Card className="flex items-center gap-4">
                <span className="h-10 w-10 shrink-0 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center">
                  <MapPin size={17} strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-ink-800 text-sm truncate">{clinic.name}</p>
                  <p className="text-xs text-ink-400 mt-0.5 truncate">{clinic.address}</p>
                  {typeof clinic.distanceKm === "number" && (
                    <p className="text-xs text-sage-600 mt-1 flex items-center gap-1">
                      <Navigation size={12} /> {clinic.distanceKm} km aprox.
                    </p>
                  )}
                </div>
                <a
                  href={`https://www.openstreetmap.org/?mlat=${clinic.lat}&mlon=${clinic.lon}#map=18/${clinic.lat}/${clinic.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ubicación de ${clinic.name} en el mapa`}
                  className="shrink-0 h-9 w-9 rounded-full bg-mist flex items-center justify-center text-ink-600 hover:bg-sage-100 hover:text-sage-700 transition-colors duration-200"
                >
                  <ExternalLink size={15} strokeWidth={1.75} />
                </a>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
