import type { BananaTypeInfo } from "./types"

export const BANANA_TYPES: BananaTypeInfo[] = [
  {
    id: "normal",
    name: "Normal",
    emoji: "🍌",
    imagePath: "normal.png",
    chance: 0.7,
    rarity: 1,
    bgColor: "bg-yellow-100",
    textColor: "#854d0e",
  },
  {
    id: "common",
    name: "Common",
    emoji: "🍌",
    imagePath: "common.png",
    chance: 0.25,
    rarity: 2,
    bgColor: "bg-green-100",
    textColor: "#166534",
  },
  {
    id: "uncommon",
    name: "Uncommon",
    emoji: "🥭",
    imagePath: "uncommon.png",
    chance: 0.0489,
    rarity: 3,
    bgColor: "bg-blue-100",
    textColor: "#1e40af",
  },
  {
    id: "rare",
    name: "Rare",
    emoji: "🍍",
    imagePath: "rare.png",
    chance: 0.001,
    rarity: 4,
    bgColor: "bg-purple-100",
    textColor: "#6b21a8",
  },
  {
    id: "epic",
    name: "Epic",
    emoji: "🥝",
    imagePath: "epic.png", // Now using the dedicated epic image
    chance: 0.0001,
    rarity: 5,
    bgColor: "bg-pink-100",
    textColor: "#be185d",
  },
  {
    id: "ultraRare",
    name: "Ultra Rare",
    emoji: "🍓",
    imagePath: "ultra-rare.png",
    chance: 0.0000025, // 1 in 400,000
    rarity: 6,
    bgColor: "bg-orange-100",
    textColor: "#9a3412",
  },
  {
    id: "legendary",
    name: "Legendary",
    emoji: "👑",
    imagePath: "legendary.png",
    chance: 0.0000001, // 1 in 10,000,000
    rarity: 7,
    bgColor: "bg-amber-100",
    textColor: "#92400e",
  },
]

