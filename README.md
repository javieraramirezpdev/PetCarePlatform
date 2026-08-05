# PetCare 🐾

Plataforma web para dueños de mascotas: perfil de la mascota, control de vacunas, agenda de citas, búsqueda de veterinarios cercanos y catálogo de razas.

Proyecto final - Curso de FrontEnd 2026,  Asociación de Informáticos UTE-USACH.

## Cliente y proyecto

**Cliente:** PetCare, una plataforma digital (ficticia) dirigida a dueños de mascotas que necesita presencia web profesional para centralizar el cuidado de sus mascotas: vacunas, citas veterinarias y educación sobre razas.

**Problema que resuelve:** hoy la información de salud de una mascota vive dispersa (cuadernos, WhatsApp, memoria del dueño). PetCare la centraliza en un dashboard simple, pensado para personas con poca experiencia tecnológica o personas con poco tiempo.

**APIs públicas utilizadas:**
- [Dog CEO API](https://dog.ceo/dog-api/) — fotografías reales por raza (sin API key).
  Temperamento, esperanza de vida, altura y peso se complementan con datos curados
  por el equipo, ya que la API solo entrega imágenes.
- [OpenStreetMap](https://www.openstreetmap.org/) (Nominatim + Overpass) — geolocalización
  de direcciones y búsqueda de veterinarias cercanas, sin necesidad de API key.

## Integrantes

- Javiera Ramírez
- Jorge Díaz

## Instrucciones de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/javieraramirezpdev/PetCarePlatform.git
cd PetCarePlatform

# 2. Instalar dependencias
npm install

# 3. Levantar en modo desarrollo
npm run dev
# abre http://localhost:3000

# 4. Build de producción (debe compilar sin errores)
npm run build
npm start
```

No se requieren variables de entorno: Dog CEO y OpenStreetMap son APIs públicas sin API key.

## URL de producción

`https://petcareplatform.vercel.app` _(actualizar con la URL real de Vercel al desplegar)_

## Estructura del proyecto

app/
layout.tsx Layout raíz: fuentes y metadata global
page.tsx Landing page pública (marketing) con SEO completo
robots.ts Genera robots.txt
sitemap.ts Genera sitemap.xml
opengraph-image.tsx Imagen og:image generada dinámicamente
login/ Pantalla de inicio de sesión (solo visual, sin backend)
(dashboard)/ Route group con el layout de la app autenticada
layout.tsx Navbar, Sidebar, Footer, BottomNavigation
loading.tsx / error.tsx Estado de carga y error del dashboard
home/ Dashboard principal
mypet/ Perfil de la mascota, vacunas e historial
breeds/ Catálogo de razas (Dog CEO API) + loading/error propios
veterinarians/ Buscador de veterinarias (OpenStreetMap)
agenda/ Reserva y listado de citas
components/ Componentes reutilizables (Navbar, Sidebar, Card, etc.)
lib/ Tipos, datos simulados y funciones de consumo de API