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
        src="/assets/Logo.png"
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
            id="0"
          >
            최신글
          </StyledLi>
          <StyledLi
            onClick={() => {
              navigate("/life");
            }}
            id="1"
          >
            인생
          </StyledLi>
          <StyledLi
            onClick={() => {
              navigate("/relationship");
            }}
            id="2"
          >
            인간관계
          </StyledLi>
          <StyledLi
            onClick={() => {
              navigate("/family");
            }}
            id="3"
          >
            가족
          </StyledLi>
          <StyledLi
            onClick={() => {
              navigate("/hobby");
            }}
            id="4"
          >
            취미
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
}
