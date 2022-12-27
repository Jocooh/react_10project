import styled from "styled-components";

// 지은 : main 태그
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 지은 : PostDetail 컴포넌트와 Comment 컴포넌트를 감싸는 div 태그
export const StyledContainer = styled.div`
  max-width: 860px;
`;

// 지은 : PostDetail과 Comment 구분선
export const StyledLine = styled.b`
  margin: 0 auto;
  display: block;
  width: 860px;
  height: 1px;
  border: 0;
  background-color: #9c9c9c;
`;

// PostDetail Css 게시글 본문 전체
export const StyledSection = styled.section`
  /* width: 860px; */
  min-height: 400px;
  margin: 30px;
`;

//게시글 사용자 이름, 아이콘, 시간, 시간아이콘, 수정삭제버튼
export const StyledIconSpanDiv = styled.div`
  font-size: small;
  color: rgba(0, 0, 0, 0.5);
`;

export const StyledPostBoxDiv = styled.div`
  padding: 10px 25px;
`;

// 게시글의 사용자이름, 시간,
export const StyledSpan = styled.span`
  margin: 0 5px;
`;

//게시글 본문
export const StyledPostP = styled.p`
  padding: 10px;
`;
