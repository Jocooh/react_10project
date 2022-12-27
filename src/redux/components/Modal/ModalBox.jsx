import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import {
  StyledModalBg,
  StyledModalContainer,
  StyledModalBox,
  ModalTitle,
  ModalPwInput,
  ModalButton,
  ModalCloseButton,
} from "./styles";
import axios from "axios";

export default function ModalBox({ setModalOpen, title, setTitle }) {
  console.log("모달1 title props", title);
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset"; //모달창 클로즈 시 배경 스크롤 활성화
  };

  // 유진 - 모달 확인 누를 시 글수정 페이지로 넘어가기
  // const navig/ate = useNavi/gate();
  // const gotoPostEdit = () => {
  //   setModalOpen(false);
  // };

  const [confirmFix, setConfirmFix] = useState("");
  const [confirmArticle, setConfirmArticle] = useState("");
  const [targetTitle, setTargetTitle] = useState(null);
  const [editTitle, setEditTitle] = useState({ content: "" });

  const handleConfirmArticle = (e) => {
    setConfirmFix(e.target.value); //비밀번호 입력값 확인 함수
  };

  //****************************** */
  const fixHandler = (e) => {
    e.preventDefault();

    const articleId = title.id;
    console.log(articleId);
  }; //fetch...?
  // const articleId = title.id;
  // if (confirmFix === title.password) {
  //   setModalOpen(false);
  //   axios.patch(`http://localhost:3000/posts/${articleId}`).then(() => {
  //     const { data } = axios.get("http://localhost:3000/posts").then(() => {
  //       setTitle(data);
  //     });
  //   });
  // } else {
  //   console.log("error");
  // }

  return (
    <StyledModalBg>
      <StyledModalContainer>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

        <StyledModalBox onSubmit={fixHandler}>
          <ModalTitle>비밀번호를 입력해주세요.</ModalTitle>
          <ModalPwInput
            type="password"
            value={confirmFix}
            onChange={handleConfirmArticle}
          />
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
