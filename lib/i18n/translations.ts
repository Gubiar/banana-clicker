export type Language = "pt-BR" | "en"

export interface Translations {
  gameTitle: string
  clickTheBanana: string
  yourCollection: string
  stats: string
  totalClicks: string
  totalBananas: string
  rarestBanana: string
  nextDrop: string
  nextDropDescription: string
  readyForNewBanana: string
  none: string
  createdWith: string
  by: string
  howItWorks: string
  darkMode: string
  lightMode: string
  techExplanation: {
    title: string
    gameLogic: string
    techStack: string
    stateManagement: string
    randomization: string
    persistence: string
    i18n: string
    ui: string
    close: string
  }
  bananaTypes: {
    normal: string
    common: string
    uncommon: string
    rare: string
    epic: string
    ultraRare: string
    legendary: string
  }
}

export const translations: Record<Language, Translations> = {
  "pt-BR": {
    gameTitle: "Banana Clicker",
    clickTheBanana: "Clique na Banana!",
    yourCollection: "Sua Coleção de Bananas",
    stats: "Estatísticas",
    totalClicks: "Total de Cliques:",
    totalBananas: "Total de Bananas:",
    rarestBanana: "Banana Mais Rara:",
    nextDrop: "Próxima Banana:",
    nextDropDescription: "Ganhe uma banana aleatória a cada 3 minutos!",
    readyForNewBanana: "Pronto para uma nova banana!",
    none: "Nenhuma",
    createdWith: "Criado com",
    by: "por",
    howItWorks: "Como funciona?",
    darkMode: "Modo escuro",
    lightMode: "Modo claro",
    techExplanation: {
      title: "Como Funciona o Banana Clicker",
      gameLogic: "Lógica do Jogo",
      techStack: "Stack Tecnológica",
      stateManagement:
        "Gerenciamento de Estado: O jogo usa Zustand para gerenciar o estado e persistir dados no localStorage do navegador. Isso permite que seu progresso seja salvo mesmo depois de fechar o navegador.",
      randomization:
        "Sistema de Aleatoriedade: Cada banana tem uma chance específica de ser obtida, seguindo as probabilidades definidas (Normal: 70%, Comum: 25%, Incomum: 4.89%, etc).",
      persistence:
        "Persistência: Todos os dados do jogo (cliques, coleção de bananas, próximo horário de drop) são salvos automaticamente no seu navegador.",
      i18n: "Internacionalização: O jogo suporta múltiplos idiomas (Português do Brasil e Inglês) usando um sistema de tradução personalizado.",
      ui: "Interface: Construída com React e Tailwind CSS para uma experiência responsiva e visualmente agradável.",
      close: "Fechar",
    },
    bananaTypes: {
      normal: "Normal",
      common: "Comum",
      uncommon: "Incomum",
      rare: "Rara",
      epic: "Épica",
      ultraRare: "Ultra Rara",
      legendary: "Lendária",
    },
  },
  en: {
    gameTitle: "Banana Clicker",
    clickTheBanana: "Click the Banana!",
    yourCollection: "Your Banana Collection",
    stats: "Stats",
    totalClicks: "Total Clicks:",
    totalBananas: "Total Bananas:",
    rarestBanana: "Rarest Banana:",
    nextDrop: "Next Drop:",
    nextDropDescription: "Get a random banana every 3 minutes!",
    readyForNewBanana: "Ready for a new banana!",
    none: "None",
    createdWith: "Created with",
    by: "by",
    howItWorks: "How it works?",
    darkMode: "Dark mode",
    lightMode: "Light mode",
    techExplanation: {
      title: "How Banana Clicker Works",
      gameLogic: "Game Logic",
      techStack: "Tech Stack",
      stateManagement:
        "State Management: The game uses Zustand to manage state and persist data in the browser's localStorage. This allows your progress to be saved even after closing the browser.",
      randomization:
        "Randomization System: Each banana has a specific chance of being obtained, following the defined probabilities (Normal: 70%, Common: 25%, Uncommon: 4.89%, etc).",
      persistence:
        "Persistence: All game data (clicks, banana collection, next drop time) is automatically saved in your browser.",
      i18n: "Internationalization: The game supports multiple languages (Brazilian Portuguese and English) using a custom translation system.",
      ui: "UI: Built with React and Tailwind CSS for a responsive and visually pleasing experience.",
      close: "Close",
    },
    bananaTypes: {
      normal: "Normal",
      common: "Common",
      uncommon: "Uncommon",
      rare: "Rare",
      epic: "Epic",
      ultraRare: "Ultra Rare",
      legendary: "Legendary",
    },
  },
}

