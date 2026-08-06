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

```
PetCarePlatform/
├── app/
│   ├── layout.tsx              # Layout raíz: fuentes y metadata global
│   ├── page.tsx                 # Landing page pública (marketing) con SEO completo
│   ├── globals.css              # Estilos globales
│   ├── robots.ts                # Genera robots.txt
│   ├── sitemap.ts               # Genera sitemap.xml
│   ├── opengraph-image.tsx      # Imagen og:image generada dinámicamente
│   ├── twitter-image.tsx        # Imagen twitter:image
│   │
│   ├── login/
│   │   └── page.tsx             # Inicio de sesión (solo visual, sin backend)
│   │
│   └── (dashboard)/             # Route group: app autenticada
│       ├── layout.tsx           # Navbar, Sidebar, Footer, BottomNavigation
│       ├── loading.tsx          # Estado de carga del dashboard
│       ├── error.tsx            # Manejo de errores del dashboard
│       ├── home/                # Dashboard principal
│       ├── mypet/                # Perfil de la mascota, vacunas e historial
│       ├── breeds/               # Catálogo de razas (Dog CEO API)
│       │   ├── loading.tsx
│       │   └── error.tsx
│       ├── veterinarians/        # Buscador de veterinarias (OpenStreetMap)
│       └── agenda/               # Reserva y listado de citas
│
├── components/                  # Componentes reutilizables
│   ├── Navbar.tsx / LandingNavbar.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   ├── Card.tsx / Button.tsx / Badge.tsx
│   ├── FeatureCard.tsx / HeroSection.tsx / LandingHero.tsx
│   └── ...
│
├── lib/                          # Tipos, datos simulados y consumo de APIs
│   ├── types.ts
│   ├── data.ts
│   ├── api.ts
│   └── nav.ts
│
├── public/                       # Archivos estáticos
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

> Nota: `(dashboard)` es un *route group* de Next.js — agrupa rutas bajo un
> layout compartido sin agregar ese nombre a la URL. `/home`, `/mypet`, etc.
> se sirven igual, pero solo ellas muestran Navbar/Sidebar/BottomNavigation;
> `/login` queda con una pantalla completa propia.

## Conflictos resueltos

_Completar durante el desarrollo en equipo, por ejemplo:_

*Conflictos resueltos*
Conflicto: ambos integrantes modificaron el array links en components/LandingNavbar.tsx en ramas distintas. Javiera renombró el enlace de "Veterinarios" a "Únete aquí" (#uneteaqui) en feature/navbar-uneteaqui, mientras que Jorge, en paralelo, renombró "Cómo funciona" a "¿Cómo funciona?" y también tocó la misma línea de "Veterinarios" en feature/comofunciona-jorge. PR: https://github.com/javieraramirezpdev/PetCarePlatform/pull/3 Resolución: se resolvió desde el editor de conflictos de GitHub, aceptando el cambio entrante de main para conservar el enlace "Únete aquí" (#uneteaqui) y el cambio de la rama del PR para "¿Cómo funciona?", verificando que ambos textos quedaran correctamente conectados a sus respectivas secciones (id="uneteaqui" / id="como-funciona") antes de mergear.

Stack técnico

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · lucide-react
