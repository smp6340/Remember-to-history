import React, { useState } from "react";

//Data
import { data } from "../../data/data";

const [currentQuestion, setCurrentQuestion] = useState(0);
const [myAnswer, setMyAnswer] = useState("");
const [score, setScore] = useState(0);
const [finish, setFinish] = useState(false);
const [show, setShow] = useState(false);
const [clickAnswer, setClickAnswer] = useState(false);

//사용자가 선택한 정답을 보여주는 함수
export function answerCheck() {
    setMyAnswer(variant);
    setClickAnswer(true);
};

//문제를 맞췄을 경우에 점수를 +1시켜 저장하는 함수
export function correctAnswerCheck(){
    if(myAnswer === data[currentQuestion].answer){
        setScore(score + 1);
    }
};

//정답공개 함수
export function showAnswer() {
    setShow(true);
};

//사용자가 선택한 정답을 초기화하는 함수
export function reset() {
    setShow(false);
    setClickAnswer(false);
};

//문제 풀이가 끝났는지 결정하는 함수
export function finishHandler() {
        if(currentQuestion === data.length - 1){
            setFinish(true);
        }
};

//게임을 재시작하는 함수
export function startOver() {
    setCurrentQuestion(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
};