import React, { useState } from "react";
import styled from "styled-components";
import ModalBox from "./ModalBox";

export default function Modal() {
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandle = () => {
        setModalOpen(true);
    };

    return (
        <StyledDiv>
            <StyledButton onClick={modalHandle}>수정</StyledButton>
            {modalOpen && <ModalBox setModalOpen={setModalOpen} />}
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
