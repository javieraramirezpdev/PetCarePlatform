"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, PawPrint } from "lucide-react";
import Button from "./Button";

export default function LoginClient() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("maria@petcare.cl");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Pantalla de demostración: no hay autenticación real, solo navega al dashboard.
    router.push("/home");
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-sm animate-fade-up">
          <div className="flex items-center gap-2 mb-10">
            <span className="h-9 w-9 rounded-full bg-sage-500 flex items-center justify-center text-white">
              <PawPrint size={18} strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-semibold text-ink-800">PetCare</span>
          </div>

          <h1 className="font-display text-2xl font-semibold text-ink-800">Bienvenido de vuelta</h1>
          <p className="text-sm text-ink-400 mt-1.5">Ingresa para cuidar a tu mascota, sin complicaciones.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-ink-600">Correo electrónico</span>
              <span className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl2 border border-ink-100 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors duration-200 focus:border-sage-300"
                  placeholder="tucorreo@petcare.cl"
                />
              </span>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-ink-600">Contraseña</span>
              <span className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl2 border border-ink-100 bg-white py-2.5 pl-10 pr-10 text-sm outline-none transition-colors duration-200 focus:border-sage-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </span>
            </label>

            <a href="#" className="text-xs font-medium text-sage-600 hover:text-sage-700 self-end -mt-1">
              ¿Olvidaste tu contraseña?
            </a>

            <Button type="submit" className="w-full mt-2">
              Iniciar sesión →
            </Button>
          </form>

          <p className="text-sm text-ink-400 text-center mt-6">
            ¿Aún no tienes cuenta?{" "}
            <a href="#" className="font-medium text-sage-600 hover:text-sage-700">
              Regístrate
            </a>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-sage-100 via-sage-50 to-sky-100 items-center justify-center p-12">
        <svg aria-hidden className="absolute -left-10 -top-10 h-72 w-72 text-white/40" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg aria-hidden className="absolute -right-16 bottom-0 h-80 w-80 text-sage-200/60" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="100" />
        </svg>

        <div className="relative text-center max-w-xs">
          <div className="mx-auto h-40 w-40 rounded-full bg-white flex items-center justify-center shadow-lift">
            <PawPrint size={64} strokeWidth={1.25} className="text-clay" />
          </div>
          <h2 className="font-display text-xl font-semibold text-ink-800 mt-8">Cuidado que se nota</h2>
          <p className="text-sm text-ink-600 mt-2 leading-relaxed">
            Vacunas, controles y veterinarios cercanos, organizados en un solo lugar para ti y tu mascota.
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <span className="h-1.5 w-6 rounded-full bg-sage-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-sage-200" />
            <span className="h-1.5 w-1.5 rounded-full bg-sage-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
