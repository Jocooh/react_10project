import React from "react";
import { NoneArrow } from "./styles";

function Select() {
  return (
    <div>
      <NoneArrow>
        <option value="">카테고리를 선택해주세요</option>
        <option value="life">인생</option>
        <option value="relationship">인간관계</option>
        <option value="famili">가족</option>
        <option value="hobby">취미</option>
      </NoneArrow>
    </div>
  );
}

export default Select;
