import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ModalBox from "../Modal/ModalBox";
import {
    StyledSection,
    StyledIconSpanDiv,
    StyledPostBoxDiv,
    StyledSpan,
    StyledPostP,
} from "./styled";

export default function PostDetail() {
    // 비밀번호 모달 
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandle = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
    };

    return (
        <StyledSection>
            {/* 지은 : 제목, 내용 적힌 박스를 감싸는 div */}
            <StyledPostBoxDiv>
                <h3>튜터님 죽을거같아요 너무 어려워요</h3>
                {/* 지은 : 작성자, 시간, 수정&삭제 아이콘 부분 감싸는 div */}
                <StyledIconSpanDiv>
                    <CgProfile /> 
                    <StyledSpan>최치원</StyledSpan>
                    <MdOutlineWatchLater />
                    <StyledSpan>22.12.24 13:00</StyledSpan>
                    <RiEditBoxLine
                        onClick={modalHandle}
                        style={{ cursor: "pointer", marginLeft: "30px" }}
                    />
                    <RiDeleteBinLine
                        onClick={modalHandle}
                        style={{ cursor: "pointer", marginLeft: "15px" }}
                    />
                    {modalOpen && <ModalBox setModalOpen={setModalOpen} />}
                </StyledIconSpanDiv>
                <StyledPostP>튜터님이 저희 팀원 해주세요....🤣</StyledPostP>
            </StyledPostBoxDiv>
        </StyledSection>
    );
}
