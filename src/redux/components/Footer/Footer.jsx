import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledFooter, StyledSpan } from "./styles";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSpan>최치원의 시무10조 프로젝트</StyledSpan>
      <StyledSpan>고민상담소 : 금쪽이집합소</StyledSpan>
    </StyledFooter>
  );
}
