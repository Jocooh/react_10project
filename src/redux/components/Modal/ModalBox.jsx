import React from "react";
import {
    StyledModalBg,
    StyledModalContainer,
    StyledModalBox,
    ModalTitle,
    ModalPwInput,
    ModalButton,
    ModalCloseButton,
} from "./styles";

export default function ModalBox({ setModalOpen }) {
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <StyledModalBg>
            <StyledModalContainer>
                <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
                <StyledModalBox>
                    <ModalTitle>비밀번호를 입력해주세요.</ModalTitle>
                    <ModalPwInput type='password' />
                    <br />
                    <ModalButton>확인</ModalButton>
                </StyledModalBox>
            </StyledModalContainer>
        </StyledModalBg>
    );
}
