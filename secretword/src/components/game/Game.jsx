import './Game.css'
import forca1 from '../../assets/forcaZeroErro.png'

export const Game = ({ gameOver }) => {
  return (
    <>
      <div>
        <img src={forca1} alt="nada" />
      </div>
      <div className='game'>
        <p className='points'>
          <span>Pontuação: 000</span>
        </p>
        <h1>adivinhe a paravra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <p>ainda tem x tentativas</p>
        <div className="wordContainer">
          <span className='letter'>A</span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>tente adivinhar uma letra</p>
          <form>
            <input type="text" name='letter' maxLength='1' required />
            <button>jogar</button>
          </form>
        </div>
        <div className="wrongLetttersContainer">
          <p>Letras ja utilizadas:</p>
          <span>a, </span>
          <span>b, </span>
        </div>
      </div>
    </>
  )
}
