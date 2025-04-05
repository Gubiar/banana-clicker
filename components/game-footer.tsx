"use client"

import { useState } from "react"
import { useLanguageStore } from "@/lib/i18n/language-store"
import { HelpCircle } from "lucide-react"
import TechModal from "./tech-modal"

export default function GameFooter() {
  const { t } = useLanguageStore()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="w-full mt-8 mb-4 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded-full transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
          <span>{t("howItWorks")}</span>
        </button>
      </div>
      <TechModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

