import React from "react";

//Style
import * as S from "./styles";

const Problem = ({currentQuestion}) => {
    return(
        <div>
            <div>
                <S.Question>{currentQuestion}</S.Question>
            </div>
        </div>
    );
}

export default Problem;