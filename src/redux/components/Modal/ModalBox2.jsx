import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../../modules/comments";

import {
  StyledModalBg,
  StyledModalContainer,
  StyledModalBox,
  ModalTitle,
  ModalPwInput,
  ModalButton,
  ModalCloseButton,
} from "./styles2";

// 댓글 수정, 삭제 눌렀을 때 뜨는 비밀번호 모달
export default function ModalBox2({
  commentList,
  setModalOpen,
  comment,
  setCommentList,
}) {
  //123

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset"; //모달창 클로즈 시 배경 스크롤 활성화
  };

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log(commentList);
    const passwordId = commentList.id;
    console.log(passwordId);
    if (confirmPassword === commentList.password) {
      setModalOpen(false);
      axios.delete(`http://localhost:3001/comments/${passwordId}`).then(() => {
        const { data } = axios
          .get("http://localhost:3001/comments")
          .then(() => {
            setCommentList(...setCommentList, data);
          });
      });
    }
  };

  // } else {
  //   alert("비밀번호 틀렸음");
  // }
  //다시받아서 props set렌더링
  //1.state가 변경되는부분
  //2.props가 변경되는 부분
  //3.부모컴포넌트가 변경되는 부분

  return (
    <StyledModalBg>
      <StyledModalContainer>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

        <StyledModalBox onSubmit={deleteHandler}>
          <ModalTitle>비밀번호를 입력해주세요.</ModalTitle>
          <ModalPwInput
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <br />
          <ModalButton>확인</ModalButton>
        </StyledModalBox>
      </StyledModalContainer>
    </StyledModalBg>
  );
}
