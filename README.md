# 🍌 Banana Clicker

An idle browser game about collecting bananas of different rarities. Click bananas, build your collection, and discover rare specimens!

## Game Description

Banana Clicker is a casual idle game where you:

- Click on a banana to increase your collection
- Automatically receive a new random banana every 3 minutes
- Collect 7 different types of bananas with varying rarity levels
- Track statistics like total clicks and your rarest banana

## Features

### Banana Types and Rarities

| Banana Type | Rarity | Chance                     |
| ----------- | ------ | -------------------------- |
| Normal      | 1      | 70%                        |
| Common      | 2      | 25%                        |
| Uncommon    | 3      | 4.89%                      |
| Rare        | 4      | 0.1%                       |
| Epic        | 5      | 0.01%                      |
| Ultra Rare  | 6      | 0.00025% (1 in 400,000)    |
| Legendary   | 7      | 0.00001% (1 in 10,000,000) |

### Game Mechanics

- **Click System**: Click the banana to increase your click count
- **Drop System**: Get a random banana drop every 3 minutes
- **Collection**: View all your collected bananas in an organized grid
- **Statistics**: Track your progress with detailed statistics
- **Persistence**: Game state is automatically saved to your browser's localStorage

## Technical Implementation

- Built with **Next.js** and **React**
- Styled with **Tailwind CSS** for responsive design
- State management with **Zustand**
- Animations with **Framer Motion**
- Fully internationalized (English and Portuguese)
- Dark/Light theme support

## Setup and Development

1. Clone the repository

```bash
git clone https://github.com/username/banana-clicker.git
cd banana-clicker
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game

## Live Demo

Visit [https://banana-clicker.example.com](https://banana-clicker.example.com) to play the game online.

## License

MIT License
