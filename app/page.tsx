import BananaGame from "@/components/banana-game"
import LanguageSelector from "@/components/language-selector"
import GameTitle from "@/components/game-title"
import CreditLine from "@/components/credit-line"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-yellow-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <div className="absolute top-4 left-4 z-50">
        <CreditLine />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <GameTitle />
        <BananaGame />
      </div>
    </main>
  )
}

