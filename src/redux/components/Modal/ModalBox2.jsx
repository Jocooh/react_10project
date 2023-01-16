import axios from "axios";
import React, { useState } from "react";
import { RiSingleQuotesL } from "react-icons/ri";

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
  selVal,
  commentList,
  setModalOpen,
  setCommentList,
}) {

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset"; //모달창 클로즈 시 배경 스크롤 활성화
  };

  //selVal = 1 수정
  //selVal = 2 삭제

  if (selVal === 1) {
    console.log("수정용");
  } else {
    console.log("삭제용");
  }

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };


  const deleteHandler = () => {
    const passwordId = commentList.id;
    console.log(passwordId);
    if (confirmPassword === commentList.password) {
      setModalOpen(false);
      axios.delete(`http://localhost:3001/comments/${passwordId}`).then(() => {
        axios.get("http://localhost:3001/comments").then((res) => {
          console.log(res.data);
          setCommentList(res.data);
        });
      });
    } else {
      alert("비밀번호를 다시 입력해주세요");
    }
  };


  const updateHandler = () => {
    const passwordId = commentList.id;

    if (confirmPassword === commentList.password) {
      setModalOpen(false);
      axios.delete(`http://localhost:3001/comments/${passwordId}`).then(() => {
        axios.get("http://localhost:3001/comments").then((res) => {
          console.log(res.data);
          setCommentList(res.data);
        });
      });
    } else {
      alert("비밀번호를 다시 입력해주세요");
    }
    document.body.style.overflow = "unset";
  };
  //다시받아서 props set렌더링
  //1.state가 변경되는부분
  //2.props가 변경되는 부분
  //3.부모컴포넌트가 변경되는 부분

  return (
    <StyledModalBg>
      <StyledModalContainer>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

        <StyledModalBox
          onSubmit={(e) => {
            e.preventDefault();
            if (selVal === 1) {
              return updateHandler;
            } else {
              return deleteHandler;
            }
          }}
        >
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
