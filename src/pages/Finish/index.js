import React from "react";

//Style
import * as S from "./styles";

//Functions
import * as Quiz from "../../functions/Quiz/index";

//Data
import { data } from "../../data/data";

const Finish = () => {
    return(
        <div>
            <div>
                <div>{'문제 풀이가 끝났습니다. 최종 점수는 ${score}/${data.length - 1}입니다.'}</div>
                <button onClick={() => Quiz.startOver()}>처음으로</button>
            </div>
        </div>
    );
}

export default Finish;