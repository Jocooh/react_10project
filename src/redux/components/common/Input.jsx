import React from "react";
import { ColumnInput } from "../post/styles";

function Input() {
  return (
    <>
      <input
        style={{ width: "300px", borderRadius: "15px" }}
        type="text"
        placeholder="제목"
      ></input>
      <ColumnInput>
        <input type="text" placeholder="작성자"></input>
        <input type="password" placeholder="비밀번호"></input>
      </ColumnInput>
    </>
  );
}

export default Input;
