import React from "react";
import UserInput from "../redux/components/post/UserInput";

function Post({}) {
  return (
    <>
      <div>
        <UserInput />
      </div>
    </>
  );
}

export default Post;

// function Post({}) {
//   const [postTitle, setPostTitle] = useState(""); // 유진 -포스트제목
//   const [postContents, setPostContents] = useState(""); // 유진 - 포스트내용
//   const [postNick, setPostNick] = useState(""); // 유진 - 닉네임
//   const [postPW, setPostPW] = useState(""); // 유진 - 포스트pw
//   // 카테고리 추가 필요함!!!

//   const newPost = {
//     // 카테고리 추가 필요
//     title: postTitle,
//     contents: postContents,
//     nickname: postNick,
//   };

//   return (
//     <>
//       <div>
//         <UserInput />
//       </div>
//     </>
//   );
// }

// export default Post;
