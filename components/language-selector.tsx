"use client"

import { useLanguageStore } from "@/lib/i18n/language-store"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore()
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const selectLanguage = (lang: "pt-BR" | "en") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Select language"
      >
        <span className="text-2xl" role="img" aria-label={language === "pt-BR" ? "Português" : "English"}>
          {language === "pt-BR" ? "🇧🇷" : "🇺🇸"}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50"
          >
            <div className="py-1">
              <button
                onClick={() => selectLanguage("pt-BR")}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  language === "pt-BR" 
                    ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="text-xl mr-2" role="img" aria-label="Português">
                  🇧🇷
                </span>
                Português
              </button>
              <button
                onClick={() => selectLanguage("en")}
                className={`flex items-center w-full px-4 py-2 text-sm ${
                  language === "en" 
                    ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="text-xl mr-2" role="img" aria-label="English">
                  🇺🇸
                </span>
                English
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

