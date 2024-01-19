import './Game.css'

export const Game = ({ gameOver }) => {
  return (
    <div>
      <h1>game</h1>
      <button onClick={gameOver} >game over</button>
    </div>
  )
}
