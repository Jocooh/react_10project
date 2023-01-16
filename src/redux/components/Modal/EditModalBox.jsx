import axios from "axios";
import React, { useState } from "react";
import EditComment from '../Comment/EditComment';

import {
    StyledModalBg,
    StyledModalContainer,
    StyledModalBox,
    ModalTitle,
    ModalPwInput,
    ModalButton,
    ModalCloseButton,
} from "./styles2";

// 댓글 수정 눌렀을 때 뜨는 비밀번호 모달
export default function EditModalBox({
    commentList,
    setEditModalOpen,
    setCommentList,
}) {
    const closeModal = () => {
        setEditModalOpen(false);
        document.body.style.overflow = "unset"; //모달창 클로즈 시 배경 스크롤 활성화
    };
  

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    // 수정
    const editHandler = (e) => {
        e.preventDefault();

        const passwordId = commentList.id;

        if (confirmPassword === commentList.password) {
            setEditModalOpen(false);
            axios
                .patch(`http://localhost:3001/comments/${passwordId}`)
                .then(() => {
                    axios.get("http://localhost:3001/comments").then((res) => {
                        console.log(res.data);
                        setCommentList(res.data);
                    });
                });
        } else {
            alert("비밀번호를 다시 입력해주세요");
        }
    };

    return (
        <StyledModalBg>
            <StyledModalContainer>
                <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

                <StyledModalBox onSubmit={editHandler}>
                    <ModalTitle>비밀번호를 입력해주세요.</ModalTitle>
                    <ModalPwInput
                        type='password'
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                    <br />
                    <ModalButton>수정</ModalButton>
                </StyledModalBox>
            </StyledModalContainer>
        </StyledModalBg>
    );
}
