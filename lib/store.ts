import { create } from "zustand"
import { persist } from "zustand/middleware"
import { generateRandomBanana } from "./utils"
import type { BananaType } from "./types"

interface GameState {
  clicks: number
  collection: Record<BananaType, number>
  nextDropTime: string | null
  lastCheckTime: string | null

  // Actions
  incrementClicks: () => void
  addBanana: (type: BananaType) => void
  setNextDropTime: (time: string) => void
  checkForDrop: () => void
  initializeGame: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      clicks: 0,
      collection: {},
      nextDropTime: null,
      lastCheckTime: null,

      incrementClicks: () => set((state) => ({ clicks: state.clicks + 1 })),

      addBanana: (type) =>
        set((state) => ({
          collection: {
            ...state.collection,
            [type]: (state.collection[type] || 0) + 1,
          },
        })),

      setNextDropTime: (time) => set({ nextDropTime: time }),

      checkForDrop: () => {
        const { nextDropTime, lastCheckTime } = get()
        const now = new Date()

        // If this is the first check or we've passed the next drop time
        if (!nextDropTime || new Date(nextDropTime) <= now) {
          // Generate a random banana
          const bananaType = generateRandomBanana()

          // Add it to the collection
          get().addBanana(bananaType)

          // Set the next drop time to 3 minutes from now (changed from 3 hours)
          const nextDrop = new Date(now.getTime() + 3 * 60 * 1000) // 3 minutes
          get().setNextDropTime(nextDrop.toISOString())

          // Update last check time
          set({ lastCheckTime: now.toISOString() })

          return true
        }

        return false
      },

      initializeGame: () => {
        const { nextDropTime, collection } = get()
        const now = new Date()

        // If this is the first time running the game or we have no bananas
        if (!nextDropTime || Object.keys(collection).length === 0) {
          // Generate a random banana immediately
          const bananaType = generateRandomBanana()

          // Add it to the collection
          get().addBanana(bananaType)

          // Set the next drop time to 3 minutes from now (changed from 3 hours)
          const nextDrop = new Date(now.getTime() + 3 * 60 * 1000) // 3 minutes
          get().setNextDropTime(nextDrop.toISOString())

          // Update last check time
          set({ lastCheckTime: now.toISOString() })
        }
      },
    }),
    {
      name: "banana-clicker-storage",
    },
  ),
)

