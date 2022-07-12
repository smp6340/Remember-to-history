import react, {Component, useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//Component
import Background from './components/background';

//Page
import Home from './pages/Home';
import Problem from './pages/Problem';

//DAta
import data from './data/data'

const App = () => {

const [currentQuestion, setCurrentQuestion] = useState(0);
const [myAnswer, setMyAnswer] = useState("");
const [score, setScore] = useState(0);
const [finish, setFinish] = useState(false);
const [show, setShow] = useState(false);
const [clickAnswer, setClickAnswer] = useState(false);

//사용자가 선택한 정답을 보여주는 함수
const answerCheck = (variant) => {
    setMyAnswer(variant);
    setClickAnswer(true);
};

//문제를 맞췄을 경우에 점수를 +1시켜 저장하는 함수
const correctAnswerCheck = () => {
    if(myAnswer === data[currentQuestion].answer){
        setScore(score + 1);
    }
};

//사용자가 이벤트를 발생시켰을 때 문제의 정답을 공개시켜주는 함수
const showAnswer = () => {
    setShow(true);
};

//사용자가 선택한 정답을 초기화하는 함수
const reset = () => {
    setShow(false);
    setClickAnswer(false);
};

//문제 풀이가 끝났는지 결정하는 함수
const finishHandler = () => {
  if(currentQuestion === data.length - 1){
    setFinish(true);
  }
};

//게임을 재시작하는 함수
const startOver = () => {
    setCurrentQuestion(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
};

  return(
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem currentQuestion={currentQuestion} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
