import React, { Component } from "react";
import * as S from "./style";
import Dropdown from "../../components/dropdown";

const Home = () => {
    return(
        <>
        <S.container>
            <S.Title>
                도전 역사왕!
                <Dropdown />
            </S.Title>
        </S.container>
        </>
    );
}

export default Home;