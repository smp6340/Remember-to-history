import React, { Component } from "react";

//Style
import * as S from "./style";

//Component
import Dropdown from "../../components/dropdown";

const Home = () => {
    return(
        <>
        <S.container>
            <S.Title>
                기억해야한다
                <Dropdown />
            </S.Title>
        </S.container>
        </>
    );
}

export default Home;