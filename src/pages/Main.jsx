import React, { useEffect } from "react";
import { ListBody, ListBox, ListBtn, SearNBtn } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeTitle } from "../redux/modules/detail";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Main() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.Article);
  console.log(articles);

  //이 주소를 해당 글의 route 주소로 하자.
  const userAddress = articles.map((item) => {
    return item.id;
  });
  console.log("유저주소", userAddress);

  //타이틀 바꿔달라고 요청하자.
  const handleUserAddress = () => {
    const detailTitle = articles.map((item) => item.title);
    console.log("디테일 타이틀", detailTitle);

    dispatch(changeTitle(detailTitle));
  };
  const navigate = useNavigate();

  const [newlist, setNewlist] = useState(null);

  const fetchTodos = async () => { const { data } = await axios.get("http:/localhost:3001/posts");
    setNewlist(data);}

    useEffect(() => {
      fetchTodos();
    })
    console.log(newlist)


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

        {articles.map((article) => {
          return (
            <ListBox key={article.id}>
              <NavLink
                to={`/detail/${article.id}`}
                style={{ color: "black", textDecoration: "none" }}
                onClick={handleUserAddress}
              >
                {article.title}
                <div>{article.date}</div>
              </NavLink>
            </ListBox>
          );
        })}
      </ListBody>
    </div>
  );
}

export default Main;
