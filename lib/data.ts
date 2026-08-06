import { Appointment, NewsItem, Pet } from "./types";

export const pets: Pet[] = [
  {
    id: "nala",
    name: "Nala",
    species: "Perro",
    breed: "Golden Retriever",
    sex: "Hembra",
    birthDate: "2022-03-14",
    weightKg: 24.5,
    photo:
      "https://images.squarespace-cdn.com/content/v1/634f00c1a45a271ef714bbce/1732381652259-BQQ2DPHPOAEE2MWDOK81/Beau.jpeg",
    microchip: "982-000123456789",
    vaccines: [
      { id: "v1", name: "Rabia", dateApplied: "2025-09-02", nextDue: "2026-09-02", status: "al-dia" },
      { id: "v2", name: "Séxtuple (DHPPi + L)", dateApplied: "2025-11-10", nextDue: "2026-08-15", status: "proxima" },
      { id: "v3", name: "Bordetella", dateApplied: "2025-02-20", nextDue: "2026-02-20", status: "atrasada" },
    ],
    history: [
      { id: "h1", date: "2026-06-18", title: "Control anual", notes: "Peso estable, dentadura sana. Se recomienda continuar con dieta actual.", vet: "Dra. Camila Reyes" },
      { id: "h2", date: "2026-03-02", title: "Desparasitación", notes: "Aplicación de antiparasitario interno y externo. Sin reacciones adversas.", vet: "Dr. Ignacio Paredes" },
      { id: "h3", date: "2025-11-10", title: "Refuerzo vacunal", notes: "Aplicación de vacuna séxtuple. Próximo refuerzo en 12 meses.", vet: "Dra. Camila Reyes" },
    ],
  },
  {
    id: "simba",
    name: "Simba",
    species: "Gato",
    breed: "Común Europeo",
    sex: "Macho",
    birthDate: "2023-07-01",
    weightKg: 4.2,
    photo:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
    microchip: "982-000987654321",
    vaccines: [],
    history: [],
  },
];

export function getPetById(id: string): Pet | undefined {
  return pets.find((p) => p.id === id);
}

export function getPetStats(pet: Pet) {
  return [
    { label: "Peso actual", value: `${pet.weightKg} kg`, delta: "+0.3 kg este mes" },
    { label: "Próxima vacuna", value: "15 ago", delta: "Séxtuple" },
    { label: "Próxima cita", value: "12 ago", delta: "10:30 hrs" },
    { label: "Controles al día", value: "2 / 3", delta: "1 pendiente" },
  ];
}

export const appointments: Appointment[] = [
  {
    id: "a1",
    date: "2026-08-12",
    time: "10:30",
    vetName: "Dra. Camila Reyes",
    clinic: "Clínica PetCare Quilicura",
    reason: "Refuerzo vacuna séxtuple",
    status: "confirmada",
  },
  {
    id: "a2",
    date: "2026-08-28",
    time: "16:00",
    vetName: "Dr. Ignacio Paredes",
    clinic: "Clínica PetCare Quilicura",
    reason: "Control de peso",
    status: "pendiente",
  },
  {
    id: "a3",
    date: "2026-06-18",
    time: "09:00",
    vetName: "Dra. Camila Reyes",
    clinic: "Clínica PetCare Quilicura",
    reason: "Control anual",
    status: "completada",
  },
];

export const news: NewsItem[] = [
  {
    id: "n1",
    category: "Vacunas",
    title: "Calendario de vacunación 2026: qué dosis no puedes saltarte",
    excerpt: "Repasamos las vacunas esenciales para perros y gatos, y por qué mantener las fechas al día evita enfermedades graves.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1200&auto=format&fit=crop",
    readMinutes: 4,
  },
  {
    id: "n2",
    category: "Nutrición",
    title: "Cómo elegir el alimento correcto según la edad de tu mascota",
    excerpt: "Cachorros, adultos y senior tienen necesidades distintas. Aquí una guía simple para leer etiquetas y raciones.",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=1200&auto=format&fit=crop",
    readMinutes: 6,
  },
  {
    id: "n3",
    category: "Adopción",
    title: "Adoptar en Chile: la guía paso a paso para sumar un nuevo integrante",
    excerpt: "Desde la evaluación inicial hasta la adaptación en casa: todo lo que debes preparar antes de adoptar.",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1200&auto=format&fit=crop",
    readMinutes: 5,
  },
  {
    id: "n4",
    category: "Salud",
    title: "Señales de alerta que tu mascota podría estar enferma",
    excerpt: "Un veterinario explica los síntomas que nunca debes ignorar y cuándo pedir hora con urgencia.",
    image: "https://mascoterias.com/blog/wp-content/uploads/2022/11/unnamed.jpg",
    readMinutes: 3,
  },
  {
    id: "n5",
    category: "Consejos",
    title: "Enriquecimiento ambiental: juegos simples para el bienestar diario",
    excerpt: "Pequeños cambios en casa que reducen el estrés y mejoran la salud mental de tu mascota.",
    image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1200&auto=format&fit=crop",
    readMinutes: 4,
  },
];