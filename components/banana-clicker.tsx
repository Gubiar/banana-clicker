"use client"

import { useGameStore } from "@/lib/store"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { useLanguageStore } from "@/lib/i18n/language-store"

export default function BananaClicker() {
  const { incrementClicks } = useGameStore()
  const { t } = useLanguageStore()
  const [isClicking, setIsClicking] = useState(false)

  const handleClick = () => {
    setIsClicking(true)
    incrementClicks()
    setTimeout(() => setIsClicking(false), 150)
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-400 mb-4">{t("clickTheBanana")}</h2>
      <motion.div whileTap={{ scale: 0.95 }} className="cursor-pointer select-none" onClick={handleClick}>
        <motion.div
          animate={isClicking ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.2 }}
          className="relative w-48 h-48 flex items-center justify-center"
        >
          <Image
            src="/bananas/normal.png"
            alt={t("clickTheBanana")}
            width={180}
            height={180}
            className="object-contain select-none pointer-events-none"
            draggable="false"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

