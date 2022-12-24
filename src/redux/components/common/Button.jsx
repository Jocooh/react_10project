import React from "react";
import { StyledBtn } from "./stylecommon";

function Button({ type, onClick, children, style }) {
  return (
    <StyledBtn type={type} onClick={onClick} style={style}>
      {children}
    </StyledBtn>
  );
}

export default Button;
