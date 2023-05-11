import './App.scss';

import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './componentes/Welcome';
import Question from './componentes/Question'
import { useEffect } from 'react';

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [])


  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Question/>}

    </div>
  );
}

export default App;
