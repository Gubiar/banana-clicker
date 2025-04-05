"use client"

import type React from "react"

import { useLanguageStore } from "@/lib/i18n/language-store"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface TechModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TechModal({ isOpen, onClose }: TechModalProps) {
  const { t } = useLanguageStore()

  // Close modal when Escape key is pressed
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-400">{t("techExplanation.title")}</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label={t("techExplanation.close")}
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-500 mb-3">
                  {t("techExplanation.gameLogic")}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">{t("techExplanation.randomization")}</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    You get a new random banana every 3 minutes based on the rarity chances.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-500 mb-3">
                  {t("techExplanation.techStack")}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 dark:text-gray-300">{t("techExplanation.stateManagement")}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t("techExplanation.persistence")}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t("techExplanation.i18n")}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t("techExplanation.ui")}</p>
                </div>
              </div>

              <div className="pt-4 border-t dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">🍌</span>
                    <span className="text-yellow-800 dark:text-yellow-400 font-medium">Banana Clicker</span>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded-md transition-colors"
                  >
                    {t("techExplanation.close")}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

