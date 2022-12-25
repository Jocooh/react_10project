import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ModalBox from "../Modal/ModalBox";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("하...");

  const articles = useSelector((state) => state.Article);

  const titles = useSelector((state) => state);
  console.log(titles);

  const modalHandle = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
  };

  const params = useParams();
  console.log("params", params);

  // const please = articles.map((item, i) => {
  //   return item.id === params ? setTitle(item.title) : "다시해라";
  // });

  return (
    <StyledSection>
      <blockquote>
        <h4>{title}</h4>
        <CgProfile />
        <span>{articles.userName}</span>
        <MdOutlineWatchLater />
        <span>2022.10.22</span>
        <RiEditBoxLine onClick={modalHandle} style={{ cursor: "pointer" }} />
        <RiDeleteBinLine onClick={modalHandle} style={{ cursor: "pointer" }} />
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
