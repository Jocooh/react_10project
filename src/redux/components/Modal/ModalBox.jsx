import React from "react";

import styled from "styled-components";

import {
    StyledModalBg,
    StyledModalContainer,
    StyledModalBox,
    ModalTitle,
    ModalPwInput,
    ModalButton,
    ModalCloseButton,
} from "./styles";


export default function ModalBox() {
    const StyledModalBg = styled.div`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    `;

    const StyledModalContainer = styled.div`
        width: 600px;
        height: 400px;
        background-color: #f6ebfa;
        border-radius: 10px;
    `;

    const StyledModalBox = styled.form`
        text-align: center;
    `;

    const ModalTitle = styled.div`
        font-size: x-large;
        font-weight: bold;
        margin-top: 100px;
    `;

    const ModalPwInput = styled.input`
        background-color: white;
        margin-top: 40px;
        width: 200px;
        border-radius: 20px;
        padding: 10px;
        border: 1px solid white;
    `;

    const ModalButton = styled.button`
        cursor: pointer;
        margin-top: 40px;
        width: 100px;
        height: 40px;
        border-radius: 20px;
        background-color: transparent;
        border: 1px solid white;
        font-size: large;
        font-weight: bold;
        &:hover {
            border: 2px solid white;
            box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
            -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
            -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
        }
    `;

    const ModalCloseButton = styled.button`
        float: right;
        margin: 5px;
        border: none;
        border-radius: 100%;
        background-color: transparent;
        font-size: x-large;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
            -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
            -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.28);
        }
    `;


export default function ModalBox({ setModalOpen }) {
    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset"; //모달창 클로즈 시 배경 스크롤 활성화
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
