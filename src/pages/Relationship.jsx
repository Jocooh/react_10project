import React, { useEffect } from "react";
import { ListBody, ListBox, ListBtn, SearNBtn } from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

function Relationship() {
  const navigate = useNavigate();
  const articles = useSelector((state) => state.Article);
  console.log(articles);

  //#비동기 함수#######################
  const [list, setList] = useState(null);

  const fetchList = async () => {
    const { data } = await axios.get("http://localhost:3000/posts?selected=2");
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
export default Relationship;
