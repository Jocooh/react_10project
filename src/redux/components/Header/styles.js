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

// 헤더의 p태그
export const StyledHeaderLogoImg = styled.img`
    width: 150px;
`;

// nav 태그
export const StyledNav = styled.nav`
    width: 800px;
    margin-left: 60px;
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

    font-size: large;
    font-weight: bold;

    background-color:transparent;
    border:none;

    &:hover {
        border-radius: 10px;
        background-color: #e7b5f7;
        
    }

    cursor: pointer;
`;
