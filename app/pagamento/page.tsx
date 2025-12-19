"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

export default function PagamentoPage() {
  const [paymentMethod, setPaymentMethod] = useState("pix")

  const subtotal = 90.0
  const discount = paymentMethod === "pix" ? subtotal * 0.05 : 0
  const total = subtotal - discount

  return (
    <div className="flex h-screen w-full flex-col max-w-md mx-auto bg-luxury-black shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/agenda">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
        </Link>
        <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-gradient">KualoBarber</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Section Title */}
        <div className="px-6 pt-2 pb-4">
          <h2 className="text-2xl font-bold text-white">Resumo</h2>
        </div>

        {/* Order Card */}
        <div className="px-4 mb-6">
          <div className="relative flex flex-col gap-4 rounded-2xl bg-surface-dark border border-white/5 p-5 shadow-lg overflow-hidden">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>

            <div className="flex items-start justify-between gap-4 z-10">
              <div className="flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1 w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Confirmado
                </span>
                <h3 className="text-lg font-bold text-white">Corte Degradê + Barba</h3>
                <p className="text-gray-400 text-sm flex items-center gap-1">14 Dez, 15:00 • Carlos Silva</p>
              </div>
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0">
                <img src="/barbeiro-cortando-cabelo.jpg" alt="Serviço" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="h-px w-full bg-white/10"></div>

            <div className="flex items-center justify-between z-10">
              <span className="text-sm text-gray-400">Total do serviço</span>
              <span className="text-xl font-bold text-primary">R$ {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="px-6 pt-2 pb-4">
          <h3 className="text-lg font-bold text-white mb-4">Pagamento</h3>
          <div className="flex flex-col gap-3">
            {/* Pix */}
            <label
              className={`relative flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all ${
                paymentMethod === "pix"
                  ? "border border-primary bg-primary/5"
                  : "border border-white/10 bg-surface-dark hover:bg-surface-dark/80"
              }`}
            >
              <div className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-surface-dark text-primary">
                <span className="material-symbols-outlined">qr_code_2</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-base font-semibold">Pix (5% OFF)</p>
                <p className="text-primary text-xs font-medium">Melhor opção</p>
              </div>
              <input
                type="radio"
                name="payment"
                value="pix"
                checked={paymentMethod === "pix"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5 text-primary focus:ring-primary"
              />
            </label>

            {/* Credit Card */}
            <label
              className={`relative flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all ${
                paymentMethod === "card"
                  ? "border border-primary bg-primary/5"
                  : "border border-white/10 bg-surface-dark hover:bg-surface-dark/80"
              }`}
            >
              <div className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] text-gray-300">
                <span className="material-symbols-outlined">credit_card</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-base font-medium">Cartão de Crédito</p>
                <p className="text-gray-500 text-xs">•••• 4242</p>
              </div>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5 text-primary focus:ring-primary"
              />
            </label>

            {/* In Store */}
            <label
              className={`relative flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-all ${
                paymentMethod === "store"
                  ? "border border-primary bg-primary/5"
                  : "border border-white/10 bg-surface-dark hover:bg-surface-dark/80"
              }`}
            >
              <div className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] text-gray-300">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-base font-medium">Pagar na Loja</p>
                <p className="text-gray-500 text-xs">Dinheiro ou Cartão</p>
              </div>
              <input
                type="radio"
                name="payment"
                value="store"
                checked={paymentMethod === "store"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-5 h-5 text-primary focus:ring-primary"
              />
            </label>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="px-6 py-2">
          <div className="rounded-xl bg-surface-dark/50 p-4 space-y-2 border border-white/5">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm text-primary">
                <span>Desconto Pix (5%)</span>
                <span>- R$ {discount.toFixed(2)}</span>
              </div>
            )}
            <div className="h-px w-full bg-white/10 my-1"></div>
            <div className="flex justify-between text-base font-bold text-white">
              <span>Total a pagar</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-luxury-black via-luxury-black to-transparent pt-6 pb-28 px-6">
        <Link href="/sucesso">
          <button className="w-full flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 active:scale-95 transition-all h-14 shadow-[0_0_20px_rgba(250,198,56,0.3)] text-black font-bold text-lg">
            Finalizar Reserva • R$ {total.toFixed(2)}
          </button>
        </Link>
      </div>

      <BottomNav active="agendar" />
    </div>
  )
}
