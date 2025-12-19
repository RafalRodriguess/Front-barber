"use client"

import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"
import { NotificationButton } from "../components/notifications"

export default function PerfilPage() {
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
          <span className="material-symbols-outlined">settings</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center px-6 pt-6 pb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold p-[3px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-luxury-black flex items-center justify-center">
              <img src="/usuario-perfil-masculino.jpg" alt="Perfil" className="w-full h-full object-cover" />
            </div>
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black shadow-lg">
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">Arthur Silva</h2>
        <p className="text-gray-400 text-sm">arthur.silva@email.com</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 px-6 mb-8">
        <div className="bg-surface-dark rounded-xl p-4 text-center border border-white/5">
          <p className="text-2xl font-bold text-primary mb-1">12</p>
          <p className="text-xs text-gray-400">Cortes</p>
        </div>
        <div className="bg-surface-dark rounded-xl p-4 text-center border border-white/5">
          <p className="text-2xl font-bold text-primary mb-1">850</p>
          <p className="text-xs text-gray-400">Pontos</p>
        </div>
        <div className="bg-surface-dark rounded-xl p-4 text-center border border-white/5">
          <p className="text-2xl font-bold text-primary mb-1">5</p>
          <p className="text-xs text-gray-400">Cupons</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-24">
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">person</span>
              <span className="text-white font-medium">Editar Perfil</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">favorite</span>
              <span className="text-white font-medium">Favoritos</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">local_offer</span>
              <span className="text-white font-medium">Cupons e Promoções</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">5</span>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              <span className="text-white font-medium">Formas de Pagamento</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>

          <div className="w-full bg-surface-dark rounded-xl border border-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">notifications</span>
                <span className="text-white font-medium">Notificações</span>
              </div>
            </div>
            <NotificationButton />
          </div>

          <button className="w-full flex items-center justify-between p-4 bg-surface-dark rounded-xl border border-white/5 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">help</span>
              <span className="text-white font-medium">Ajuda e Suporte</span>
            </div>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-red-500/10 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all mt-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500">logout</span>
              <span className="text-red-500 font-medium">Sair</span>
            </div>
          </button>
        </div>
      </div>

      <BottomNav active="perfil" />
    </div>
  )
}
