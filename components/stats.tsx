"use client"

import { useGameStore } from "@/lib/store"
import { BANANA_TYPES } from "@/lib/constants"
import BananaIcon from "./banana-icon"
import { useLanguageStore } from "@/lib/i18n/language-store"

export default function Stats() {
  const { clicks, collection } = useGameStore()
  const { t } = useLanguageStore()

  // Calculate total bananas
  const totalBananas = Object.values(collection).reduce((sum, count) => sum + count, 0)

  // Calculate rarest banana
  let rarestBanana = t("none")
  let rarestBananaType = null
  let highestRarity = -1

  BANANA_TYPES.forEach((type) => {
    if (collection[type.id] && type.rarity > highestRarity) {
      rarestBanana = t(`bananaTypes.${type.id}`)
      rarestBananaType = type.id
      highestRarity = type.rarity
    }
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-400 mb-4">{t("stats")}</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
          <span className="font-semibold dark:text-gray-200">{t("totalClicks")}</span>
          <span className="text-xl font-bold dark:text-white">{clicks}</span>
        </div>

        <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
          <span className="font-semibold dark:text-gray-200">{t("totalBananas")}</span>
          <span className="text-xl font-bold dark:text-white">{totalBananas}</span>
        </div>

        <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2">
          <span className="font-semibold dark:text-gray-200">{t("rarestBanana")}</span>
          <div className="flex items-center">
            {rarestBananaType && <BananaIcon type={rarestBananaType} size="sm" className="mr-2" />}
            <span className="text-xl font-bold dark:text-white">{rarestBanana}</span>
          </div>
        </div>

        <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-400">{t("nextDrop")}</h3>
          <p className="text-sm dark:text-gray-300">{t("nextDropDescription")}</p>
        </div>
      </div>
    </div>
  )
}

