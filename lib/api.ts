import { DogBreed, VetClinic } from "./types";

const DOG_CEO_BASE = "https://dog.ceo/api";
const FALLBACK_IMAGE = "https://images.dog.ceo/breeds/mixed/dog.jpg";

// Manually curated breed, blended into the API results (per project brief).
export const mestizoBreed: DogBreed = {
  id: "custom-mestizo",
  name: "Mestizo",
  image:
    "https://www.lanacion.com.ar/resizer/v2/perro-mestizo-que-es-caracteristicas-y-ventajas-FHQ5SODPSZF55IJJVMBUD4ZSYI.png?auth=45e766a279e2e932f0bde71da1f62874e1d4386af08716aa710500bbae064692&width=768&quality=70&smart=false",
  lifeSpan: "10 - 16 años",
  temperament: "Leal, resiliente, cariñoso, alerta",
  group: "Sin grupo definido",
  heightCm: "Variable (25 - 65 cm)",
  weightKg: "Variable (5 - 35 kg)",
  isCustom: true,
  description:
    "El mestizo, o 'quiltro', combina rasgos de distintas razas y es el perfil más común en hogares chilenos. Su genética mixta suele traducirse en una salud robusta y una personalidad única en cada ejemplar.",
  energyLevel: "Media - Alta",
  adaptability: "Muy alta: se ajusta bien a departamentos y casas con patio",
  care: [
    "Chequeos veterinarios anuales, igual que cualquier raza",
    "Rutina de ejercicio diaria acorde a su energía individual",
    "Socialización temprana para reforzar su carácter equilibrado",
    "Cepillado según el tipo de pelaje heredado",
  ],
};

/**
 * The Dog CEO API only returns breed names and images — no temperament,
 * lifespan, height or weight. We curate that descriptive data ourselves
 * (allowed by the project brief as "datos simulados cuando sea necesario")
 * and merge it with the live photo fetched from the API.
 */
type CuratedBreed = {
  path: string; // Dog CEO breed/sub-breed path, e.g. "retriever/golden"
  name: string;
  group: string;
  lifeSpan: string;
  temperament: string;
  heightCm: string;
  weightKg: string;
  imageOverride?: string;
};

