"use client"

import { useGameStore } from "@/lib/store"
import { BANANA_TYPES } from "@/lib/constants"
import { motion } from "framer-motion"
import BananaIcon from "./banana-icon"
import { useLanguageStore } from "@/lib/i18n/language-store"

export default function BananaCollection() {
  const { collection } = useGameStore()
  const { t } = useLanguageStore()

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-400 mb-4">{t("yourCollection")}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {BANANA_TYPES.map((type) => {
          const count = collection[type.id] || 0
          const darkBgColor = type.bgColor.replace("bg-", "dark:bg-").replace("-100", "-900/30")

          return (
            <motion.div
              key={type.id}
              className={`flex flex-col items-center p-3 rounded-lg ${type.bgColor} ${darkBgColor} ${count > 0 ? "opacity-100" : "opacity-50"}`}
              whileHover={{ scale: 1.05 }}
            >
              <BananaIcon type={type.id} size="md" />
              <div className="font-bold text-center mt-2 dark:text-white" style={{ color: type.textColor }}>
                {t(`bananaTypes.${type.id}`)}
              </div>
              <div className="mt-1 text-sm font-semibold dark:text-gray-300" style={{ color: type.textColor }}>
                {count}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

