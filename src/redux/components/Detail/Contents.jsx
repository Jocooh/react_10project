import React from "react";
import styled from "styled-components";
import Comment from './Comment';
import PostDetail from './PostDetail';

export default function Contents() {
    return (
        <StyledMain>
            <PostDetail />
            <StyledLine />
            <Comment />
        </StyledMain>
    );
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const StyledLine = styled.b`
    margin: 0 auto;
    display: block;
    width: 860px;
    height: 1px;
    border: 0;
    background-color: gray
`;

