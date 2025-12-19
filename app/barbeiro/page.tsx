import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

const barbers = [
  {
    id: 1,
    name: "Carlos Silva",
    specialty: "Corte Clássico & Barba",
    rating: 5.0,
    reviews: 124,
    badge: "Master",
    image: "/barbeiro-profissional-confiante.jpg",
  },
  {
    id: 2,
    name: "André Costa",
    specialty: "Especialista em Degradê",
    rating: 4.9,
    reviews: 89,
    badge: "Expert",
    image: "/barbeiro-jovem-estiloso.jpg",
  },
  {
    id: 3,
    name: "João Pereira",
    specialty: "Barba e Bigode",
    rating: 4.8,
    reviews: 56,
    badge: null,
    image: "/barbeiro-sorrindo-amigavel.jpg",
  },
  {
    id: 4,
    name: "Miguel Santos",
    specialty: "Cortes Modernos",
    rating: 4.7,
    reviews: 32,
    badge: null,
    image: "/barbeiro-focado-trabalhando.jpg",
  },
  {
    id: 5,
    name: "Rafael Oliveira",
    specialty: "Coloração & Química",
    rating: 4.9,
    reviews: 67,
    badge: "Expert",
    image: "/barbeiro-especialista-coloracao.jpg",
  },
]

export default function BarbeiroPage() {
  return (
    <div className="flex h-screen w-full flex-col max-w-md mx-auto bg-luxury-black shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </Link>
        <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-gradient">KualoBarber</h1>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      {/* Page Title */}
      <div className="pt-2 pb-6 px-6 text-center">
        <h2 className="text-xl font-medium text-white">Escolha seu Profissional</h2>
        <p className="text-gray-400 text-sm mt-1">Excelência e precisão em cada corte</p>
      </div>

      {/* Barbers List */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-24 flex flex-col gap-5">
        {barbers.map((barber) => (
          <div
            key={barber.id}
            className="group relative flex items-center gap-4 bg-surface-dark p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="relative shrink-0">
              <div
                className={
                  barber.badge === "Master"
                    ? "p-[2px] rounded-full bg-gradient-to-r from-primary via-gold-light to-primary"
                    : "p-[1px] rounded-full bg-gold/30"
                }
              >
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-luxury-black">
                  <img
                    src={barber.image || "/placeholder.svg"}
                    alt={barber.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {barber.badge && (
                <div
                  className={`absolute -bottom-1 -right-2 px-2 py-0.5 rounded-full shadow-lg border border-luxury-black text-[10px] font-bold uppercase tracking-wider ${
                    barber.badge === "Master" ? "bg-primary text-black" : "bg-white/20 text-white"
                  }`}
                >
                  {barber.badge}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-0.5">
                <h3 className="text-white font-bold text-lg truncate">{barber.name}</h3>
                {barber.badge === "Master" && (
                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                )}
              </div>
              <p className="text-gray-400 text-xs mb-1">{barber.specialty}</p>
              <div className="flex items-center gap-1 text-gold text-sm font-medium">
                <span className="material-symbols-outlined text-[14px]">star</span>
                <span>{barber.rating}</span>
                <span className="text-gray-400 text-xs font-normal ml-1">({barber.reviews} avaliações)</span>
              </div>
            </div>

            <Link href={`/agenda?barbeiro=${barber.id}`}>
              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </Link>
          </div>
        ))}
      </div>

      <BottomNav active="agendar" />
    </div>
  )
}
