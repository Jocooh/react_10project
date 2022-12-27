import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import ModalBox2 from "../Modal/ModalBox2";
import { RiEditBoxLine, RiDeleteBinLine } from "react-icons/ri";
import { StyledCommentLi, StyledCommentDateSpan } from "../Comment/styled";
import { StyledCommentLiIcon } from "../Comment/styled";
// import axios from 'axios';

export default function CommentList({
  commentList,
  selectedComments,
  setCommentList,
}) {
  // const comments = useSelector((state) => state.comments);
  //commentlist 들어오는것도 확인
  // 비밀번호 모달

  //selectedComments

  const [modalOpen, setModalOpen] = useState(false);
  const modalHandle = (id, password) => {
    selectedComments?.map((item) => {
      console.log(item);
      return id === item.id ? setModalOpen(true) : console.log("응 아님");
    });
  };

  // ul태그 밑에 li태그로 리스트들을 다 뽑아 왔어요..
  return (
    <>
      <ul>
        {selectedComments?.map((item) => {
          return (
            // 유진 - 가로정렬하려고 div태그를 StyledCommentLiIcon으로 만들어서 import함!!
            <StyledCommentLiIcon key={item.id}>
              <StyledCommentLi>{item.comment}</StyledCommentLi>
              <StyledCommentDateSpan>{item.date}</StyledCommentDateSpan>
              <RiEditBoxLine
                onClick={() => {
                  return modalHandle(item.id, item.password);
                }}
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
