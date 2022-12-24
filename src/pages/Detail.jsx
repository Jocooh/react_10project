import React from "react";
import { useParams } from "react-router-dom";
import Contents from "../redux/components/Detail/Contents";

export default function Detail() {
  const { id } = useParams();
  return (
    <div>
      {id}번 게시물 상세페이지
      <Contents />
    </div>
  );
}

// import Post from "./Post"; // 유진 - Post.jsx에서 내용을 받아와야해서 import합니다

// // input(detail) 제목 내용 사용자 비번 받아오기!!!
// // 비번은 표시ㄴㄴ 삼항연산자로 일치불일치 유효성테스트 필요

// // Post.jsx에서 가져온 useState
// // const [postTitle, setPostTitle] = useState(""); // 유진 -포스트제목
// // const [postContents, setPostContents] = useState(""); // 유진 - 포스트내용
// // const [postNick, setPostNick] = useState(""); // 유진 - 닉네임
// // const [postPW, setPostPW] = useState(""); // 유진 - 포스트pw
// // // 카테고리 추가 필요함!!!

// // props로 post를 받아옴
// function Detail() {
//   return;
//   <div>
//     <Post
//       postTitle={postTitle}
//       postContents={postContents}
//       postNick={postNick}
//     ></Post>
//     {/* 유진 - Post.jsx에서 받아와야할거 같아서 <div>를 <Post>태그로 바꿨습니다 */}
//     <Comments></Comments>
//     {/* 유진 - 코멘트도 추가해야함! 우선 태그만 추가했어요 추후 component 분리해야합니당 */}
//   </div>;
