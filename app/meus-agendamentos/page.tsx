import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

const appointments = [
  {
    id: 1,
    service: "Corte Degradê + Barba",
    barber: "Carlos Silva",
    date: "14 Dez",
    time: "15:00",
    price: 85.5,
    status: "confirmed",
    image: "/barbeiro-cortando-cabelo.jpg",
  },
  {
    id: 2,
    service: "Barba Real",
    barber: "João Pereira",
    date: "16 Dez",
    time: "18:00",
    price: 45.0,
    status: "confirmed",
    image: "/barba-navalha.jpg",
  },
  {
    id: 3,
    service: "Corte Clássico",
    barber: "André Costa",
    date: "10 Dez",
    time: "14:00",
    price: 60.0,
    status: "completed",
    image: "/corte-tesoura-classico.jpg",
  },
]

export default function MeusAgendamentosPage() {
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
        <h2 className="text-2xl font-bold text-white">Meus Agendamentos</h2>
        <p className="text-gray-400 text-sm mt-1">Acompanhe suas reservas</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 px-6 pb-6">
        <button className="px-5 py-2.5 rounded-full bg-primary text-black font-bold text-sm">Próximos</button>
        <button className="px-5 py-2.5 rounded-full bg-card-black border border-white/10 text-white/80 font-medium text-sm hover:border-primary/50 transition">
          Concluídos
        </button>
      </div>

      {/* Appointments List */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24 flex flex-col gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="relative flex flex-col bg-surface-dark rounded-2xl p-4 border border-white/5 hover:border-primary/30 transition-all"
          >
            {/* Status Badge */}
            <span
              className={`absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                appointment.status === "confirmed" ? "bg-primary/10 text-primary" : "bg-green-500/10 text-green-500"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  appointment.status === "confirmed" ? "bg-primary" : "bg-green-500"
                }`}
              ></span>
              {appointment.status === "confirmed" ? "Confirmado" : "Concluído"}
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
                <p className="text-gray-400 text-sm">{appointment.barber}</p>
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

            {appointment.status === "confirmed" && (
              <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
                <button className="flex-1 py-2.5 rounded-lg bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  Remarcar
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-red-500/10 text-red-500 text-sm font-medium hover:bg-red-500/20 transition-colors">
                  Cancelar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <BottomNav active="agenda" />
    </div>
  )
}
