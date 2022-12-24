import React from "react";
import styled from "styled-components";

export default function Comment() {
    return (
        <StyledCommentSection>
            <h3 style={{ padding: "0 15px" }}>Comment</h3>
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
        </StyledCommentSection>
    );
}

const StyledCommentSection = styled.section`
    border: 1px solid black;
    width: 820px;
    min-height: 400px;
    padding: 0 20px;
    margin: 30px;
`;

const StyledCommentForm = styled.form`
    margin: 0 10px;
`;

const StyledCommentInput = styled.input`
    margin: 0 15px 0 0;
    width: 400px;
    height: 40px;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    background-color: rgba(234, 207, 243, 0.459);
`;

const StyledPwtInput = styled.input`
    width: 170px;
    height: 40px;
    margin: 0 15px 0 0;
    border-radius: 15px;
    border: none;
    padding-left: 10px;
    background-color: rgba(234, 207, 243, 0.459);
`;

const StyledCommentButton = styled.button`
    width: 70px;
    height: 40px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    font-size: medium;
    font-weight: bold;
    background-color: rgba(234, 207, 243, 0.459);
`;
