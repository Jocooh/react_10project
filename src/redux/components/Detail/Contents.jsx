import React from "react";
import Comment from "./Comment";
import PostDetail from "./PostDetail";
import { StyledMain, StyledLine, StyledContainer } from "./styled";

export default function Contents() {
    return (
        <StyledMain>
            <StyledContainer>
                <PostDetail />
                <StyledLine />
                <Comment />
            </StyledContainer>
        </StyledMain>
    );
}
