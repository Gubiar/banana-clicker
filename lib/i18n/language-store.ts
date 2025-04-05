import { create } from "zustand"
import { persist } from "zustand/middleware"
import { type Language, translations } from "./translations"

interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "pt-BR", // Default to Brazilian Portuguese

      setLanguage: (language) => set({ language }),

      t: (key) => {
        const { language } = get()
        const keys = key.split(".")
        let value: any = translations[language]

        for (const k of keys) {
          if (value && typeof value === "object" && k in value) {
            value = value[k]
          } else {
            return key // Return the key if translation not found
          }
        }

        return typeof value === "string" ? value : key
      },
    }),
    {
      name: "banana-clicker-language",
    },
  ),
)

