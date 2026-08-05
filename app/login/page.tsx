import type { Metadata } from "next";
import LoginClient from "@/components/LoginClient";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Ingresa a PetCare para cuidar a tu mascota, sin complicaciones.",
  openGraph: {
    title: "Iniciar sesión · PetCare",
    description: "Accede a tu cuenta de PetCare.",
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
