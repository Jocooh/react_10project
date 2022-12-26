import React from "react";
import Contents from "../redux/components/Detail/Contents";

export default function Detail() {
  return (
    <>
      <Contents />
    </>
  );
}

// import React from "react";
// import Contents from "../redux/components/Detail/Contents";

// import {} from "./styles";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { useState, useEffect } from "react";
// import axios from "axios";

// function Detail() {
//   const articles = useSelector((state) => state.Article);
//   console.log(articles);

//   const navigate = useNavigate(); // 수정버튼 클릭시 post페이지로 이동, 삭제버튼 클릭시 이전페이지로 이동

//   const [title, setTitle] = useState(); // 기존 포스팅된 제목이 와야함
//   const [contents, setContents] = useState({ contents: "" }); // 기존 포스팅된 내용이 와야함

//   //유진 - patch에서 사용할 id, 수정값 state 추가
//   const [targetId, setTargetId] = useState(null);
//   const [editTitle, setEditTitle] = useState({ title: "" });
//   const [editContents, setEditContents] = useState({ title: "" });

//   const fetchTitle = async () => {
//     const { data } = await axios.get("http://localhost:3001/posts");
//     setTitle(data);
//   };

//   const fetchContents = async () => {
//     const { data } = await axios.get("http://localhost:3001/posts");
//     setContents(data);
//   };

//   const onClickDeleteButtonHandler = (titleId) => {
//     axios.delete(`http://localhost:3001/life/${titleId}`); // 유진 - life대신 바로 직전 페이지 넣어야함
//   };

//   const onClickEditButtonHandler = (titleId, edit) => {
//     axios.patch(`http://localhost:3001/posts/${titleId}`, edit);
//   };

//   useEffect(() => {
//     fetchTitle();
//   }, []);
//   // useEffect(() => {
//   //   fetchContents();
//   // }, []);

//   return (
//     <div>
//       {/* 유진 - 여기 비번 모달 해결하고 post페이지가 떠야함!!
//       근데 모달해결이 안돼서 제가 맞게 썼는지 확인할수가 없네요ㅠㅋㅋㅋㅋ
//       모달 해결하고 마저 시도하겠습니다ㅠㅠ*/}
//       <Contents />
//     </div>
//   );
// }

// export default Detail;
