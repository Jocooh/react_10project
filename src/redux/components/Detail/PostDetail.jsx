import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import ModalBox from "../Modal/ModalBox";

import { useParams } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Contents from "../redux/components/Detail/Contents";

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
  const [title, setTitle] = useState(null);

  const paramId = useParams();

  const fetchtitle = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setTitle(data);
  };

  useEffect(() => {
    fetchtitle();
    console.log(title);
  }, []);

  const selectedDetail = title?.filter(
    (item) => item.id === Number(paramId.id)
  )[0];

  const handleModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
  };

  return (
    <StyledSection>
      {/* 지은 : 제목, 내용 적힌 박스를 감싸는 div */}

      <StyledPostBoxDiv>
        <h3>{selectedDetail?.title}</h3>

        <StyledIconSpanDiv>
          <CgProfile />
          <StyledSpan style={{ marginLeft: "5px" }}>
            {selectedDetail?.userName}
          </StyledSpan>
          <MdOutlineWatchLater style={{ marginLeft: "15px" }} />
          <StyledSpan style={{ marginLeft: "5px" }}>
            {selectedDetail?.date}
          </StyledSpan>
          <RiEditBoxLine
            onClick={handleModal}
            style={{ cursor: "pointer", marginLeft: "30px" }}
          />
          <RiDeleteBinLine
            onClick={handleModal}
            style={{ cursor: "pointer", marginLeft: "15px" }}
          />
          {modalOpen && (
            <ModalBox
              title={title}
              setTitle={setTitle}
              setModalOpen={setModalOpen}
            />
          )}
        </StyledIconSpanDiv>
        <StyledPostP>{selectedDetail?.content}</StyledPostP>
      </StyledPostBoxDiv>
    </StyledSection>
  );
}
