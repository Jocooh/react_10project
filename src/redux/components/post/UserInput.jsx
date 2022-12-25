import React, { useState } from "react";
import Button from "../common/Button";
import Input2 from "../common/Input2";
import UserInputTextarea from "./UserInputTextarea";
import { InputBody, InputBox, UserPassword } from "./styles";
import Select from "./Select";
import { TextArea } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTitle } from "../../modules/article";


function UserInput() {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState(0); //select[0] = 카테고리를선택하세요
  const [selected, setSelected] = useState(1);
  const dispatch = useDispatch();

  const [pwd, setPwd] = useState("");
  const [content, setContent] = useState("");
  const [mainList, setMainList] = useState([]);


  const useArticle = useSelector((state) => state.Article);

  //user title작성
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  //user닉네임작성
  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  //카테고리 넘버 지정 함수
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  // 글 저장 함수
  const submitArticle = (e) => {
    e.preventDefault();

    const newTitle = {
      title, //현재 title(state)
      userName,
      category: selected,
      id: uuidv4(),
    };

    dispatch(addTitle(newTitle));
    console.log(newTitle);
  };


  return (
    <>
      <form onSubmit={submitArticle}>
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

            <Button type="submit" style={{ float: "right" }}>
              저장

          </div>
        </InputBody>
      </form>
    </>
  );
}

export default UserInput;
