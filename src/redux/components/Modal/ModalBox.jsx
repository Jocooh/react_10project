import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

  // 유진 - 모달 확인 누를 시 글수정 페이지로 넘어가기
  // const navig/ate = useNavi/gate();
  // const gotoPostEdit = () => {
  //   setModalOpen(false);
  // };

  return (
    <StyledModalBg>
      <StyledModalContainer>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

        <StyledModalBox>
          <ModalTitle>비밀번호를 입력해주세요.</ModalTitle>
          <ModalPwInput type="password" />
          <br />
          <ModalButton
          // onClick={() => {
          // na -vigate ("/post"); // 유진 - 수정하면 포스트 페이지로
          // }}
          // onClick={gotoPostEdit}
          >
            확인
          </ModalButton>{" "}
          {/* 유진 - onClick={} 추가 */}
        </StyledModalBox>
      </StyledModalContainer>
    </StyledModalBg>
  );
}
