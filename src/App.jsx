import './App.scss';

import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './componentes/Welcome';
import Question from './componentes/Question'
import GameOver from './componentes/GameOver'
import Footer from './componentes/Footer'



function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [dispatch])


  return (
    <div className="App">
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Question/>}
      {quizState.gameStage === 'End' && <GameOver/>}

      <Footer/>
    </div>
  );
}

export default App;
