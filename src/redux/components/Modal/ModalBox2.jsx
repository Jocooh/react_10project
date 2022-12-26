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
export default function ModalBox2({ setModalOpen,  comment }) {
    const password = useSelector((state) => state.comments);
    console.log(password);

    const dispatch = useDispatch();

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "unset"; //모달창 클로즈 시 배경 스크롤 활성화
    };

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        console.log(confirmPassword);
    };

    const confirmPasswordSubmit = (event) => {
        event.preventDefault();
        if (confirmPassword === password) {
            return dispatch(removeComment(comment.id));
        }
        console.log(comment.password);
    };

    return (
        <StyledModalBg>
            <StyledModalContainer>
                <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>

                <StyledModalBox onClick={confirmPasswordSubmit}>
                    <ModalTitle>비밀번호를 입력해주세요.</ModalTitle>
                    <ModalPwInput
                        type='password'
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
