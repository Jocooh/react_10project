import React from "react";
import { NoneArrow } from "./styles";

function Select({ value, onChange }) {
  return (
    <div>
      <NoneArrow onChange={onChange} value={value}>
        <option value="0">카테고리를 선택해주세요</option>
        <option value="1">인생</option>
        <option value="2">인간관계</option>
        <option value="3">가족</option>
        <option value="4">취미</option>
      </NoneArrow>
    </div>
  );
}

export default Select;
