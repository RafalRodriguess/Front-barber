import Link from "next/link"

interface BottomNavProps {
  active: "home" | "agenda" | "agendar" | "historico" | "perfil"
}

export function BottomNav({ active }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 w-full max-w-md bg-luxury-black/95 backdrop-blur-md border-t border-white/5 pb-6 pt-2 z-50">
      <div className="flex items-end justify-between px-6 relative">
        {/* Home */}
        <Link href="/">
          <button
            className={`flex flex-col items-center gap-1 w-16 transition-colors ${
              active === "home" ? "text-primary" : "text-white/50 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined">
              {active === "home" && "●"}
              home
            </span>
            <span className="text-[10px] font-medium">Início</span>
          </button>
        </Link>

        {/* Agenda */}
        <Link href="/meus-agendamentos">
          <button
            className={`flex flex-col items-center gap-1 w-16 transition-colors ${
              active === "agenda" ? "text-primary" : "text-white/50 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-[10px] font-medium">Agenda</span>
          </button>
        </Link>

        {/* Center FAB */}
        <div className="relative -top-8">
          <Link href="/barbeiro">
            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold shadow-[0_0_20px_rgba(250,198,56,0.4)] text-black hover:scale-105 transition-transform border-4 border-luxury-black">
              <span className="material-symbols-outlined text-3xl font-bold">add</span>
            </button>
          </Link>
        </div>

        {/* Histórico */}
        <Link href="/historico">
          <button
            className={`flex flex-col items-center gap-1 w-16 transition-colors ${
              active === "historico" ? "text-primary" : "text-white/50 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined">
              {active === "historico" && "●"}
              history
            </span>
            <span className="text-[10px] font-medium">Histórico</span>
          </button>
        </Link>

        {/* Perfil */}
        <Link href="/perfil">
          <button
            className={`flex flex-col items-center gap-1 w-16 transition-colors ${
              active === "perfil" ? "text-primary" : "text-white/50 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
