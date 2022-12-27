import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../modules/comments";
import CommentList from "./CommentList";
import { useParams } from "react-router-dom";
import {
  StyledCommentSection,
  StyledCommentForm,
  StyledCommentInput,
  StyledPwtInput,
  StyledCommentButton,
} from "../Comment/styled";
import { isElementType } from "@testing-library/user-event/dist/utils";

export default function Comment() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");

  const [commentList, setCommentList] = useState(null);

  const paramId = useParams();

  const fetchList = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setCommentList(data);
  };
  useEffect(() => {
    fetchList();
  }, []);

  const selectedComments = commentList?.filter(
    (item) => Number(item.postid) === Number(paramId.id)
  );

  // comment 추가 버튼 누르면 댓글 추가되는 onsubmit 함수
  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (comment.trim() === "" || password.trim() === "") {
      alert("댓글과 비밀번호를 입력해주세요.");
      return;
    }
    const today = new Date();
    const cmt = {
      id: uuidv4(),
      postid: paramId.id,
      comment,
      password,
      date: today.toLocaleString(),
    };
    axios.post("http://localhost:3001/comments", cmt).then(() => {
      alert("댓글 추가 완료");
      setCommentList([...commentList, cmt]);
      setComment("");
      setPassword("");
      console.log(commentList);
    });
    console.log("comment에 있는 commentList", commentList);

    //     const newComment = {
    //         id: uuidv4(),
    //         comment: comment,
    //         password: password,
    //     };

    //     dispatch(addComment(newComment));
    //     console.log(newComment);

    //     // 댓글 추가 된 후 댓글 input창 초기화
    //     setComment("");
    //     setPassword("");
  };
  // useEffect(() => {
  //   fetchList();
  // }, []);

  return (
    <StyledCommentSection>
      <h3 style={{ padding: "0 15px" }}>Comment</h3>
      {/* input 태그와 button 태그 감싸는 Form 태그 */}
      <StyledCommentForm onSubmit={handleCommentSubmit}>
        <StyledCommentInput
          type="text"
          value={comment}
          placeholder="댓글을 입력해주세요."
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <StyledPwtInput
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <StyledCommentButton>추가</StyledCommentButton>
      </StyledCommentForm>
      {/* 지은: 요 밑에는 댓글 리스트가 들어오는 댓글 리스트 컴포넌트 */}
      <CommentList
        setCommentList={setCommentList}
        selectedComments={selectedComments}
        commentList={commentList}
      />
    </StyledCommentSection>
  );
}
