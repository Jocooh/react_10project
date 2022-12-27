import React from "react";
import Comment from "../Comment/Comment";
import PostDetail from "./PostDetail";
import { StyledMain, StyledLine, StyledContainer } from "./styled";

export default function Contents() {
  return (
    <StyledMain>
      <StyledContainer>
        <PostDetail />
        {/* 구분선 */}
        <StyledLine />
        {/* 구분선 */}
        <Comment />
      </StyledContainer>
    </StyledMain>
  );
}
