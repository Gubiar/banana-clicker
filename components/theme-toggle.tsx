"use client"

import { useTheme } from "@/lib/theme-context"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-yellow-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <Moon className="w-6 h-6 text-yellow-800" /> : <Sun className="w-6 h-6 text-yellow-400" />}
    </motion.button>
  )
}

