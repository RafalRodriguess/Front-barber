"use client"

import { useState, useEffect } from "react"

export function NotificationButton() {
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setIsSupported(true)
      setPermission(Notification.permission)
      console.log("Notificações suportadas. Permissão:", Notification.permission)
    } else {
      console.log("Notificações não suportadas")
    }
  }, [])

  const requestPermission = async () => {
    if (!("Notification" in window)) {
      alert("Seu navegador não suporta notificações")
      return
    }

    const result = await Notification.requestPermission()
    setPermission(result)

    if (result === "granted") {
      // Registrar service worker se ainda não estiver registrado
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.ready
        console.log("Service Worker pronto para notificações")
      }
    }
  }

  const sendTestNotification = async () => {
    if (permission !== "granted") {
      alert("Por favor, permita notificações primeiro")
      return
    }

    try {
      // Tenta usar Service Worker primeiro (melhor para PWA)
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.ready
        
        await registration.showNotification("KualoBarber - Agendamento", {
          body: "Seu agendamento é hoje às 15:00",
          icon: "/icon-192x192.png",
          badge: "/icon-96x96.png",
          tag: "agendamento-hoje",
          requireInteraction: false,
          vibrate: [200, 100, 200],
          data: {
            url: "/",
          },
        })
        console.log("Notificação enviada via Service Worker")
        return
      }
    } catch (error) {
      console.error("Erro ao enviar via Service Worker:", error)
    }

    // Fallback: usar API de Notificações diretamente
    try {
      const notification = new Notification("KualoBarber - Agendamento", {
        body: "Seu agendamento é hoje às 15:00",
        icon: "/icon-192x192.png",
        badge: "/icon-96x96.png",
        tag: "agendamento-hoje",
        requireInteraction: false,
        vibrate: [200, 100, 200],
      })

      notification.onclick = () => {
        window.focus()
        notification.close()
      }
      console.log("Notificação enviada via API direta")
    } catch (error) {
      console.error("Erro ao enviar notificação:", error)
      alert("Erro ao enviar notificação: " + error.message)
    }
  }

  if (!isSupported) {
    return (
      <p className="text-yellow-500 text-sm">
        Notificações não são suportadas neste navegador.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {permission === "default" && (
        <button
          onClick={requestPermission}
          className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm w-full hover:bg-primary/90 transition-colors"
        >
          Permitir Notificações
        </button>
      )}

      {permission === "granted" && (
        <button
          onClick={sendTestNotification}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm w-full hover:bg-green-600 transition-colors"
        >
          Testar Notificação (15:00)
        </button>
      )}

      {permission === "denied" && (
        <p className="text-red-500 text-sm">
          Notificações bloqueadas. Por favor, permita nas configurações do navegador.
        </p>
      )}
    </div>
  )
}

