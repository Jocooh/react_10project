import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ModalBox from "../Modal/ModalBox";

export default function PostDetail() {
    const [modalOpen, setModalOpen] = useState(false);

    const modalHandle = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
    };

    return (
        <StyledSection>
            <blockquote>
                <h3>튜터님 죽을거같아요 너무 어려워요</h3>
                <CgProfile />
                <span>최치원</span>
                <MdOutlineWatchLater />
                <span>22.12.24 13:00</span>
                <RiEditBoxLine
                    onClick={modalHandle}
                    style={{ cursor: "pointer" }}
                />
                <RiDeleteBinLine
                    onClick={modalHandle}
                    style={{ cursor: "pointer" }}
                />
                {modalOpen && <ModalBox setModalOpen={setModalOpen} />}
                <p>튜터님이 저희 팀원 해주세요....🤣</p>
            </blockquote>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    border: 1px solid black;
    width: 860px;
    min-height: 400px;
    margin: 30px;
`;
