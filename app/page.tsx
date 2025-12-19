"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

const services = [
  {
    id: 1,
    name: "Corte Clássico",
    description: "Corte na tesoura com acabamento premium e lavagem especial",
    duration: "45 min",
    price: 60,
    image: "/barbeiro-cortando-cabelo-tesoura.jpg",
    category: "cortes",
  },
  {
    id: 2,
    name: "Barba Real",
    description: "Barboterapia completa com toalha quente e massagem facial",
    duration: "30 min",
    price: 45,
    image: "/barbeiro-fazendo-barba-navalha.jpg",
    category: "barba",
  },
  {
    id: 3,
    name: "Combo Luxo",
    description: "Corte + Barba + Hidratação. A experiência completa",
    duration: "1h 15m",
    price: 95,
    image: "/produtos-barbearia-premium.jpg",
    category: "tratamentos",
  },
  {
    id: 4,
    name: "Degradê Moderno",
    description: "Corte degradê com desenho e finalização com máquina",
    duration: "50 min",
    price: 70,
    image: "/corte-degrade-moderno.jpg",
    category: "cortes",
  },
  {
    id: 5,
    name: "Platinado VIP",
    description: "Descoloração completa com tratamento capilar intensivo",
    duration: "2h 30m",
    price: 180,
    image: "/cabelo-platinado-masculino.jpg",
    category: "tratamentos",
  },
  {
    id: 6,
    name: "Barba + Bigode",
    description: "Aparar e modelar barba e bigode com navalha",
    duration: "25 min",
    price: 40,
    image: "/barba-navalha.jpg",
    category: "barba",
  },
  {
    id: 7,
    name: "Corte Social",
    description: "Corte tradicional para o dia a dia",
    duration: "40 min",
    price: 55,
    image: "/corte-tesoura-classico.jpg",
    category: "cortes",
  },
  {
    id: 8,
    name: "Hidratação Capilar",
    description: "Tratamento intensivo de hidratação",
    duration: "45 min",
    price: 65,
    image: "/produtos-barbearia-premium.jpg",
    category: "tratamentos",
  },
]

const categories = [
  { id: "todos", name: "Todos", icon: "apps" },
  { id: "cortes", name: "Cortes", icon: "content_cut" },
  { id: "barba", name: "Barba", icon: "face" },
  { id: "tratamentos", name: "Tratamentos", icon: "spa" },
  { id: "quimica", name: "Química", icon: "science" },
  { id: "coloracao", name: "Coloração", icon: "palette" },
  { id: "sobrancelha", name: "Sobrancelha", icon: "face_3" },
  { id: "promocoes", name: "Promoções", icon: "local_offer" },
]

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const filteredServices =
    selectedCategory === "todos" ? services : services.filter((s) => s.category === selectedCategory)

  return (
    <div className="flex h-screen w-full flex-col max-w-md mx-auto bg-luxury-black shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-start px-6 pt-4 pb-3">
        <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-gradient">KualoBarber</h1>
      </div>

      {/* Search Bar */}
      <div className="px-6 pb-3">
        <div className="relative flex items-center">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-500">search</span>
          </div>
          <input
            type="text"
            placeholder="Buscar serviços..."
            className="w-full bg-surface-dark text-white border border-white/10 rounded-full h-12 pl-12 pr-4 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>

      {/* Categories - Slide */}
      <div className="w-full overflow-x-auto no-scrollbar py-3 scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-2 pl-6 pr-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg shrink-0 transition-all min-w-[70px] snap-start ${
                selectedCategory === category.id
                  ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                  : "bg-card-black border border-white/10 text-white/80 hover:border-primary/50 active:scale-95"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{category.icon}</span>
              <span className={`text-[10px] font-medium whitespace-nowrap ${selectedCategory === category.id ? "font-bold" : ""}`}>
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between px-6 pb-3 pt-2">
        <h3 className="text-base font-bold text-white">
          {selectedCategory === "todos" ? "Todos os Serviços" : categories.find((c) => c.id === selectedCategory)?.name}
        </h3>
        <span className="text-xs text-gray-400">{filteredServices.length} serviços</span>
      </div>

      {/* Services List - Compact */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 flex flex-col gap-3">
        {filteredServices.map((service) => (
          <Link key={service.id} href={`/barbeiro?servico=${service.id}`}>
            <div className="group relative flex items-center gap-3 bg-card-black rounded-xl p-3 border border-white/5 shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
              {/* Image - Smaller */}
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-neutral-800">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold text-white leading-tight line-clamp-1">{service.name}</h4>
                  <span className="text-base font-bold text-primary shrink-0">R$ {service.price.toFixed(0)}</span>
                </div>
                <p className="text-white/50 text-xs line-clamp-1 mb-2">{service.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-white/40 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">schedule</span>
                    {service.duration}
                  </span>
                  <span className="text-xs text-primary font-medium">Reservar →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav active="home" />
    </div>
  )
}
