import React from "react";
import styled from "styled-components";

export default function Modal() {
    return (
        <StyledDiv>
            <StyledButton>수정</StyledButton>
            <StyledButton>삭제</StyledButton>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 20px;
    cursor: pointer;
`;
