import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const DropdownMenu = styled.select`
    position: relative;
    border: 0 none;
    outline: 0 none;
    padding: 0 5px;
    width: 30%;
    height: 5vh;
    font-size: 20px;
    z-index: 3;
    font-family: "ONE"; 
    font-style: normal;
    :hover{
        cursor: pointer; 
    }
`;

export const SubmitBtn = styled.button`
    position: relative;
    width: 10%;
    font-family: "ONE";
    font-style: normal;
    font-size: 17px;
    :hover{
        cursor: pointer;
    }
`;