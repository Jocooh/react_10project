import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Input2 from "../common/Input2";
import { InputBody, InputBox, UserPassword } from "./styles";
import Select from "./Select";
import { TextArea } from "./styles";

import axios from "axios";

function UserInput() {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [selected, setSelected] = useState(0);

  const [pwd, setPwd] = useState("");
  const [content, setContent] = useState("");

  //카테고리 넘버 지정 함수
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const today = new Date();

  const submitHandler = (e) => {
    e.preventDefault();
    const arc = {
      title,
      userName,
      selected,
      pwd,
      content,
      date: today.toLocaleString(),
    };
    axios.post("http://localhost:3001/posts", arc).then(() => {
      alert("저장 완료");
      window.location = "/";
    });
  };

  return (
    <>
      <form className="frm" onSubmit={submitHandler}>
        <InputBody>
          <InputBox>
            <Select onChange={handleSelected} value={selected}></Select>
            {/* title */}
            <Input2
              maxLength
              required
              id="title"
              placeholder="제목을 입력해주세요"
              width="400px"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {/*User & password  */}
            <UserPassword>
              <Input2
                required
                id="username"
                placeholder="닉네임"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Input2
                required
                id="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
            </UserPassword>
          </InputBox>
          {/* 글작성 공간 */}
          <TextArea
            type="textarea"
            id="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></TextArea>
          <div>
            <Button type="submit">저장</Button>
          </div>
        </InputBody>
      </form>
    </>
  );
}

export default UserInput;
