import React, { useEffect } from "react";
import { ListBody, ListBox, ListBtn, SearNBtn } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

function Main() {
  const articles = useSelector((state) => state.Article);
  console.log(articles);

  const navigate = useNavigate();

  const [list, setList] = useState(null);

  const fetchList = async () => {
    const { data } = await axios.get(
      "http://localhost:3001/posts?_sort=date&_order=desc"
    );
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
              <br />
              {item.date}
            </NavLink>
          </ListBox>
        ))}
      </ListBody>
    </div>
  );
}

export default Main;
