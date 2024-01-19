import './App.css';
import { StartScreen } from './components/startscreen/StartScreen';
import { Game } from './components/game/Game';
import { GameOver } from './components/gameOver/GameOver'
import { useCallback, useEffect, useState } from 'react';
import { wordsList } from './data/data';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const PickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};
  }

  const startGame = () => {

    const { word, category } = PickWordAndCategory();
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
    
    console.log(wordLetters)
    setGameStage(stages[1].name)
  };

  const gameOver = () => {
    setGameStage(stages[2].name)
  };

  const returnStart = () => {
    setGameStage(stages[0].name)
  };

  const retryGame = () => {
    setGameStage(stages[1].name)
  };

  const verifyLetter = () => {

  };

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game gameOver={gameOver} />}
      {gameStage === 'end' && <GameOver retryGame={retryGame} returnStart={returnStart} />}
    </div>
  )
}

export default App
