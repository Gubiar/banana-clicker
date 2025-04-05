import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import type { BananaType } from "./types"
import { BANANA_TYPES } from "./constants"

export function generateRandomBanana(): BananaType {
  const random = Math.random()
  let cumulativeProbability = 0

  for (const type of BANANA_TYPES) {
    cumulativeProbability += type.chance
    if (random < cumulativeProbability) {
      return type.id
    }
  }

  // Default to normal if something goes wrong
  return "normal"
}

export function formatTimeRemaining(milliseconds: number): string {
  // Convert to seconds
  let seconds = Math.floor(milliseconds / 1000)

  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  // Format as HH:MM:SS
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

