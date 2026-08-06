import type { Metadata } from "next";
import { CalendarDays, Dna, PawPrint, Stethoscope } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import Card from "@/components/Card";
import Badge from "@/components/Badge";
import VaccineCard from "@/components/VaccineCard";
import AppointmentCard from "@/components/AppointmentCard";
import NewsCard from "@/components/NewsCard";
import { appointments, news, pets, getPetStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Resumen diario de tu mascota: vacunas próximas, citas agendadas y accesos rápidos.",
  openGraph: {
    title: "Inicio · PetCare",
    description: "Todo el bienestar de tu mascota en un solo dashboard.",
  },
};

export default function HomePage() {
  const pet = pets[0];
  const petStats = getPetStats(pet);
  const upcomingAppointment = appointments.find((a) => a.status !== "completada");
  const upcomingVaccine = pet.vaccines.find((v) => v.status !== "al-dia");

  return (
    <div className="flex flex-col gap-8">
      <HeroSection ownerName="María" petName={pet.name} petPhoto={pet.photo} />

      <section aria-labelledby="accesos-rapidos">
        <h2 id="accesos-rapidos" className="font-display text-lg font-semibold text-ink-800 mb-3">
          Accesos rápidos
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={PawPrint} title="Mi mascota" description="Perfil, historial y vacunas" href="/mypet" />
          <FeatureCard icon={CalendarDays} title="Agenda" description="Reserva o revisa tus citas" href="/agenda" tone="sky" />
          <FeatureCard icon={Stethoscope} title="Veterinarios" description="Clínicas cerca de ti" href="/veterinarians" />
          <FeatureCard icon={Dna} title="Razas" description="Explora el catálogo canino" href="/breeds" tone="sky" />
        </div>
      </section>

      <section aria-labelledby="estadisticas">
        <h2 id="estadisticas" className="font-display text-lg font-semibold text-ink-800 mb-3">
          Estadísticas de {pet.name}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {petStats.map((stat) => (
            <Card key={stat.label}>
              <p className="text-xs text-ink-400">{stat.label}</p>
              <p className="font-display text-xl font-semibold text-ink-800 mt-1">{stat.value}</p>
              <p className="text-xs text-sage-600 mt-1">{stat.delta}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        <section aria-labelledby="proximas-vacunas">
          <div className="flex items-center justify-between mb-3">
            <h2 id="proximas-vacunas" className="font-display text-lg font-semibold text-ink-800">
              Próximas vacunas
            </h2>
            {upcomingVaccine && <Badge tone="clay">Requiere atención</Badge>}
          </div>
          <div className="flex flex-col gap-3">
            {pet.vaccines.map((v) => (
              <VaccineCard key={v.id} vaccine={v} />
            ))}
          </div>
        </section>

        <section aria-labelledby="proximas-citas">
          <h2 id="proximas-citas" className="font-display text-lg font-semibold text-ink-800 mb-3">
            Próximas citas
          </h2>
          <div className="flex flex-col gap-3">
            {appointments
              .filter((a) => a.status !== "completada")
              .map((a) => (
                <AppointmentCard key={a.id} appointment={a} />
              ))}
            {upcomingAppointment === undefined && (
              <p className="text-sm text-ink-400">No tienes citas próximas agendadas.</p>
            )}
          </div>
        </section>
      </div>

      <section aria-labelledby="noticias">
        <h2 id="noticias" className="font-display text-lg font-semibold text-ink-800 mb-3">
          Noticias y consejos veterinarios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}