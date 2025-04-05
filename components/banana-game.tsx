"use client"

import { useEffect } from "react"
import { useGameStore } from "@/lib/store"
import BananaClicker from "./banana-clicker"
import BananaCollection from "./banana-collection"
import NextDropTimer from "./next-drop-timer"
import Stats from "./stats"
import GameFooter from "./game-footer"
import { useLanguageStore } from "@/lib/i18n/language-store"

export default function BananaGame() {
  const { initializeGame, checkForDrop } = useGameStore()
  const { t } = useLanguageStore()

  useEffect(() => {
    initializeGame()

    // Check for drops on initial load
    checkForDrop()

    // Set up interval to check for drops every 10 seconds (more frequent for 3-minute drops)
    const interval = setInterval(() => {
      checkForDrop()
    }, 10000)

    return () => clearInterval(interval)
  }, [initializeGame, checkForDrop])

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col items-center">
          <BananaClicker />
          <NextDropTimer />
        </div>
        <Stats />
      </div>
      <BananaCollection />
      <GameFooter />
    </div>
  )
}

