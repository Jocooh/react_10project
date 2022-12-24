import React from "react";
import { StyledInput } from "./stylecommon";

function Input2({
  type,
  id,
  placeholder,
  value,
  onChange,
  width,
  borderRadius,
}) {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ width: width, borderRadius: borderRadius }}
      />
    </>
  );
}

export default Input2;
