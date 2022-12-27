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
  required,
  pattern,
  maxLength,
}) {
  return (
    <>
      <StyledInput
        maxLength={20}
        required={required}
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
