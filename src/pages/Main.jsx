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
        {list?.map((item) => (
          <ListBox key={item.id}>
            <NavLink
              to={`/detail/${item.id}`}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <div>
                <span style={{ marginRight: "40px" }}>{item.title}</span>
                <span
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    marginRight: "auto",
                  }}
                >
                  {item.date}
                </span>
              </div>
            </NavLink>
          </ListBox>
        ))}
      </ListBody>
    </div>
  );
}

export default Main;
