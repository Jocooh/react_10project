import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../modules/comments";
import CommentList from "./CommentList";
import {
    StyledCommentSection,
    StyledCommentForm,
    StyledCommentInput,
    StyledPwtInput,
    StyledCommentButton,
} from "../Comment/styled";

export default function Comment() {
    const dispatch = useDispatch();

    const [comment, setComment] = useState("");

    // comment 추가 버튼 누르면 댓글 추가되는 onsubmit 함수
    const handleCommentChange = (event) => {
        setComment(event.target.value);
        console.log(comment);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        if (comment.trim() === "") {
            alert("댓글을 입력해주세요.");
            return;
        }

        const newComment = {
            comment: comment,
        };

        dispatch(addComment(newComment));

        // 댓글 추가 된 후 댓글 input창 초기화
        setComment("");
    };

    return (
        <StyledCommentSection>
            <h3 style={{ padding: "0 15px" }}>Comment</h3>
            {/* input 태그와 button 태그 감싸는 Form 태그 */}
            <StyledCommentForm onSubmit={handleCommentSubmit}>
                <StyledCommentInput
                    type='text'
                    value={comment}
                    placeholder='댓글을 입력해주세요.'
                    onChange={handleCommentChange}
                />
                <StyledPwtInput
                    type='password'
                    placeholder='비밀번호를 입력해주세요.'
                />
                <StyledCommentButton>추가</StyledCommentButton>
            </StyledCommentForm>
            {/* 지은: 요 밑에는 댓글 리스트가 들어오는 댓글 리스트 컴포넌트 */}
            <CommentList />
        </StyledCommentSection>
    );
}