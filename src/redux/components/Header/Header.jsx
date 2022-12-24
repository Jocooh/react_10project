import React from "react";

import { useNavigate } from "react-router-dom";


import {
    StyledHeader,
    StyledLi,
    StyledNav,
    StyledUl,
    StyledHeaderLogoImg,
} from "./styles";

export default function Header() {

    const navigate = useNavigate();


    return (
        <StyledHeader>
            <StyledHeaderLogoImg src='assets/Logo.png' />
            <StyledNav>
                <StyledUl>

                    <StyledLi onClick={()=> {navigate("/");}}>최신글</StyledLi>
                    <StyledLi onClick={()=> {navigate("/life");}}>인생</StyledLi>
                    <StyledLi onClick={()=> {navigate("/relationship");}}>인간관계</StyledLi>
                    <StyledLi onClick={()=> {navigate("/family");}}>가족</StyledLi>
                    <StyledLi onClick={()=> {navigate("/hobby");}}>취미</StyledLi>

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
