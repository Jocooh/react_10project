import React from "react";
import {
    StyledHeader,
    StyledLi,
    StyledNav,
    StyledUl,
    StyledHeaderLogoImg,
} from "./styles";

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeaderLogoImg src='assets/Logo.png' />
            <StyledNav>
                <StyledUl>
                    <StyledLi>최신글</StyledLi>
                    <StyledLi>인생</StyledLi>
                    <StyledLi>인간관계</StyledLi>
                    <StyledLi>가족</StyledLi>
                    <StyledLi>취미</StyledLi>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    );
}
