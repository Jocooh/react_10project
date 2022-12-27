import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import ModalBox from "../Modal/ModalBox";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
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
  const [contents, setContents] = useState("");

  const paramId = useParams();

  const fetchtitle = async () => {
    const { data } = await axios.get("http://localhost:3000/posts");
    setTitle(data);
  };

  useEffect(() => {
    fetchtitle();
    console.log(title);
  }, []);

  const selectedDetail = title?.filter(
    (item) => item.id === Number(paramId.id)
  )[0];

  console.log(typeof selectedDetail?.id);

  console.log(typeof paramId?.id);

  console.log(selectedDetail);

  // const articles = useSelector((state) => state.Article);

  // const titles = useSelector((state) => state);
  // console.log(titles);

  const modalHandle = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
  };

  // const params = useParams();

  // console.log("params", params);

  // const please = articles.map((item, i) => {
  //   return item.id === params ? setTitle(item.title) : "다시해라";
  // });

  return (
    <StyledSection>
      {/* 지은 : 제목, 내용 적힌 박스를 감싸는 div */}

      <StyledPostBoxDiv>
        <h3 style={{ backgroundColor: "gray" }}>{selectedDetail?.title}</h3>

        <StyledIconSpanDiv>
          <CgProfile />
          <StyledSpan>{selectedDetail?.userName}</StyledSpan>
          <MdOutlineWatchLater />
          <StyledSpan>{selectedDetail?.date}</StyledSpan>
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
        <StyledPostP>{selectedDetail?.content}</StyledPostP>
      </StyledPostBoxDiv>
    </StyledSection>
  );
}
