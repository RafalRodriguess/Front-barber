"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

const historicalAppointments = [
  {
    id: 1,
    service: "Corte Clássico",
    barber: "André Costa",
    date: "10 Dez 2024",
    time: "14:00",
    price: 60.0,
    status: "completed",
    image: "/corte-tesoura-classico.jpg",
    rating: 5,
  },
  {
    id: 2,
    service: "Barba Real",
    barber: "João Pereira",
    date: "05 Dez 2024",
    time: "18:00",
    price: 45.0,
    status: "completed",
    image: "/barba-navalha.jpg",
    rating: 5,
  },
  {
    id: 3,
    service: "Degradê Moderno",
    barber: "Carlos Silva",
    date: "28 Nov 2024",
    time: "16:00",
    price: 70.0,
    status: "completed",
    image: "/corte-degrade-moderno.jpg",
    rating: 4,
  },
  {
    id: 4,
    service: "Corte & Barba",
    barber: "Miguel Santos",
    date: "20 Nov 2024",
    time: "15:30",
    price: 85.0,
    status: "completed",
    image: "/barbeiro-cortando-cabelo.jpg",
    rating: 5,
  },
  {
    id: 5,
    service: "Combo Luxo",
    barber: "Carlos Silva",
    date: "12 Nov 2024",
    time: "10:00",
    price: 95.0,
    status: "completed",
    image: "/produtos-barbearia-premium.jpg",
    rating: 5,
  },
]

export default function HistoricoPage() {
  const [filter, setFilter] = useState<"all" | "recent" | "old">("all")

  const filteredAppointments =
    filter === "all"
      ? historicalAppointments
      : filter === "recent"
        ? historicalAppointments.slice(0, 3)
        : historicalAppointments.slice(3)

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
          <span className="material-symbols-outlined">filter_list</span>
        </button>
      </div>

      {/* Page Title */}
      <div className="px-6 pt-2 pb-6">
        <h2 className="text-2xl font-bold text-white">Histórico</h2>
        <p className="text-gray-400 text-sm mt-1">Seus agendamentos anteriores</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 px-6 pb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
            filter === "all"
              ? "bg-primary text-black"
              : "bg-card-black border border-white/10 text-white/80 hover:border-primary/50"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("recent")}
          className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
            filter === "recent"
              ? "bg-primary text-black font-bold"
              : "bg-card-black border border-white/10 text-white/80 hover:border-primary/50"
          }`}
        >
          Recentes
        </button>
        <button
          onClick={() => setFilter("old")}
          className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
            filter === "old"
              ? "bg-primary text-black font-bold"
              : "bg-card-black border border-white/10 text-white/80 hover:border-primary/50"
          }`}
        >
          Antigos
        </button>
      </div>

      {/* Appointments List */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 flex flex-col gap-4">
        {filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="material-symbols-outlined text-6xl text-gray-600 mb-4">history</div>
            <p className="text-gray-400 text-lg font-medium">Nenhum histórico encontrado</p>
            <p className="text-gray-500 text-sm mt-2">Seus agendamentos concluídos aparecerão aqui</p>
          </div>
        ) : (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="relative flex flex-col bg-surface-dark rounded-2xl p-4 border border-white/5 hover:border-primary/30 transition-all"
            >
              {/* Status Badge */}
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-500/10 text-green-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Concluído
              </span>

              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={appointment.image || "/placeholder.svg"}
                    alt={appointment.service}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 pr-20">
                  <h3 className="text-white font-bold text-lg mb-1">{appointment.service}</h3>
                  <p className="text-gray-400 text-sm mb-2">{appointment.barber}</p>
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`material-symbols-outlined text-[16px] ${
                          i < appointment.rating ? "text-primary" : "text-gray-600"
                        }`}
                        style={{ fontVariationSettings: i < appointment.rating ? '"FILL" 1' : '"FILL" 0' }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {appointment.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {appointment.time}
                  </span>
                </div>
                <span className="text-primary font-bold text-lg">R$ {appointment.price.toFixed(2)}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
                <button className="flex-1 py-2.5 rounded-lg bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  Avaliar
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                  Agendar Novamente
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNav active="historico" />
    </div>
  )
}

