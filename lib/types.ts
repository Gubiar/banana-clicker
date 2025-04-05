export type BananaType = "normal" | "common" | "uncommon" | "rare" | "epic" | "ultraRare" | "legendary"

export interface BananaTypeInfo {
  id: BananaType
  name: string
  emoji: string
  imagePath: string
  chance: number
  rarity: number
  bgColor: string
  textColor: string
}

