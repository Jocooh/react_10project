import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Input2 from "../common/Input2";
import { InputBody, InputBox, UserPassword } from "./styles";
import Select from "./Select";
import { TextArea } from "./styles";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"; // 유진
import axios from "axios";

function UserInput() {
    const [title, setTitle] = useState("");
    const [userName, setUserName] = useState("");
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();

    const [pwd, setPwd] = useState("");
    const [content, setContent] = useState("");




  const today = new Date();
  //카테고리 넘버 지정 함수
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  // const getErrorMsg = (errorCode, params) => {
  //   switch (errorCode) {
  //     case "01":
  //       return alert(
  //         `[필수 입력 값 검증 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(제목 : '${params.title}', 내용 : '${params.contents}')`
  //       );
  //     case "02":
  //       return alert(
  //         `[내용 중복 안내]\n\n입력하신 제목('${params.title}')및 내용('${params.contents}')과 일치하는 TODO는 이미 TODO LIST에 등록되어 있습니다.\n기 등록한 TODO ITEM의 수정을 원하시면 해당 아이템의 [상세보기]-[수정]을 이용해주세요.`
  //       );
  //     default:
  //       return `시스템 내부 오류가 발생하였습니다. 고객센터로 연락주세요.`;
  //   }
  // };

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

    const arc = {
      title,
      userName,
      selected,
      pwd,
      content,
      date: today.toLocaleString(),
    };

    axios.post("http://localhost:3000/posts", arc).then(() => {
      alert("업로드 완료");
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
