import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import UserInputTextarea from "./UserInputTextarea";
import { InputBody, InputBox } from "./styles";
import Select from "./Select";

function UserInput() {
  return (
    <>
      <form>
        <InputBody>
          <InputBox>
            <Select></Select>
            <Input />
          </InputBox>
          <UserInputTextarea />
          <Button></Button>
        </InputBody>
      </form>
    </>
  );
}

export default UserInput;
