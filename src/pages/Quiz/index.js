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

    const answerCheck = () => {
        setMyAnswer(variant);
        setClickAnswer(true);
    };

    const correctAnswerCheck = () => {
        if(myAnswer === data[currentQuestion].answer){
            setScore(score + 1);
        }
    };

    

    return(
        <>
        </>
    );
}

export default Quiz;