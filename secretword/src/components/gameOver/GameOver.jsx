import './GameOver.css'

export const GameOver = ({ retryGame, returnStart }) => {
  return (
    <div>
      <h1>VOCÊ PERDEU</h1>
      <button onClick={returnStart}>Voltar a home</button>
      <button onClick={retryGame}>Jogar de novo</button>
    </div>
  )
}
