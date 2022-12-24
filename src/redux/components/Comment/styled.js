import styled from "styled-components";

// Comment Css
export const StyledCommentSection = styled.section`
  /* width: 820px; */
  min-height: 400px;
  padding: 0 20px;
  margin: 30px;
`;

// 댓글 입력
export const StyledCommentForm = styled.form`
  margin: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
// 댓글 입력 input
export const StyledCommentInput = styled.input`
  /* margin: 0 15px 0 0; */ // 유진 - 간격 맞추려고 주석처리했습니다
  width: 440px;
  height: 40px;
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  background-color: rgba(234, 207, 243, 0.295);
`;

export const StyledPwtInput = styled.input`
  width: 170px;
  height: 40px;
  /* margin-left: 10px; */ // 유진 - 간격 맞추려고 주석처리
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  background-color: rgba(234, 207, 243, 0.295);
`;

// 지은 : 댓글 추가 버튼
export const StyledCommentButton = styled.button`
  width: 70px;
  height: 40px;
  float: right;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
  background-color: rgba(234, 207, 243, 0.295);
  &:hover {
    background-color: #e7b5f7;
  }
`;

// Comment List Css

// 댓글 리스트 li 태그
export const StyledCommentLi = styled.li`
  /* border: 1px solid black; */
  background-color: rgba(234, 207, 243, 0.26);
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 580px;
`;

export const StyledCommentLiIcon = styled.div`
  // 유진 - 아이콘까지 가로로 정렬하려고 코멘트+수정삭제 아이콘이 묶인 div태그를 StyledCommentLiIcon로 바꿨어요!
  display: flex;
  flex-direction: row;
  align-items: center;
`;
