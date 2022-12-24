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
            <StyledHeaderLogoImg
                src='assets/Logo.png'
                onClick={() => {
                    navigate("/");
                }}
            />
            <StyledNav>
                <StyledUl>
                    <StyledLi
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        최신글
                    </StyledLi>
                    <StyledLi
                        onClick={() => {
                            navigate("/life");
                        }}
                    >
                        인생
                    </StyledLi>
                    <StyledLi
                        onClick={() => {
                            navigate("/relationship");
                        }}
                    >
                        인간관계
                    </StyledLi>
                    <StyledLi
                        onClick={() => {
                            navigate("/family");
                        }}
                    >
                        가족
                    </StyledLi>
                    <StyledLi
                        onClick={() => {
                            navigate("/hobby");
                        }}
                    >
                        취미
                    </StyledLi>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    );
}
