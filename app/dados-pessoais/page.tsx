"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

export default function DadosPessoaisPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })
  const [telefonePreenchido, setTelefonePreenchido] = useState(false)

  // Quando o telefone for preenchido completamente, mostra os outros campos
  useEffect(() => {
    // Considera telefone válido quando tiver pelo menos 10 dígitos (DDD + número)
    const telefoneLimpo = formData.telefone.replace(/\D/g, "")
    if (telefoneLimpo.length >= 10) {
      setTelefonePreenchido(true)
      // Aqui você pode fazer uma busca no backend para preencher nome e email automaticamente
      // Por enquanto, deixamos vazio para o usuário preencher
    } else {
      setTelefonePreenchido(false)
    }
  }, [formData.telefone])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode salvar os dados e navegar para a próxima página
  }

  const isFormValid = telefonePreenchido && formData.nome.trim() !== "" && formData.email.trim() !== ""

  return (
    <div className="flex h-screen w-full flex-col max-w-md mx-auto bg-luxury-black shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/agenda">
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </Link>
        <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-gradient">KualoBarber</h1>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Section Title */}
        <div className="px-6 pt-2 pb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-3xl">person</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Seus Dados</h2>
            <p className="text-gray-400 text-sm">Preencha seus dados para continuar com o agendamento</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 space-y-5">
          {/* Phone Input - Sempre visível primeiro */}
          <div className="group">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-2 pl-1">
              Telefone
            </label>
            <div className="relative flex items-center w-full">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className={`material-symbols-outlined ${telefonePreenchido ? "text-primary" : "text-gray-500"}`}>
                  call
                </span>
              </div>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.telefone}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "")
                  if (value.length <= 11) {
                    if (value.length <= 10) {
                      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
                    } else {
                      value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
                    }
                    setFormData({ ...formData, telefone: value })
                  }
                }}
                className={`w-full bg-surface-dark text-white border rounded-xl h-14 pl-14 pr-4 placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                  telefonePreenchido
                    ? "border-primary focus:border-primary focus:ring-primary"
                    : "border-white/10 focus:border-primary focus:ring-primary"
                }`}
                required
                autoFocus
              />
            </div>
            {telefonePreenchido && (
              <p className="text-xs text-primary mt-2 pl-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Telefone válido. Preencha seus dados abaixo.
              </p>
            )}
          </div>

          {/* Name Input - Aparece depois do telefone */}
          {telefonePreenchido && (
            <div className="group animate-in fade-in slide-in-from-top-4 duration-300">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-2 pl-1">
                Nome Completo
              </label>
              <div className="relative flex items-center w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-500">person</span>
                </div>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-surface-dark text-white border border-white/10 rounded-xl h-14 pl-14 pr-4 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  required
                />
              </div>
            </div>
          )}

          {/* Email Input - Aparece depois do telefone */}
          {telefonePreenchido && (
            <div className="group animate-in fade-in slide-in-from-top-4 duration-300 delay-75">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-400 mb-2 pl-1">
                E-mail
              </label>
              <div className="relative flex items-center w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-500">mail</span>
                </div>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-dark text-white border border-white/10 rounded-xl h-14 pl-14 pr-4 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  required
                />
              </div>
            </div>
          )}

          {/* Summary Card - Aparece depois do telefone */}
          {telefonePreenchido && (
            <div className="mt-8 p-4 rounded-2xl bg-surface-dark/50 border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Serviço</span>
                <span className="text-white font-semibold">Corte & Barba</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Data e Hora</span>
                <span className="text-white font-semibold">14 Dez, 15:00</span>
              </div>
              <div className="h-px w-full bg-white/10 my-3"></div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total</span>
                <span className="text-primary font-bold text-lg">R$ 90,00</span>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Bottom CTA */}
      {isFormValid && (
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-luxury-black via-luxury-black to-transparent pt-6 pb-28 px-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Link href="/pagamento">
            <button className="w-full flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 active:scale-95 transition-all h-14 shadow-[0_0_20px_rgba(250,198,56,0.3)] text-black font-bold text-lg">
              Continuar para Pagamento
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
        </div>
      )}

      <BottomNav active="agendar" />
    </div>
  )
}

