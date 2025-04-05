"use client"

import Link from "next/link"
import { useLanguageStore } from "@/lib/i18n/language-store"

export default function CreditLine() {
  const { t } = useLanguageStore()

  return (
    <div className="text-sm text-yellow-800 dark:text-yellow-400 font-medium">
      {t("createdWith")}
      <span role="img" aria-label="banana" className="mx-1">
        🍌
      </span>
      {t("by")}
      <Link
        href="https://github.com/gubiar"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors underline ml-1"
      >
        Gubiar
      </Link>
    </div>
  )
}

