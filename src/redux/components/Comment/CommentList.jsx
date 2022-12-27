import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import ModalBox2 from "../Modal/ModalBox2";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { StyledCommentLi, StyledCommentDateSpan } from "../Comment/styled";
import { StyledCommentLiIcon } from "../Comment/styled";
// import axios from 'axios';

export default function CommentList({ commentList, setCommentList }) {
  // const comments = useSelector((state) => state.comments);
  //commentlist 들어오는것도 확인
  // 비밀번호 모달

  const [modalOpen, setModalOpen] = useState(false);
  const modalHandle = (id) => {
    // setModalOpen(true);
    commentList?.map((item) => {
      console.log(item);
      return id === item.id ? setModalOpen(true) : console.log("응 아님");
      // console.log("map아이템", item); //id값이 알아서 찍힘
      // document.body.style.overflow = "hidden"; //모달창 오픈 시 배경 스크롤 비활성화
    });
  };

  // console.log("item아이디", item.id);
  // console.log("commentList", commentList);

  // console.log(comments);
  // comments.filter((item) => item.password !== action.payload);

  // ul태그 밑에 li태그로 리스트들을 다 뽑아 왔어요..
  return (
    <>
      <ul>
        {commentList?.map((item) => {
          return (
            // 유진 - 가로정렬하려고 div태그를 StyledCommentLiIcon으로 만들어서 import함!!
            <StyledCommentLiIcon key={item.id}>
              <StyledCommentLi>{item.comment}</StyledCommentLi>
              <StyledCommentDateSpan>{item.date}</StyledCommentDateSpan>
              <RiEditBoxLine
                onClick={modalHandle}
                style={{
                  cursor: "pointer",
                  marginLeft: "30px",
                  float: "right",
                }}
              />
              <RiDeleteBinLine
                onClick={() => {
                  return modalHandle(item.id, item.password);
                }}
                style={{
                  cursor: "pointer",
                  marginLeft: "15px",
                  float: "right",
                }}
              />
              {modalOpen && (
                <ModalBox2
                  setCommentList={setCommentList}
                  commentList={item}
                  setModalOpen={setModalOpen}
                />
              )}
            </StyledCommentLiIcon>
          );
        })}
      </ul>
    </>
  );
}
