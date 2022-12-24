import React, { useState } from "react";
import Button from "../common/Button";
// import Input from "../common/Input";
import Input2 from "../common/Input2";
import UserInputTextarea from "./UserInputTextarea";
import { InputBody, InputBox, UserPassword } from "./styles";
import { StyledBtn } from "../common/stylecommon";
import Select from "./Select";

function UserInput() {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleUser = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

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
              onChange={handleTitle}
            />
            {/*User & password  */}
            <UserPassword>
              <Input2
                id="username"
                placeholder="닉네임"
                onChange={handleUser}
              />
              <Input2
                id="password"
                placeholder="비밀번호를 입력해주세요"
                type="password"
              />
            </UserPassword>
          </InputBox>
          {/* 글작성 공간 */}
          <UserInputTextarea />
          <div>
            <Button style={{ float: "right" }}>저장</Button>
          </div>
        </InputBody>
      </form>
    </>
  );
}

export default UserInput;
