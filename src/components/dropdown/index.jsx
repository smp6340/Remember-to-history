import React from "react";
import * as S from "./styles";

const Dropdown = () => {
    return(
        <S.Container>
            <S.DropdownMenu>
                <option key="default" value="default">선택하세요</option>
                <option key="threeKingdoms" value="threeKingdoms">삼국시대</option>
                <option key="shilla" value="shilla">통일신라</option>
                <option key="goryeo" value="Goryeo">고려</option>
                <option key="joseon" value="joseon">조선</option>
                <option key="koreanEmpire" value="koreanEmpire">대한제국</option>
                <option key="japaneseEra" value="japaneseEra">일제강점기</option>
            </S.DropdownMenu>
            <S.SubmitBtnu type="submit">시작하기</S.SubmitBtnu>
        </S.Container>
    );
}

export default Dropdown;