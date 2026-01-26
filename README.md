# 🎯 Word Guessing Game

A fun and interactive word guessing game built with React.js and TypeScript. Test your vocabulary skills by guessing letters to reveal hidden words based on given tips!

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat&logo=vite&logoColor=white)

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [License](#-license)

## 🎮 About the Project

This is a classic word guessing game where players attempt to discover a hidden word by guessing one letter at a time. Each challenge provides a helpful tip to guide the player toward the correct answer. The game tracks your attempts and shows which letters have been used, making it both challenging and educational.

## ✨ Features

- 🔤 **Letter-by-letter guessing** - Input one letter at a time to reveal the hidden word
- 💡 **Helpful tips** - Each word comes with a hint to guide your guesses
- 📊 **Attempt tracking** - Visual display of remaining attempts (word length + 5 extra tries)
- ✅ **Letter history** - See all letters you've used and whether they were correct
- 🔄 **Restart functionality** - Start a new game anytime with confirmation prompt
- 🎨 **Clean UI** - Intuitive and responsive design with CSS modules

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library for building the interface |
| **TypeScript** | Type safety and better developer experience |
| **Vite** | Fast build tool and development server |
| **CSS Modules** | Scoped styling for components |
| **ESLint** | Code linting and quality assurance |
| **gh-pages** | Deployment to GitHub Pages |

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eRodrigoVanini/classroom.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd classroom
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173`

## 🎯 Usage

1. Read the **tip** displayed at the top to get a clue about the hidden word
2. Type a **single letter** in the input field
3. Click **"Confirmar"** (Confirm) to submit your guess
4. The letter will appear in the word if correct, or be marked in the used letters section
5. Keep guessing until you reveal the entire word or run out of attempts
6. Click the restart button to play again with a new word

## 📁 Project Structure

```
classroom/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable UI components
│   │   ├── Button/      # Confirm button component
│   │   ├── Header/      # Game header with attempts counter
│   │   ├── Input/       # Letter input field
│   │   ├── Letter/      # Individual letter display
│   │   ├── Letters/     # Used letters tracker
│   │   └── Tips/        # Tip display component
│   ├── utils/           # Utility functions and word data
│   ├── App.tsx          # Main application component
│   ├── App.module.css   # App-specific styles
│   ├── global.css       # Global styles
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Deploy to GitHub Pages |

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational purposes.

---

<p align="center">
  Made with ❤️ by Rodrigo Vanini
</p>
