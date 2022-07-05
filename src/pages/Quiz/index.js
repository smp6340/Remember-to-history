import React, { useState } from "react";

//Data
import { data } from "../../data/data";

//Style
import * as S from "./styles";


const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [myAnswer, setMyAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);
    const [show, setShow] = useState(false);
    const [clickAnswer, setClickAnswer] = useState(false);

    //사용자가 어떤 정답을 선택했는지 보여주는 함수
    const answerCheck = () => {
        setMyAnswer(variant);
        setClickAnswer(true);
    };

    //문제를 맞췄을 경우에 점수를 +1시켜 저장하는 함수
    const correctAnswerCheck = () => {
        if(myAnswer === data[currentQuestion].answer){
            setScore(score + 1);
        }
    };

    //정답공개 함수
    const showAnswer = () => {
        setShow(true);
    };

    //사용자가 선택한 정답을 초기화하는 함수
    const reset = () => {
        setShow(false);

        setClickAnswer(false);
    };

    //문제 풀이가 끝났는지 결정하는 함수
    const finishGame = () => {
            if(currentQuestion === data.length - 1){
                setFinish(true);
            }
    };

    return(
        <>
        </>
    );
}

export default Quiz;