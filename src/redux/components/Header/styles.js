import styled from "styled-components";

// 헤더
export const StyledHeader = styled.div`
  width: 100%;
  height: 143px;

  background: #f0d8f8;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 로고
export const StyledHeaderLogoImg = styled.img`
  width: 200px;
  cursor: pointer;
`;

// nav 태그
export const StyledNav = styled.nav`
  width: 700px;
  margin-left: 50px;
`;

// ul 태그
export const StyledUl = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// li 태그
export const StyledLi = styled.button`
  display: inline;
  padding: 0 20px;

  font-size: 25px; // 카테고리 폰트 사이즈
  font-weight: bold;

  background-color: transparent;
  border: none;

  &:hover {
    border-radius: 10px;
    background-color: #e7b5f7;
  }

  cursor: pointer;
`;
