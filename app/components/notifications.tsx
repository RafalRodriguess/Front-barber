"use client"

import { useState, useEffect } from "react"

export function NotificationButton() {
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    if ("Notification" in window) {
      setIsSupported(true)
      setPermission(Notification.permission)
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

  const sendTestNotification = () => {
    if (permission !== "granted") {
      alert("Por favor, permita notificações primeiro")
      return
    }

    // Teste simples de notificação
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
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className="flex flex-col gap-2 px-6 py-4">
      {permission === "default" && (
        <button
          onClick={requestPermission}
          className="bg-primary text-black px-4 py-2 rounded-lg font-bold text-sm"
        >
          Permitir Notificações
        </button>
      )}

      {permission === "granted" && (
        <button
          onClick={sendTestNotification}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm"
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

