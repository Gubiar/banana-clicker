import { BANANA_TYPES } from "@/lib/constants"
import type { BananaType } from "@/lib/types"
import Image from "next/image"

interface BananaIconProps {
  type: BananaType
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function BananaIcon({ type, size = "md", className = "" }: BananaIconProps) {
  const bananaType = BANANA_TYPES.find((b) => b.id === type) || BANANA_TYPES[0]

  const sizeMap = {
    sm: 40,
    md: 60,
    lg: 80,
    xl: 120,
  }

  const sizeValue = sizeMap[size]

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{
        filter:
          type === "legendary"
            ? "drop-shadow(0 0 8px gold)"
            : type === "ultraRare"
              ? "drop-shadow(0 0 5px orange)"
              : type === "epic"
                ? "drop-shadow(0 0 3px hotpink)"
                : "",
      }}
    >
      <Image
        src={`/bananas/${bananaType.imagePath}`}
        alt={`${bananaType.name} Banana`}
        width={sizeValue}
        height={sizeValue}
        className="object-contain"
      />
    </div>
  )
}

