import Link from "next/link";
import { Bell, PawPrint } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-50 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link href="/home" className="flex items-center gap-2 md:hidden">
          <span className="h-8 w-8 rounded-full bg-sage-500 flex items-center justify-center text-white">
            <PawPrint size={16} strokeWidth={2} />
          </span>
          <span className="font-display text-base font-semibold text-ink-800">PetCare</span>
        </Link>

        <div className="hidden sm:block flex-1 max-w-sm">
          <SearchBar label="Buscar en PetCare" placeholder="Buscar razas, veterinarios..." />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button
            aria-label="Notificaciones"
            className="relative h-10 w-10 rounded-full flex items-center justify-center text-ink-600 hover:bg-mist transition-colors duration-200"
          >
            <Bell size={19} strokeWidth={1.75} />
            <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-clay" />
          </button>
          <div className="h-9 w-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold">
            MG
          </div>
        </div>
      </div>
    </header>
  );
}
