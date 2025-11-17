# 🎮 Word Guessing Game

A fun and interactive word guessing game built with React and TypeScript. Test your vocabulary skills by guessing words letter by letter with helpful hints!

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

## 📸 Preview

> A modern word guessing game where players attempt to discover hidden words by suggesting letters, similar to the classic Hangman game.
<img src="https://i.imgur.com/mDhcPlx.png" width="700" height="500">



## ✨ Features

- 🎯 **Letter-by-letter guessing** - Discover words one letter at a time
- 💡 **Helpful hints** - Each word comes with a contextual tip
- 🔢 **Limited attempts** - Challenge yourself with a set number of tries
- ✅ **Visual feedback** - See which letters you've guessed (correct/incorrect)
- 🔄 **Restart anytime** - Start a new game whenever you want
- 📊 **Score tracking** - Monitor your progress in real-time
- 🎨 **Modern UI** - Clean and responsive interface

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/eRodrigoVanini/word-guessing-game.git
```

2. Navigate to the project directory
```bash
cd word-guessing-game
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## 🎮 How to Play

1. **Read the Hint** - A tip about the hidden word is displayed at the top
2. **Guess a Letter** - Type a single letter in the input field
3. **Submit Your Guess** - Click the "Confirmar" (Confirm) button
4. **Watch Your Progress** - Correct letters will appear in the word, incorrect ones will be marked
5. **Win or Lose** - Discover the word before running out of attempts!

### Game Rules

- You have **word length + 5** attempts to guess the word
- Each correct letter reveals all occurrences in the word
- Duplicate letters are not allowed
- The game ends when you either:
  - ✅ Discover all letters in the word (Victory!)
  - ❌ Run out of attempts (Game Over)

## 🛠️ Technologies Used

- **React** - UI library for building the interface
- **TypeScript** - Type-safe JavaScript
- **CSS Modules** - Scoped and maintainable styling
- **Vite** - Fast build tool and development server

## 📁 Project Structure
```
word-guessing-game/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Tips/
│   │   ├── Letter/
│   │   ├── Input/
│   │   ├── Button/
│   │   └── Letters/
│   ├── utils/
│   │   └── words.ts
│   ├── App.tsx
│   └── App.module.css
├── public/
├── package.json
└── README.md
```

## 🎨 Components

- **Header** - Displays game title, attempt counter, and restart button
- **Tip** - Shows the hint for the current word
- **Letter** - Renders individual letter slots for the word
- **Input** - Text input for guessing letters
- **Button** - Confirm button for submissions
- **LettersUsed** - Displays all previously guessed letters with color coding

## 🔧 Customization

### Adding New Words

Edit the `src/utils/words.ts` file to add your own words and hints:
```typescript
export const WORDS = [
  { word: "REACT", tip: "A JavaScript library for building user interfaces" },
  { word: "TYPESCRIPT", tip: "JavaScript superset with static typing" },
  // Add your words here
];
```

### Adjusting Difficulty

Change the `ATTEMPTS_MARGIN` constant in `App.tsx`:
```typescript
const ATTEMPTS_MARGIN = 5; // Increase for easier, decrease for harder
```

## 🐛 Bug Fixes

This version includes fixes for:
- ✅ Input field getting stuck after duplicate letter warning
- ✅ Score not resetting when starting a new game

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@eRodrigoVanini](https://github.com/eRodrigoVanini)
- LinkedIn: [Rodrigo Vanini](www.linkedin.com/in/erodrigovanini)

## 🌟 Acknowledgments

- Inspired by the classic Hangman game
- Built as a learning project for React and TypeScript
- Thanks to the React community for excellent documentation

---

<p align="center">Made with ❤️ and React</p>
<p align="center">⭐ Star this repo if you found it helpful!</p>
