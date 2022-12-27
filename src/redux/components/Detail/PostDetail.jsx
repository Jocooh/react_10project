import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import ModalBox from "../Modal/ModalBox";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
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
  const [title, setTitle] = useState(""); // 유진 - 쓴 글에서 가져와야함
  const [contents, setContents] = useState(""); // 유진 - 쓴글에서

  // const fetchTitle = async () => {
  //   const { data } = await axios.get("http://localhost:3001/posts");
  //   setTitle(data);
  // }; // 유진
  // const fetchContents = async () => {
  //   const { data } = await axios.get("http://localhost:3001/posts");
  //   setContents(data);
  // }; // 유진
  // useEffect(() => {
  //   fetchTitle();
  //   fetchContents();
  // }, []);

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
        <h3>{title}</h3>
        {/* <div>
          {title?.map((item) => (
            <p key={item.id}></p>
          ))}
        </div> */}
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
        <StyledPostP>
          {/* {contents?.map((item) => (
            <p key={item.id}></p>
          ))} */}
          튜터님이 저희 팀원 해주세요....🤣
        </StyledPostP>
      </StyledPostBoxDiv>
    </StyledSection>
  );
}
