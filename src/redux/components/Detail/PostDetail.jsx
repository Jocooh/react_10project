import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ModalBox from "../Modal/ModalBox";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

// import { useParams } from "react-router-dom";

import {
  StyledSection,
  StyledIconSpanDiv,
  StyledPostBoxDiv,
  StyledSpan,
  StyledPostP,
} from "./styled";

export default function PostDetail() {
  const [modalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState("");

  const articles = useSelector((state) => state.Article);

  const titles = useSelector((state) => state);
  console.log(titles);

  const modalHandle = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
  };

  const params = useParams();
  console.log("params", params);

  // const fetchTodos = async () => {
  //   const { data } = await axios.get("http://localhost:3001/detail");
  //   setTitle(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  // };

  // const please = articles.map((item, i) => {
  //   return item.id === params ? setTitle(item.title) : "다시해라";
  // });

  return (
    <StyledSection>
      <StyledPostBoxDiv>
        <StyledIconSpanDiv>
          <div>{title}</div>
          <CgProfile />
          <StyledSpan>{articles.userName}</StyledSpan>
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
