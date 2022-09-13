import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
//Style
import * as S from "./styles";

//Data
import data from "../../data/data";

const Problem = (type) => {

    const params = useParams();

    const [question, setQuestion] = useState(        
    {
        id: "",
        question: "",
        answer: "",
        variants: []
    })

    //푼 문제의 인덱스를 저장하고 있음
    const [already, setAready] = useState([]);

    const changeQuestion = () => {
        const random = Math.ceil(Math.random()*2)-1;
        console.log(random);
        if(!already.includes(random)) {
            switch(params.type) {
                case 'threeKingdoms' :
                    setQuestion(data.threeKingdoms[random]);
                    break;
                case 'shilla' :
                    setQuestion(data.shilla[random]);
                    break;
                case 'Goryeo' : 
                    setQuestion(data.Goryeo[random]);
                    break;
                case 'joseon' :
                    setQuestion(data.joseon[random]);
                    break;
                case 'koreanEmpire' :
                    setQuestion(data.koreanEmpire[random]);
                    break;
                case 'japaneseEra' :
                    setQuestion(data.japaneseEra[random]);
                    break;
                default :
                    break;
             }
            setAready([...already, random]);
        }
        else
            changeQuestion();
    }

    useEffect(()=>{
        changeQuestion();
        console.log(params);
    },[])

    
    return(
        <S.Background>
            <div>
                <S.Question>{question.question}</S.Question>
                <S.Options>
                    {
                    question.variants.map(i => {
                        return(
                            <S.Option>{i}</S.Option>
                        )
                    })}
                </S.Options>
            </div>
        </S.Background>
    );
}

export default Problem;