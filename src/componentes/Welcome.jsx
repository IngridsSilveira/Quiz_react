import './Welcome.scss'
import Quiz from '../img/quiz.svg'

const Welcome = () => {
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="tela de quiz" />
    </div>
  )
}

export default Welcome