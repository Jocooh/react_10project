import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import ModalBox from "../Modal/ModalBox";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

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
  const [title, setTitle] = useState("하...");

  const articles = useSelector((state) => state.Article);

  const titles = useSelector((state) => state);
  // console.log(titles);

  const modalHandle = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
  };

  const params = useParams();
  // console.log("params", params);

  // const please = articles.map((item, i) => {
  //   return item.id === params ? setTitle(item.title) : "다시해라";
  // });

  return (
    <StyledSection>
      {/* 지은 : 제목, 내용 적힌 박스를 감싸는 div */}
      <StyledPostBoxDiv>
        <h3>{title}</h3>
        {/* 지은 : 작성자, 시간, 수정&삭제 아이콘 부분 감싸는 div */}
        <StyledIconSpanDiv>
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
