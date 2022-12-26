import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Input2 from "../common/Input2";
// import UserInputTextarea from "./UserInputTextarea";
import { InputBody, InputBox, UserPassword } from "./styles";
import Select from "./Select";
import { TextArea } from "./styles";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { addTitle } from "../../modules/article";
import { NavLink, useNavigate } from "react-router-dom"; // 유진
=======
import axios from "axios";
// import axios from "axios";
>>>>>>> c75f9d285ecf6e26250a3dbd99df435fe1e406d1

function UserInput() {
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
<<<<<<< HEAD
  const [category, setCategory] = useState(0); //select[0] = 카테고리를선택하세요
  const [selected, setSelected] = useState(1);

=======
  const [selected, setSelected] = useState(0);
>>>>>>> c75f9d285ecf6e26250a3dbd99df435fe1e406d1
  const dispatch = useDispatch();

  const [pwd, setPwd] = useState("");
  const [content, setContent] = useState("");

  //카테고리 넘버 지정 함수
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  //post구버전인데 axios 안되면 써야할꺼같아서 넣어놓을꼐요!
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const arc = { title, userName, selected, pwd, content };

  //   fetch("http://localhost:3000/posts", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(arc),
  //   }).then(() => {
  //     console.log("new article added");
  //   });
  // };

  //**한번씩 이상할떄 있으면 port랑 저희 작업물 다 껐다가 다시 시작해주세요 **/
  const submitHandler = (e) => {
    e.preventDefault();
    const arc = { title, userName, selected, pwd, content };
    axios.post("http://localhost:3000/posts", arc).then(() => {
      alert("업로드 완료");
      window.location = "/";
    });
  };

  const navigate = useNavigate(); // 유진 - 저장 클릭 시 페이지 이동

  return (
    <>
      <form onSubmit={submitHandler}>
        <InputBody>
          <InputBox>
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
            <Button
              onClick={() => navigate("/detail/{id}")} // 유진 - 저장 클릭 시 해당 게시글 페이지로
              type="submit"
              style={{ float: "right" }}
            >
              저장
            </Button>
          </div>
        </InputBody>
      </form>
    </>
  );
}
export default UserInput;
