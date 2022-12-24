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
          <ModalPwInput type="password" />
          <br />
          <ModalButton>확인</ModalButton>
        </StyledModalBox>
      </StyledModalContainer>
    </StyledModalBg>
  );
}
