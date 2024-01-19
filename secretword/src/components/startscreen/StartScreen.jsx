import './StartScreen.css'

export const StartScreen = ({ startGame }) => {
  return (
    <div className='containerStart'>
      <h1>Secret Word</h1>
      <button onClick={startGame}>Jogar</button>
    </div>
  )
}
