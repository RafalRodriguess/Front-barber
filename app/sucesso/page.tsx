import Link from "next/link"

export default function SucessoPage() {
  return (
    <div className="flex h-screen w-full flex-col max-w-md mx-auto bg-luxury-black shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-center px-6 py-4">
        <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-gradient">KualoBarber</h1>
      </div>

      {/* Success Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Success Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(250,198,56,0.4)]">
            <span className="material-symbols-outlined text-black text-6xl">check_circle</span>
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-3xl font-bold text-white text-center mb-3">Agendamento Confirmado!</h2>
        <p className="text-gray-400 text-center text-lg mb-8">Seu horário foi reservado com sucesso</p>

        {/* Booking Details Card */}
        <div className="w-full bg-surface-dark rounded-2xl p-6 border border-white/5 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img src="/barbeiro-profissional.jpg" alt="Barbeiro" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Carlos Silva</h3>
              <p className="text-gray-400 text-sm">Mestre Barbeiro</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary">content_cut</span>
              <span className="text-sm">Corte Degradê + Barba</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <span className="text-sm">Seg, 14 de Dezembro</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="text-sm">15:00 - 16:30</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined text-primary">payments</span>
              <span className="text-sm font-bold">R$ 85,50 (Pix 5% OFF)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3">
          <Link href="/meus-agendamentos" className="block">
            <button className="w-full h-14 bg-primary rounded-full text-black font-bold text-lg hover:bg-primary/90 transition-all">
              Ver Meus Agendamentos
            </button>
          </Link>
          <Link href="/" className="block">
            <button className="w-full h-14 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all">
              Voltar ao Início
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
