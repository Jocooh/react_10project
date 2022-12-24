import React from "react";
import CommentList from './CommentList';
import {
    StyledCommentSection,
    StyledCommentForm,
    StyledCommentInput,
    StyledPwtInput,
    StyledCommentButton,
} from "./styled";

export default function Comment() {
    return (
        <StyledCommentSection>
            <h3 style={{ padding: "0 15px" }}>Comment</h3>
            {/* input 태그와 button 태그 감싸는 Form 태그 */}
            <StyledCommentForm>
                <StyledCommentInput
                    type='text'
                    placeholder='댓글을 입력해주세요.'
                />
                <StyledPwtInput
                    type='password'
                    placeholder='비밀번호를 입력해주세요.'
                />
                <StyledCommentButton>추가</StyledCommentButton>
            </StyledCommentForm>
            {/* 지은: 요 밑에는 댓글 리스트가 들어오는 댓글리 스트 컴포넌트 */}
            <CommentList />
        </StyledCommentSection>
    );
}
