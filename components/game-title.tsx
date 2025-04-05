"use client"

import { useLanguageStore } from "@/lib/i18n/language-store"

export default function GameTitle() {
  const { t } = useLanguageStore()

  return <h1 className="text-4xl font-bold text-center text-yellow-800 dark:text-yellow-400 mb-8">{t("gameTitle")}</h1>
}

