"use client"

import { useGameStore } from "@/lib/store"
import { useEffect, useState } from "react"
import { formatTimeRemaining } from "@/lib/utils"
import { useLanguageStore } from "@/lib/i18n/language-store"

export default function NextDropTimer() {
  const { nextDropTime } = useGameStore()
  const { t } = useLanguageStore()
  const [timeRemaining, setTimeRemaining] = useState("")

  useEffect(() => {
    const updateTimer = () => {
      if (!nextDropTime) {
        setTimeRemaining("Loading...")
        return
      }

      const now = new Date().getTime()
      const dropTime = new Date(nextDropTime).getTime()
      const remaining = dropTime - now

      if (remaining <= 0) {
        setTimeRemaining(t("readyForNewBanana"))
      } else {
        setTimeRemaining(formatTimeRemaining(remaining))
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [nextDropTime, t])

  return (
    <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg shadow text-center">
      <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400">{t("nextDrop")}</h3>
      <div className="text-xl font-mono dark:text-white">{timeRemaining}</div>
    </div>
  )
}

