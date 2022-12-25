import React, { useState } from "react";
import Button from "../common/Button";
// import Input from "../common/Input";
import Input2 from "../common/Input2";
import UserInputTextarea from "./UserInputTextarea";
import { InputBody, InputBox, UserPassword } from "./styles";
import Select from "./Select";
import { TextArea } from "./styles";

function UserInput() {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [content, setContent] = useState("");

  const [mainList, setMainList] = useState([]);


  const addItem = (event) =>{
    event.preventDefault()

    const newPlan = {
      title: title,
      name: userName,
      content: content,
      password: pwd,
    };

    setMainList([...mainList, newPlan])
    console.log(mainList)

  }

  return (
    <>
      <form>
        <InputBody>
          <InputBox>
            <Select></Select>
            {/* title */}
            <Input2
              id="title"
              placeholder="제목을 입력해주세요"
              width="400px"
              borderRadius="10px"
              onChange={(e) => {
                setTitle(e.target.value)}}
            />
            {/*User & password  */}
            <UserPassword>
              <Input2
                id="username"
                placeholder="닉네임"
                onChange={(e) => {
                  setUserName(e.target.value)}}
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
          <TextArea type="textarea"  id="content" onChange={(e) => {
    setContent(e.target.value);
  }} ></TextArea>
          {/* <UserInputTextarea id="content" onChange={(e) => {
    setContent(e.target.value);
  }} /> */}
          <div>
            <Button onClick={addItem} style={{ float: "right" }}>저장</Button>
          </div>
        </InputBody>
      </form>
    </>
  );
}

export default UserInput;
