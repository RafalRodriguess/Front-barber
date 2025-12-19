"use client"

import { useEffect, useState } from "react"

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowInstallButton(false)
    }
  }

  if (!showInstallButton) return null

  return (
    <div className="fixed bottom-24 left-0 right-0 flex justify-center z-50 px-6">
      <button
        onClick={handleInstallClick}
        className="bg-primary text-black px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
      >
        <span className="material-symbols-outlined">download</span>
        Instalar App
      </button>
    </div>
  )
}

