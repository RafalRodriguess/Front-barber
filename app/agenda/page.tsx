"use client"

import { useState } from "react"
import Link from "next/link"
import { BottomNav } from "@/components/bottom-nav"

const getDaysForMonth = (year: number, month: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const days = []
  
  const dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"]
  
  // Dias do mês atual
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i)
    const dayOfWeek = date.getDay()
    // Marca domingos como não disponíveis
    const isSunday = dayOfWeek === 0
    days.push({ 
      day: dayNames[dayOfWeek], 
      date: i, 
      available: !isSunday 
    })
  }
  
  return days
}

const timeSlots = {
  morning: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
  afternoon: ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"],
  evening: ["18:00", "18:30", "19:00", "19:30", "20:00"],
}

const occupiedSlots = ["09:30", "11:00", "14:00", "16:30", "17:00"]

export default function AgendaPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(new Date().getDate())
  const [selectedTime, setSelectedTime] = useState("15:00")

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const days = getDaysForMonth(year, month)

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
    setSelectedDay(1)
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
    setSelectedDay(1)
  }

  return (
    <div className="flex h-screen w-full flex-col max-w-md mx-auto bg-luxury-black shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/barbeiro">
          <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </Link>
        <h1 className="font-serif text-2xl font-bold tracking-wide text-gold-gradient">KualoBarber</h1>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </div>

      {/* Service Summary */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-dark/50 border border-white/5">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Serviço Selecionado</p>
            <p className="text-white font-bold text-lg">Corte & Barba</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 font-medium mb-1">Valor</p>
            <p className="text-primary font-bold text-lg">R$ 90,00</p>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center justify-between px-6">
          <h3 className="text-lg font-bold text-white">
            {monthNames[month]} {year}
          </h3>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevMonth}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button 
              onClick={handleNextMonth}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Days Scroller */}
        <div className="flex overflow-x-auto no-scrollbar px-6 gap-3 pb-2 scroll-smooth snap-x snap-mandatory">
          {days.map((item) => (
            <button
              key={item.date}
              onClick={() => item.available && setSelectedDay(item.date)}
              disabled={!item.available}
              className={`flex flex-col items-center justify-center min-w-[64px] h-[84px] rounded-xl shrink-0 transition-all snap-start ${
                selectedDay === item.date
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(250,198,56,0.3)]"
                  : item.available
                    ? "bg-surface-dark text-white border border-white/5 hover:border-primary/50"
                    : "bg-surface-dark/30 text-gray-500 opacity-50 cursor-not-allowed"
              }`}
            >
              <span className={`text-xs font-medium mb-1 ${selectedDay === item.date ? "font-bold" : "text-gray-400"}`}>
                {item.day}
              </span>
              <span className={`${selectedDay === item.date ? "text-2xl" : "text-xl"} font-bold`}>{item.date}</span>
              {selectedDay === item.date && <span className="w-1.5 h-1.5 rounded-full bg-black mt-1"></span>}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Morning */}
        <div className="mb-6">
          <h3 className="text-white text-sm uppercase font-bold px-6 pb-3 opacity-80">Manhã</h3>
          <div className="grid grid-cols-3 gap-3 px-6">
            {timeSlots.morning.map((time) => {
              const isOccupied = occupiedSlots.includes(time)
              const isSelected = selectedTime === time

              return (
                <button
                  key={time}
                  onClick={() => !isOccupied && setSelectedTime(time)}
                  disabled={isOccupied}
                  className={`flex h-12 items-center justify-center rounded-full font-medium transition-all ${
                    isSelected
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(250,198,56,0.4)] scale-105 font-bold"
                      : isOccupied
                        ? "bg-surface-dark/30 text-gray-600 cursor-not-allowed"
                        : "bg-surface-dark text-white border border-white/10 hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  <span className={isOccupied ? "line-through" : ""}>{time}</span>
                  {isSelected && <span className="material-symbols-outlined text-[16px] ml-1">check</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Afternoon */}
        <div className="mb-6">
          <h3 className="text-white text-sm uppercase font-bold px-6 pb-3 opacity-80">Tarde</h3>
          <div className="grid grid-cols-3 gap-3 px-6">
            {timeSlots.afternoon.map((time) => {
              const isOccupied = occupiedSlots.includes(time)
              const isSelected = selectedTime === time

              return (
                <button
                  key={time}
                  onClick={() => !isOccupied && setSelectedTime(time)}
                  disabled={isOccupied}
                  className={`flex h-12 items-center justify-center rounded-full font-medium transition-all ${
                    isSelected
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(250,198,56,0.4)] scale-105 font-bold"
                      : isOccupied
                        ? "bg-surface-dark/30 text-gray-600 cursor-not-allowed"
                        : "bg-surface-dark text-white border border-white/10 hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  <span className={isOccupied ? "line-through" : ""}>{time}</span>
                  {isSelected && <span className="material-symbols-outlined text-[16px] ml-1">check</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* Evening */}
        <div className="mb-6">
          <h3 className="text-white text-sm uppercase font-bold px-6">Noite</h3>
          <div className="grid grid-cols-3 gap-3 px-6">
            {timeSlots.evening.map((time) => {
              const isOccupied = occupiedSlots.includes(time)
              const isSelected = selectedTime === time

              return (
                <button
                  key={time}
                  onClick={() => !isOccupied && setSelectedTime(time)}
                  disabled={isOccupied}
                  className={`flex h-12 items-center justify-center rounded-full font-medium transition-all ${
                    isSelected
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(250,198,56,0.4)] scale-105 font-bold"
                      : isOccupied
                        ? "bg-surface-dark/30 text-gray-600 cursor-not-allowed"
                        : "bg-surface-dark text-white border border-white/10 hover:bg-primary/10 hover:border-primary/50"
                  }`}
                >
                  <span className={isOccupied ? "line-through" : ""}>{time}</span>
                  {isSelected && <span className="material-symbols-outlined text-[16px] ml-1">check</span>}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA Button - Próximo */}
      {selectedDay && selectedTime && (
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-luxury-black via-luxury-black to-transparent pt-6 pb-28 px-6">
          <Link href="/dados-pessoais">
            <button className="w-full flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90 active:scale-95 transition-all h-14 shadow-[0_0_20px_rgba(250,198,56,0.3)] text-black font-bold text-lg">
              Próximo
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
        </div>
      )}

      <BottomNav active="agendar" />
    </div>
  )
}