const curatedBreeds: CuratedBreed[] = [
  { path: "labrador", name: "Labrador Retriever", group: "Perro de cobro", lifeSpan: "10 - 12 años", temperament: "Amigable, activo, extrovertido", heightCm: "54 - 62 cm", weightKg: "25 - 36 kg" },
  { path: "retriever/golden", name: "Golden Retriever", group: "Perro de cobro", lifeSpan: "10 - 12 años", temperament: "Cariñoso, inteligente, confiable", heightCm: "51 - 61 cm", weightKg: "25 - 34 kg" },
  { path: "germanshepherd", name: "Pastor Alemán", group: "Perro de pastoreo", lifeSpan: "9 - 13 años", temperament: "Leal, valiente, alerta", heightCm: "55 - 65 cm", weightKg: "22 - 40 kg", imageOverride: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-998972474-641ad5ab0f8a2.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" },
  { path: "poodle/standard", name: "Poodle Estándar", group: "Perro de compañia", lifeSpan: "12 - 15 años", temperament: "Inteligente, activo, elegante", heightCm: "38 - 45 cm", weightKg: "20 - 32 kg" },
  { path: "bulldog/french", name: "Bulldog Francés", group: "Perro de compañia", lifeSpan: "10 - 12 años", temperament: "Juguetón, adaptable, cariñoso", heightCm: "28 - 33 cm", weightKg: "8 - 14 kg", imageOverride: "https://www.rover.com/blog/wp-content/uploads/iStock-637117392.jpg" },
  { path: "husky", name: "Husky Siberiano", group: "Perro de trabajo", lifeSpan: "12 - 14 años", temperament: "Enérgico, sociable, independiente", heightCm: "50 - 60 cm", weightKg: "16 - 27 kg" },
  { path: "beagle", name: "Beagle", group: "Sabueso", lifeSpan: "10 - 14 años", temperament: "Curioso, amigable, enérgico", heightCm: "33 - 41 cm", weightKg: "9 - 11 kg" },
  { path: "boxer", name: "Boxer", group: "Perro de trabajo", lifeSpan: "10 - 12 años", temperament: "Enérgico, leal, juguetón", heightCm: "53 - 63 cm", weightKg: "25 - 32 kg" },
  { path: "chihuahua", name: "Chihuahua", group: "Perro de compañía", lifeSpan: "14 - 16 años", temperament: "Alerta, valiente, apegado", heightCm: "15 - 23 cm", weightKg: "1.5 - 3 kg" },
  { path: "dachshund", name: "Dachshund", group: "Sabueso", lifeSpan: "12 - 16 años", temperament: "Curioso, valiente, terco", heightCm: "13 - 23 cm", weightKg: "7 - 15 kg" },
  { path: "rottweiler", name: "Rottweiler", group: "Perro de trabajo", lifeSpan: "9 - 10 años", temperament: "Seguro, valiente, tranquilo", heightCm: "56 - 69 cm", weightKg: "35 - 60 kg" },
  { path: "pug", name: "Pug", group: "Perro de compañía", lifeSpan: "12 - 15 años", temperament: "Encantador, sociable, tranquilo", heightCm: "25 - 33 cm", weightKg: "6 - 10 kg", imageOverride: "https://kamanpet.cl/wp-content/uploads/2024/04/raza-pug-o-carlino.webp" },
  { path: "corgi", name: "Corgi", group: "Perro de pastoreo", lifeSpan: "10 - 15 años", temperament: "Afectuoso, inteligente, ágil", heightCm: "26 - 32 cm", weightKg: "11 - 17 kg", imageOverride: "https://phantom-elmundo.unidadeditorial.es/226f7ab28afe4f29456a57ed7d451385/assets/multimedia/imagenes/2021/01/18/16109841792608.jpg" },
  { path: "shiba", name: "Shiba Inu", group: "Perro de compañía", lifeSpan: "13 - 16 años", temperament: "Independiente, alerta, ágil", heightCm: "35 - 43 cm", weightKg: "8 - 11 kg" },
  { path: "terrier/yorkshire", name: "Yorkshire Terrier", group: "Terrier", lifeSpan: "13 - 16 años", temperament: "Valiente, enérgico, apegado", heightCm: "17 - 20 cm", weightKg: "2 - 3.5 kg", imageOverride: "https://www.rover.com/blog/wp-content/uploads/iStock-637117392.jpg" },
  { path: "mastiff/english", name: "Mastín Inglés", group: "Perro de trabajo", lifeSpan: "6 - 10 años", temperament: "Calmado, protector, dócil", heightCm: "70 - 91 cm", weightKg: "54 - 100 kg"},
];

async function getBreedImage(path: string): Promise<string> {
  try {
    const res = await fetch(`${DOG_CEO_BASE}/breed/${path}/images/random`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return typeof data.message === "string" ? data.message : FALLBACK_IMAGE;
  } catch {
    // A single missing photo shouldn't break the whole catalog.
    return FALLBACK_IMAGE;
  }
}

/**
 * Verifies the Dog CEO API is reachable, then fetches one live photo per
 * curated breed and appends the manually curated "Mestizo" entry so it
 * renders as one more breed in the grid.
 */
export async function getBreeds(): Promise<DogBreed[]> {
  const healthCheck = await fetch(`${DOG_CEO_BASE}/breeds/list/all`, {
    next: { revalidate: 3600 },
  });

  if (!healthCheck.ok) {
    throw new Error(`Dog CEO API respondió con estado ${healthCheck.status}`);
  }

  const breeds: DogBreed[] = await Promise.all(
    curatedBreeds.map(async (breed) => ({
      id: breed.path,
      name: breed.name,
      image: breed.imageOverride ?? (await getBreedImage(breed.path)),
      lifeSpan: breed.lifeSpan,
      temperament: breed.temperament,
      group: breed.group,
      heightCm: breed.heightCm,
      weightKg: breed.weightKg,
    }))
  );

  return [...breeds, mestizoBreed];
}

/**
 * Resolves a human-readable location into coordinates via Nominatim,
 * then queries Overpass for nearby veterinary clinics.
 */
export async function getNearbyVets(query: string): Promise<VetClinic[]> {
  const geoRes = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
      query
    )}`,
    { headers: { "User-Agent": "petcare-app-demo" } }
  );

  if (!geoRes.ok) {
    throw new Error("No se pudo geolocalizar la dirección ingresada.");
  }

  const geoData = await geoRes.json();
  if (!geoData?.length) {
    throw new Error("No encontramos esa ubicación. Intenta con otra dirección.");
  }

  const lat = parseFloat(geoData[0].lat);
  const lon = parseFloat(geoData[0].lon);

  const overpassQuery = `
    [out:json][timeout:25];
    (
      node["amenity"="veterinary"](around:5000,${lat},${lon});
      way["amenity"="veterinary"](around:5000,${lat},${lon});
    );
    out center 12;
  `;

  const overpassRes = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: overpassQuery,
  });

  if (!overpassRes.ok) {
    throw new Error("No se pudo consultar veterinarias cercanas.");
  }

  const overpassData = await overpassRes.json();

  const clinics: VetClinic[] = (overpassData.elements ?? []).map((el: any) => {
    const clat = el.lat ?? el.center?.lat;
    const clon = el.lon ?? el.center?.lon;
    return {
      id: String(el.id),
      name: el.tags?.name ?? "Veterinaria sin nombre registrado",
      address:
        [el.tags?.["addr:street"], el.tags?.["addr:housenumber"]]
          .filter(Boolean)
          .join(" ") || "Dirección no disponible en OpenStreetMap",
      lat: clat,
      lon: clon,
      distanceKm: haversineKm(lat, lon, clat, clon),
    };
  });

  return clinics
    .filter((c) => Number.isFinite(c.lat) && Number.isFinite(c.lon))
    .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
}

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}
