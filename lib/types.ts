export type Vaccine = {
  id: string;
  name: string;
  dateApplied: string;
  nextDue: string;
  status: "al-dia" | "proxima" | "atrasada";
};

export type MedicalEntry = {
  id: string;
  date: string;
  title: string;
  notes: string;
  vet: string;
};

export type Pet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  sex: "Macho" | "Hembra";
  birthDate: string;
  weightKg: number;
  photo: string;
  microchip: string;
  vaccines: Vaccine[];
  history: MedicalEntry[];
};

export type Appointment = {
  id: string;
  date: string;
  time: string;
  vetName: string;
  clinic: string;
  reason: string;
  status: "confirmada" | "pendiente" | "completada" | "cancelada";
};

export type NewsCategory = "Vacunas" | "Nutrición" | "Adopción" | "Salud" | "Consejos";

export type NewsItem = {
  id: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: string;
  readMinutes: number;
};

export type DogBreed = {
  id: string;
  name: string;
  image: string;
  lifeSpan: string;
  temperament: string;
  group: string;
  heightCm: string;
  weightKg: string;
  isCustom?: boolean;
  description?: string;
  energyLevel?: string;
  adaptability?: string;
  care?: string[];
};

export type VetClinic = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  distanceKm?: number;
};
