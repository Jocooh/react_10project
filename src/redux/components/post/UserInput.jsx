import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Input2 from "../common/Input2";
// import UserInputTextarea from "./UserInputTextarea";
import { InputBody, InputBox, UserPassword } from "./styles";
import Select from "./Select";
import { TextArea } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTitle, submitArticle } from "../../modules/article";
// import axios from "axios";

function UserInput() {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const [pwd, setPwd] = useState("");
  const [content, setContent] = useState("");
  const [mainList, setMainList] = useState([]);

  //카테고리 넘버 지정 함수
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const arc = { title, userName, selected, pwd, content };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arc),
    }).then(() => {
      console.log("new article added");
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputBody>
          <InputBox>
            <p>Selected:{selected}</p>
            <Select onChange={handleSelected} value={selected}></Select>
            {/* title */}
            <Input2
              id="title"
              placeholder="제목을 입력해주세요"
              width="400px"
              borderRadius="10px"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {/*User & password  */}
            <UserPassword>
              <Input2
                id="username"
                placeholder="닉네임"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Input2
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
            <Button type="submit" style={{ float: "right" }}>
              저장
            </Button>
          </div>
        </InputBody>
      </form>
    </>
  );
}
export default UserInput;
