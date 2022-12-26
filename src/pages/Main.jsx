import React from "react";
import { ListBody, ListBox, ListBtn, SearNBtn } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeTitle } from "../redux/modules/detail";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.Article);
  console.log(articles);

  //이 주소를 해당 글의 route 주소로 하자.
  // const userAddress = articles.map((item) => {
  //   return item.id;
  // });
  // console.log("유저주소", userAddress);

  //타이틀 바꿔달라고 요청하자.
  // const handleUserAddress = () => {
  //   const detailTitle = articles.map((item) => item.title);
  //   console.log("디테일 타이틀", detailTitle);

  //   dispatch(changeTitle(detailTitle));
  // };
  const navigate = useNavigate();

  const [list, setList] = useState(null);

  const fetchList = async () => {
    const { data } = await axios.get("http://localhost:3000/posts");
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <ListBody>
        <SearNBtn>
          <ListBtn
            onClick={() => {
              navigate("/post");
            }}
          >
            글쓰기
          </ListBtn>
        </SearNBtn>
        <br />
        <p>최신글부터 올라옵니다.</p>
        {list?.map((item) => (
          <ListBox key={item.id}>
            <NavLink
              to={`/detail/${item.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              {item.title}
            </NavLink>
          </ListBox>
        ))}
      </ListBody>
    </div>
  );
}

export default Main;
