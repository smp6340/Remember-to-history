import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Question = styled.h2`
    z-index: 999;
    position: relative;
    color: white;
    font-size: 50px;
    user-select: none;
`

export const Options = styled.div`
    width: 50%;
    color: white;
    position: relative;
`

export const Option = styled.div`
    border: 3px solid;
    border-radius: 10px;
    margin: 25px;
    padding: 15px;
    display: flex;
    justify-content: center;
    font-family: "ONE";
    font-style: normal;
    user-select: none;
    transition: all 0.5s ease;
    :hover{
        cursor: pointer;
        color: royalblue;
    }
`