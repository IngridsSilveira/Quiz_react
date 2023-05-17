import "./Welcome.scss";
import Quiz from "../img/quiz.png";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <img src={Quiz} alt="tela de quiz" />
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={()=>dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  );
};

export default Welcome;
